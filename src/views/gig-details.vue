
<template>
    <section v-if="gig" class="gig-details app-main">
        <!-- <section  class="gig-details app-main"> -->
        <h2>{{ gig.name }}</h2>
        <p>Speed: {{ gig.price }}</p>
        <hr />
        <h6>Details</h6>
        <!-- <p>Lorem ipsum dolor sit amet ?</p> -->
        <router-link to="/gig-app" :gig="gig">Back</router-link>
        <!-- <p v-if="gig.msgs">
            <li v-for="msg in gig.msgs">
                {{ msg.from }}:{{ msg.txt }}
            </li>


            {{ gig.msgs }}
        </p> -->
        <!-- <chatVue @updateMsgs="updateMsgs" /> -->
    </section>
</template>
<script >
// import chatVue from "./chat.vue"
import { gigService } from "../services/gig.service.local.js"
import { getActionRemoveGig, getActionUpdateGig } from '../store/gig.store'

export default {
    data() {
        return {
            gig: null,
        }
    },
    created() {
        this.loadGig()
        // this.updateMsgs()
        
    },
    methods: {
        // updateMsgs(msgs) {
        //     var gigmon = this.gig 
        //     // console.log("🚀 ~ file: gig-details.vue ~ line 41 ~ updateMsgs ~ gig", gig)
        //     gigmon.msgs.push(msgs)
        //     // console.log('this.gig', this.gig)

        //     this.$store.dispatch(getActionUpdateGig(gigmon))
        // },
        loadGig() {
            const id = this.$route.params.gigId
            // console.log('arguments',arguments)
            console.log('iddddddd',id)
            gigService.getById(id)
                .then(gig => {
                    this.gig = gig
                    console.log("loadGig")
                })
        }
    },
    watch: {
        '$route.params.gigId'(id) {
            console.log('Changed to', id)
        }
    },
    components: {
        // chatVue,
    }
}

</script>