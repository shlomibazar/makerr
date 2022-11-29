<!-- <img class="details-user-avatar" src="../assets/example-user.png"> -->
<!-- <div class="gig-full-preview-img">
            <img src="../assets/example-gig.png">
        </div> -->

<template>
  <section v-if="gig" class="gig-details-page">
    <div class="details-content">
      <h1>I will code complete web app in nodejs, reactjs, vuejs</h1>
      <!-- <h2>{{ gig.name }}</h2> -->
      <img class="details-user-avatar" src="../assets/example-user.png" />
      <!-- <p>Gig by: {{ owner.fullname }} </p> -->
      <img src="../assets/example-gig.png" />
      <h3>About This Gig</h3>
      <p>
        Very important: Please discuss all requirements before placing an order! I am a
        Full-stack Developer with expert level proficiency in NodeJs technologies & over
        10 years of web development experience. This Gig is an all-in-one solution for all
        of your requirements. I have worked on various projects for startups & corporate
        departments and will deliver you a complete custom coded web app using latest
        trends and frameworks. NOTE: If you feel none of my packages cater your needs then
        please share your requirements for custom quote. Top Reasons to Hire Me: ✓ 10
        Years+ Exp. in Web/Software Development ✓ Fluent in English(7.5 IELTS Band) ✓ Fast
        Project Communication & Understanding ✓ 100% Guarantee of Refund If I Don't Meet
        Your Expectations Services I Offer: Custom Portals B2C, C2C, B2B Business
        Automation Plugin/Extension Development API Integrations(Payment, SMS, CRM etc)
        REST API Development JAVASCRIPT BACKEND FRAMEWORKS: ExpressJS, NestJs, Serverless
        JAVASCRIPT FRONEND FRAMEWORKS: Angular, ReactJS, VueJS
      </p>
      <h3>About The Seller</h3>
      <p>
        <h3>David</h3>
        <img class="details-user-avatar" src="../assets/example-user.png" />
        <div class="seller-details">
            <h2>From: Germany</h2>
            <h2>Member Since: Year ago</h2>
            <h2>Avg. response time: 2 hours</h2>
        </div>
      </p>
    </div>
    <div class="details-sidebar">
      <h3>text text</h3>
      <button class="button-purchase" @click="purchaseGig()">Conitnue ⮕</button>
    </div>
  </section>
</template>
<script>
// import chatVue from "./chat.vue"
import { gigService } from "../services/gig.service.local.js";
import { getActionRemoveGig, getActionUpdateGig } from "../store/gig.store";

export default {
  data() {
    return {
      gig: null,
      owner: userService.getLoggedinUser(),
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
    loadGig() {
      const id = this.$route.params.gigId;
      console.log("iddddddd", id);
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
  components: {
    // chatVue,
  },
};
</script>
