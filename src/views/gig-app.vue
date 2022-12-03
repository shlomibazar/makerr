<template>
  <div class="container home main-container">
    <section class="lable-container-list full fullWidthContainer flex">
    <section class="sub-header-labels main-container gig-list">
      <h4 v-for="label in labels" :key="label" @click="setLabelToQuery(label)">{{ label }}</h4>
      
    </section>
  </section>
    <h1 class="catagory-header"> {{displayLabel}} </h1>
    <h2 class="catagory-subheader"> Find the perfect freelance services for your business</h2>
    <gig-filter @filteredTxt="debounceHandler" @filteredBudget="setFilterByBudget" @sorted="setSortBy"
      @filteredDel="setFilterByDel" />
    <gig-list @removeGig="removeGig" v-if="gigs" :gigs="gigs" />

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
      labels: [
        'graphics & design',
        'digital marketing',
        'writing & translation',
        'video & animation',
        'music & audio',
        'programming & tech',
        'business',
        'lifestyle',
        'trending'
      ],
      displayLabel:"All",
      gigToAdd: gigService.getEmptyGig(),
      filterBy: {
        txt: '',
        status: '',
        label: null,
        price: 0,
        delTime: 0,
        budget: 0,
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
    labels() {
      return this.labels
    },
    updateParams() {
      this.toParams = this.$route.query
      return this.toParams
    },

  },
  created() {
    if (!this.$route.query.title || !this.$route.query.label) {
      
      this.$store.dispatch({ type: 'loadGigs' })
    }
    this.debounceHandler = _.debounce(this.setFilterByTxt, 500)
    this.debounceHandler = _.debounce(this.setFilterByLabel, 500)
    console.log('this.$route.params', this.$route.query)
    this.previousParams = this.$route.query
    if (this.$route.query.title) {
      this.setFilterByTxt(this.$route.query.title)
    }
    if (this.$route.query.label) {
      this.displayLabel=this.$route.query.label
      this.setFilterByLabel(this.$route.query.label)
    }

    this.$watch(

      () => this.$route.query,

      (toParams, previousParams) => {
        if (this.$route.query) {

          console.log('this.$route.query', this.$route.query)
          if (previousParams.label !== toParams.label) {
            console.log('toParams label', toParams.label)
            this.setFilterByLabel(toParams.label)
          }
          if (previousParams.title !== toParams.title) {
            console.log('toParams tttt', toParams.title)
            this.setFilterByTxt(toParams.title)
          }
        }
      }
    )
  },
  methods: {
    setLabelToQuery(labelTitle) {
      console.log('example', this.searchInfo)
      const pathToRoute = this.$route.path.split('/')
      console.log('pathToRoute', pathToRoute);
      this.displayLabel=labelTitle
      this.$router.push({ path: '/gig', query: { label: labelTitle } })
      
    },

    getLabels() {
      return this.label
    },
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
      console.log('hey i in set filter by text')
      this.filterBy.txt = txt
      this.loadGigs()
    },
    setFilterByDel(delTime) {
      this.filterBy.delTime = delTime
      console.log('hey i in set filter by del')
      console.log('delTime', delTime)
      this.loadGigs()
    },
    setFilterByStatus(status) {
      this.filterBy.status = status
      this.loadGigs()
    },
    setFilterByLabel(labels) {
      this.filterBy.label = labels
      console.log('this.filterBy.labels', this.filterBy.labels)
      this.loadGigs()
    },
    setFilterByBudget(budget) {
      this.filterBy.budget = budget
      console.log('this.filterBy.budget', this.filterBy.budget)
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
