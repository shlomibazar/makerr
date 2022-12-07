<template>
  <div class="container home main-container">
    <section class="lable-container-list full fullWidthContainer flex">
      <section class="sub-header-labels-gig-list main-container gig-list">
        <h4 v-for="label in labels" :key="label" @click="setLabelToQuery(label)">
          {{ label }}
        </h4>
      </section>
    </section>
    <h1 class="catagory-header">{{ displayLabel }}</h1>
    <h2 class="catagory-subheader">
      Find the perfect freelance services for your business
    </h2>
    <section class="filter" ref="filterEl">
      <!-- <section v-if="isInHome" class="header-wrapper main-container fullWidthContainer sticky"
    :class="{ change_color: scrollPosition > 1 }"> -->

      <gig-filter
        @filteredTxt="debounceHandler"
        @filteredBudget="setFilterByBudget"
        @sorted="setSortBy"
        @filteredDel="setFilterByDel"
      />
    </section>
<!-- <div class="flex " style="gap:32px" v-if="!gigsSkelton"> -->
  <gig-list @removeGig="removeGig" v-if="!isLoading" :gigs="gigs" />


<skeleton v-else/>

    <!-- <hr />
    <form @submit.prevent="addGig()">
      <h2>Add gig</h2>
      <input type="text" v-model="gigToAdd.name" />
      <button>Save</button>
    </form> -->
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { gigService } from "../services/gig.service.js";
import {
  getActionRemoveGig,
  getActionUpdateGig,
  getActionAddGigMsg,
} from "../store/gig.store";
import gigList from "../cmps/gig-list.vue";
import gigFilter from "../cmps/gig-filter.vue";
import _ from "lodash";
import skeleton from "./skeleton.vue";
// import VueSkeletonLoader from 'skeleton-loader-vue';


