import { gigService } from '../services/gig.service.js'

export function getActionRemoveGig(gigId) {
    return {
        type: 'removeGig',
        gigId
    }
}
export function getActionAddGig(gig) {
    return {
        type: 'addGig',
        gig
    }
}
export function getActionUpdateGig(gig) {
    return {
        type: 'updateGig',
        gig
    }
}

export function getActionAddGigMsg(gigId) {
    return {
        type: 'addGigMsg',
        gigId,
        txt: 'Stam txt'
    }
}

export const gigStore = {
    state: {
        gigs: [],
        isLoading:false,
        // labels: null,
    },
    getters: {
        gigs({ gigs }) { return gigs },
        isLoading({isLoading}){
        return isLoading
        }
    },
    // labels({ labels }) {
    //     console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    //     console.log('state.labels',state.labels)
    //     return labels
    //   },
    mutations: {
        setGigs(state, { gigs }) {
            state.gigs = gigs
        },
        addGig(state, { gig }) {
            state.gigs.push(gig)
        },
        updateGig(state, { gig }) {
            const idx = state.gigs.findIndex(c => c.id === gig._id)
            state.gigs.splice(idx, 1, gig)
        },
        removeGig(state, { gigId }) {
            state.gigs = state.gigs.filter(gig => gig._id !== gigId)
        },
        addGigMsg(state, { gigId, msg }) {
            const gig = state.gigs.find(gig => gig._id === gigId)
            if (!gig.msgs) gig.msgs = []
            gig.msgs.push(msg)
        },
        setIsLoading(state,{isLoading}){
            state.isLoading = isLoading
        }
        // setLabels(state, { labels }) {
        //     state.labels = labels
        //     // console.log('state.labels',state.labels)
        //   },
    },
    actions: {

        
        async addGig(context, { gig }) {
            try {
                gig = await gigService.save(gig)
                context.commit(getActionAddGig(gig))
                return gig
            } catch (err) {
                console.log('gigStore: Error in addGig', err)
                throw err
            }
        },
        async updateGig(context, { gig }) {
            try {
                gig = await gigService.save(gig)
                context.commit(getActionUpdateGig(gig))
                return gig
            } catch (err) {
                console.log('gigStore: Error in updateGig', err)
                throw err
            }
        },
        // async loadGigs(context) {
        //     try {
        //         const gigs = await gigService.query()
        //         context.commit({ type: 'setGigs', gigs })
        //     } catch (err) {
        //         console.log('gigStore: Error in loadGigs', err)
        //         throw err
        //     }
        // },
        loadGigs: async ({ commit }, { filterBy, sortBy,isLoading }) => {
            commit({type:'setIsLoading', isLoading: true})
            // console.log('hey i here')
            try {
                // console.log('filterBy in gig store',filterBy)
                if (!filterBy) filterBy = { txt: '', status: '', labels: null,price:0, }
                if (!sortBy) sortBy = null
                // const labels = gigService.getLabels()
                // console.log('sortBysssssssssssssssssssssss',sortBy)
                // commit({ type: 'setLabels', labels })

                const gigs = await gigService.query(filterBy,sortBy)
                // console.log('gigs',gigs)
                commit({ type: 'setGigs', gigs })
            } catch (err) {
                console.log('Could not get gigs')
                // TODO: throw error to display user
            }
            finally{
            setTimeout(()=> {
                commit({type:'setIsLoading', isLoading: false})
            }, 500)
            }
        },
        async removeGig(context, { gigId }) {
            try {
                await gigService.remove(gigId)
                context.commit(getActionRemoveGig(gigId))
            } catch (err) {
                console.log('gigStore: Error in removeGig', err)
                throw err
            }
        },
        async addGigMsg(context, { gigId, txt }) {
            try {
                const msg = await gigService.addGigMsg(gigId, txt)
                context.commit({ type: 'addGigMsg', gigId, msg })
            } catch (err) {
                console.log('gigStore: Error in addGigMsg', err)
                throw err
            }
        },

    }
}