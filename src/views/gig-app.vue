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
      Find the perfect {{subtitle}} services for your business
    </h2>
    <section class="filter" ref="filterEl">
      <gig-filter @filteredTxt="debounceHandler" @filteredBudget="setFilterByBudget" @sorted="setSortBy"
        @filteredDel="setFilterByDel" />
       
    </section>
     <h1 v-if="gigs.length" class="gigs-quantity">{{ gigs.length *8 }} services available</h1>
    <gig-list @removeGig="removeGig" v-if="!isLoading" :gigs="gigs" />
    <skeleton v-else />
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

export default {
  data() {
    return {
      gigsSkelton: false,
      subtitle:"freelance",
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
    if (!this.$route.query.title && !this.$route.query.label) {
      this.$store.dispatch({ type: "loadGigs" })
    }
    if (this.$route.query.title) {
      this.$store.dispatch({ type: "loadGigs", filterBy: { txt: this.$route.query.title, status: '', labels: null, price: 0 } });
    }
    this.previousParams = "/gig"

    if (this.$route.query.label) {
      this.displayLabel = this.$route.query.label;
      this.subtitle= this.$route.query.label;
      this.setFilterByLabel(this.$route.query.label);
    }
    this.$watch(
      () => this.$route.query,
      (toParams, previousParams) => {
        if (!this.$route.query.label && !this.$route.query.title) {
          this.displayLabel = "All"
          this.subtitle ="freelance"
        }
        if (this.$route.query) {
          if (previousParams.label !== toParams.label) {
            this.setFilterByLabel(toParams.label);
          }
          if (previousParams.title !== toParams.title) {
            this.setFilterByTxt(toParams.title);
          }
        }
      }
    );
    window.addEventListener("scroll", this.updateScroll);
  },
  mounted() {
    this.elFilter = this.$refs.filterEl;
  },
  methods: {
    setLabelToQuery(labelTitle) {
      const pathToRoute = this.$route.path.split("/");
      this.displayLabel = labelTitle;
      this.subtitle = labelTitle;
      this.$router.push({ path: "/gig", query: { label: labelTitle } });
    },
    updateScroll() {

      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 250) {
        this.elFilter.classList.add("change-position");
        this.elFilter.classList.add("fullWidthContainer");
      }
      if (this.scrollPosition < 210) {
        this.elFilter.classList.remove("change-position");
        this.elFilter.classList.remove("fullWidthContainer");
      }
    },
    getLabels() {
      return this.label;
    },
    loadGigs() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      const sortBy = JSON.parse(JSON.stringify(this.sortBy));
      this.$store.dispatch({ type: "loadGigs", filterBy, sortBy });
    },
    async addGig() {
      try {
        await this.$store.dispatch({ type: "addGig", gig: this.gigToAdd });
        showSuccessMsg("Gig added");
        this.gigToAdd = gigService.getEmptyGig();
      } catch (err) {
        showErrorMsg("Cannot add gig");
      }
    },
    async removeGig(gigId) {
      try {
        await this.$store.dispatch(getActionRemoveGig(gigId));
        showSuccessMsg("Gig removed");
      } catch (err) {
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
        showErrorMsg("Cannot update gig");
      }
    },
    async addGigMsg(gigId) {
      try {
        await this.$store.dispatch(getActionAddGigMsg(gigId));
        showSuccessMsg("Gig msg added");
      } catch (err) {
        showErrorMsg("Cannot add gig msg");
      }
    },
    setFilterByTxt(txt) {
      this.filterBy.txt = txt;
      this.loadGigs();
    },
    setFilterByDel(delTime) {
      this.filterBy.delTime = delTime;
      this.loadGigs();
    },
    setFilterByStatus(status) {
      this.filterBy.status = status;
      this.loadGigs();
    },
    setFilterByLabel(labels) {
      this.filterBy.label = labels;
      this.loadGigs();
    },
    setFilterByBudget(budget) {
      this.filterBy.budget = budget;
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
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  components: {
    gigList,
    gigFilter,
    skeleton,
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>