export default {
  data() {
    return {
      gigsSkelton:false,
      labels: [
        "graphics & design",
        "digital marketing",
        "writing & translation",
        "video & animation",
        "music & audio",
        "programming & tech",
        "business",
        "lifestyle",
        "trending",
      ],
      displayLabel: "All",
      gigToAdd: gigService.getEmptyGig(),
      filterBy: {
        txt: "",
        scrollPosition: 0,
        status: "",
        label: null,
        price: 0,
        delTime: 0,
        budget: 0,
      },
      sortBy: {},
    };
  },

  created() {

  //  var origin=this.$route
  //  console.log('example',this.$route)

  //  this.$router.push({ path: "/gig" });

  //  console.log('this.$route.fullpath=',this.$route.fullpath)
  //  this.setFilterByTxt(this.$route.query.title)
  //  console.log('example',example)
    if (!this.$route.query.title || !this.$route.query.label) {
      this.$store.dispatch({ type: "loadGigs" });

    }
    if (this.$route.query.title) {
      this.$store.dispatch({ type: "loadGigs", filterBy: {txt: this.$route.query.title, status:'',labels:null, price:0} });
    }
    // this.debounceHandler = _.debounce(this.setFilterByTxt, 500);
    // this.debounceHandler = _.debounce(this.setFilterByLabel, 500);
    // console.log('this.$route.params', this.$route.query)
    this.previousParams = "/gig"
    
    // if (this.$route.query.title) {
    //   this.setFilterByTxt(this.$route.query.title);
      
    // }
    if (this.$route.query.label) {
      this.displayLabel = this.$route.query.label;
      this.setFilterByLabel(this.$route.query.label);
    }

    this.$watch(
      () => this.$route.query,

      (toParams, previousParams) => {
        console.log('toParams',toParams)
        console.log('previousParams',previousParams)
        if (this.$route.query) {
          console.log("this.$route.query", this.$route.query);
          if (previousParams.label !== toParams.label) {
            console.log("toParams label", toParams.label);
            this.setFilterByLabel(toParams.label);
          }
          if (previousParams.title !== toParams.title) {
            console.log("toParams tttt", toParams.title);
            this.setFilterByTxt(toParams.title);
          }
        }
      }
    );
    window.addEventListener("scroll", this.updateScroll);
    // this.$router.push(origin);
    // this.isInHomePage()
  },
  mounted() {
    this.elFilter = this.$refs.filterEl;
  },
// watch:{
//   '$route.query':{
//     handler(val){
//       const q = this.$route.query
//       console.log('val',val)
//       console.log('q',q)
//             this.setFilterByTxt(q);
//           },immediate:true,
//   }
// },
  methods: {
    setLabelToQuery(labelTitle) {
      // console.log('example', this.searchInfo)
      const pathToRoute = this.$route.path.split("/");
      // console.log('pathToRoute', pathToRoute);
      this.displayLabel = labelTitle;
      this.$router.push({ path: "/gig", query: { label: labelTitle } });
    },
    updateScroll() {
      // console.log('y',window.scrollY)
      // console.log('helllo',this.scrollPosition)
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 190) {
        // console.log("runing");
        this.elFilter.classList.add("change-position");
        this.elFilter.classList.add("fullWidthContainer");
      }
      if (this.scrollPosition < 100) {
        // console.log("runing");
        this.elFilter.classList.remove("change-position");
        this.elFilter.classList.remove("fullWidthContainer");
      }
      // console.log("this in update scroll", this.scrollPosition);
    },

    getLabels() {
      return this.label;
    },
    loadGigs() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      console.log("🚀 ~ file: gig-app.vue ~ line 68 ~ loadGigs ~ filterBy", filterBy)
      const sortBy = JSON.parse(JSON.stringify(this.sortBy));
      this.$store.dispatch({ type: "loadGigs", filterBy, sortBy });
    },
    async addGig() {
      try {
        await this.$store.dispatch({ type: "addGig", gig: this.gigToAdd });
        showSuccessMsg("Gig added");
        this.gigToAdd = gigService.getEmptyGig();
      } catch (err) {
        // console.log(err)
        showErrorMsg("Cannot add gig");
      }
    },
    async removeGig(gigId) {
      try {
        await this.$store.dispatch(getActionRemoveGig(gigId));
        showSuccessMsg("Gig removed");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot remove gig");
      }
    },
    async updateGig(gig) {
      try {
        gig = { ...gig };
        gig.price = +prompt("New price?", gig.price);
        await this.$store.dispatch(getActionUpdateGig(gig));
        showSuccessMsg("Gig updated");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot update gig");
      }
    },
    async addGigMsg(gigId) {
      try {
        await this.$store.dispatch(getActionAddGigMsg(gigId));
        showSuccessMsg("Gig msg added");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot add gig msg");
      }
    },
    printGigToConsole(gig) {
      console.log("Gig msgs:", gig.msgs);
    },
    setFilterByTxt(txt) {
      console.log("hey i in set filter by text",txt);
      this.filterBy.txt = txt;
      this.loadGigs();
    },
    setFilterByDel(delTime) {
      this.filterBy.delTime = delTime;
      console.log("hey i in set filter by del");
      console.log("delTime", delTime);
      this.loadGigs();
    },
    setFilterByStatus(status) {
      this.filterBy.status = status;
      this.loadGigs();
    },
    setFilterByLabel(labels) {
      this.filterBy.label = labels;
      console.log("this.filterBy.labels", this.filterBy.labels);
      this.loadGigs();
    },
    setFilterByBudget(budget) {
      this.filterBy.budget = budget;
      console.log("this.filterBy.budget", this.filterBy.budget);
      this.loadGigs();
    },
    setSortBy(sortBy) {
      this.sortBy = sortBy;
      this.loadGigs();
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    gigs() {
        return this.$store.getters.gigs;
    },
    labels() {
      return this.labels;
    },
    updateParams() {
      this.toParams = this.$route.query;
      return this.toParams;
    },
    isLoading(){
      return this.$store.getters.isLoading
    }
    // updatePositionFixed() {
    //   console.log('hi scroll',this.scrollPosition)
    //   // console.log('y',window.scrollY)
    //   // console.log('helllo',this.scrollPosition)
    //   // { 'change-position': scrollPosition > 20 }
    //   return  'change-position'
    //   // console.log('this',this.scrollPosition)
    // },
  },

  components: {
    gigList,
    gigFilter,
    skeleton,
    //  VueSkeletonLoader ,
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>
