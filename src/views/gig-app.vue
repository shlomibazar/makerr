<template>
  <div class="container home main-container">
    
    <gig-list @removeGig="removeGig" v-if="gigs" :gigs="gigs" />
    <gig-filter 
     @filteredTxt="debounceHandler" 
     @filteredPrice="setFilterByPrice"
     @sorted="setSortBy"
     
     />
     <!-- @filteredLabel="setFilterByLabel" -->
     <!-- @filteredStatus="setFilterByStatus" -->
    <!-- {{filterBy.txt}} -->





    <hr />
    <form @submit.prevent="addGig()">
      <h2>Add gig</h2>
      <input type="text" v-model="gigToAdd.name" />
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service.local'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import gigList from './gig-list.vue'
import gigFilter from '../cmps/gig-filter.vue'
import _ from 'lodash'

export default {
  data() {
    return {
      gigToAdd: gigService.getEmptyGig(),
      filterBy: {
        txt: '',
        status: '',
        labels: null,
        price:0,
      },
      sortBy: {},
    }

  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    gigs() {
      return this.$store.getters.gigs
    },

  },
  created() {
    this.$store.dispatch({ type: 'loadGigs' })
    this.debounceHandler = _.debounce(this.setFilterByTxt, 500)
    this.debounceHandler = _.debounce(this.setFilterByLabel, 500)

  },
  methods: {
    loadGigs() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy))
      console.log("🚀 ~ file: gig-app.vue ~ line 68 ~ loadGigs ~ filterBy", filterBy)
      const sortBy = JSON.parse(JSON.stringify(this.sortBy))
      this.$store.dispatch({ type: 'loadGigs', filterBy, sortBy })
    },
    async addGig() {
      try {
        await this.$store.dispatch({ type: 'addGig', gig: this.gigToAdd })
        showSuccessMsg('Gig added')
        this.gigToAdd = gigService.getEmptyGig()
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot add gig')
      }
    },
    async removeGig(gigId) {
      try {
        await this.$store.dispatch(getActionRemoveGig(gigId))
        showSuccessMsg('Gig removed')

      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot remove gig')
      }
    },
    async updateGig(gig) {
      try {
        gig = { ...gig }
        gig.price = +prompt('New price?', gig.price)
        await this.$store.dispatch(getActionUpdateGig(gig))
        showSuccessMsg('Gig updated')

      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot update gig')
      }
    },
    async addGigMsg(gigId) {
      try {
        await this.$store.dispatch(getActionAddGigMsg(gigId))
        showSuccessMsg('Gig msg added')
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot add gig msg')
      }
    },
    printGigToConsole(gig) {
      console.log('Gig msgs:', gig.msgs)
    },
    setFilterByTxt(txt) {
      this.filterBy.txt = txt
      this.loadGigs()
    },
    setFilterByStatus(status) {
      this.filterBy.status = status
      this.loadGigs()
    },
    setFilterByLabel(labels) {
      this.filterBy.labels = labels
      console.log('this.filterBy.labels',this.filterBy.labels)
      this.loadGigs()
    },
    setFilterByPrice(price) {
      this.filterBy.price = price
      console.log('this.filterBy.price',this.filterBy.price)
      this.loadGigs()
    },
    setSortBy(sortBy) {
      this.sortBy = sortBy
      this.loadGigs()
    },
  },
  components: {
    gigList,
    gigFilter,
  },


}
</script>
