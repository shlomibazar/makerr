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
      <hr />
      <img class="details-user-gig" :src="gigPreview" />
      <h3>About This Gig</h3>
      <p>{{ gig.description }}</p>
      <hr />

      <h3>About The Seller</h3>
      <div class="details-about-seller">
        <img class="details-user-avatar-about" :src="userAvatar" />
        <div class="details-about-seller"></div>
        <h4>{{ gig.fullname }}</h4>
        <button>Contact me</button>
      </div>

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

    <div class="checkout-container">
      <div class="checkout-price">
        <span>{{ gig.price }}</span>
      </div>
      <div class="checkout-title">
        <span>Order Details</span>
      </div>
      <div class="checkout-subtitle">
        <span>{{ gig.title }}</span>
      </div>
      <div class="checkout-delivery flex">
        <img src="../assets/clock.png" />
        <div>3 Days Delivery</div>
      </div>
      <div class="checkout-header-list">What's Included</div>
      <div class="checkout-included">
        <ul class="order-features clean-list">
          <li>
            <i class="checkMark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmins="http://www.w3.org/2000/svg"
                fill="#1ea968"
              >
                <path
                  d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                ></path></svg
            ></i>
            3 concepts included
          </li>
        </ul>

        <ul class="order-features clean-list">
          <li>
            <i class="checkMark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmins="http://www.w3.org/2000/svg"
                fill="#1ea968"
              >
                <path
                  d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                ></path></svg
            ></i>
            Include 3D mockup
          </li>
        </ul>

        <ul class="order-features clean-list">
          <li>
            <i class="checkMark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmins="http://www.w3.org/2000/svg"
                fill="#1ea968"
              >
                <path
                  d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                ></path></svg
            ></i>
            Vector file
          </li>
        </ul>
      </div>
      <footer>
        <button class="side-btn">Continue ({{ gig.price }})</button>
      </footer>
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
      return `${this.gig.imgUrl}`;
    },
  },
  components: {
    // chatVue,
  },
};
</script>
