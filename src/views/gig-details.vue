<!-- <img class="details-user-avatar" src="../assets/example-user.png"> -->
<!-- <div class="gig-full-preview-img">
            <img src="../assets/example-gig.png">
        </div> -->

<template>
  <hr />
  <section v-if="gig" class="gig-details-page">
    <div class="details-content">
      <h1>{{ gig.title }}</h1>
      <div class="user-details-container flex">
        <img class="details-user-avatar" :src="userAvatar" />
        <h2>{{ userDetails }}</h2>
        <h3>{{ userLevel }}</h3>
      </div>
      <br />
      <img class="details-user-gig" :src="gigPreview" />
      <h3>About This Gig</h3>
      <p>{{ gig.description }}</p>
      <hr />
      <h3>About The Seller</h3>
      <img class="details-user-avatar-about" :src="userAvatar" />
      <h4>{{ gig.fullname }}</h4>
      <div class="seller-container">
        <div class="seller-content">
          <h3>From {{ gig.loc }}</h3>
          <h3>Member Since {{ gig.memberSince }}</h3>
          <h3>Avg. response time {{ gig.avgResponceTime }}</h3>
          <h3>Last delivery {{ gig.lastDelivery }}</h3>
        </div>
        <hr />
        <p>{{ gig.about }}</p>
      </div>
    </div>

    <div class="details-sidebar">
      <h3>🔹Startup Now🔹</h3>
      <h3>{{ gig.price }}</h3>
      <h3>{{ gig.title }}</h3>
      <h3>{{ gig.daysToMake }}</h3>
      <button class="button-purchase" @click="purchaseGig()">Conitnue ⮕</button>
    </div>
  </section>
</template>
<script>
// import chatVue from "./chat.vue"
import { gigService } from "../services/gig.service.local.js";
import { getActionRemoveGig, getActionUpdateGig } from "../store/gig.store";
import { router } from "../router.js";

export default {
  data() {
    return {
      gig: null,
    };
  },
  created() {
    this.loadGig();
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
    purchaseGig() {
      router.push("/purchase");
    },
    loadGig() {
      const id = this.$route.params.gigId;
      //   console.log("iddddddd", id);
      gigService.getById(id).then((gig) => {
        this.gig = gig;
        console.log("loadGig");
      });
    },
  },
  watch: {
    "$route.params.gigId"(id) {
      console.log("Changed to", id);
    },
  },
  computed: {
    userDetails() {
      return `${this.gig.fullname}`;
    },
    userLevel() {
      return `Level: ${this.gig.level} Seller |⭐⭐⭐⭐⭐ 5 (169) 12 Orders in Queue`;
    },
    userAvatar() {
      return `${this.gig.imgUrl}`;
    },
    gigPreview() {
      return `${this.gig.image}`;
    },
  },
  components: {
    // chatVue,
  },
};
</script>
