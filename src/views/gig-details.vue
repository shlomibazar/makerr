<template>
  <section class="lable-container-list full fullWidthContainer flex">
    <section class="sub-header-labels main-container gig-details">
      <h4 v-for="label in labels" :key="label" @click="setLabelToQuery(label)">
        {{ label }}
      </h4>
    </section>
  </section>
  <button class="hamburger-menu" @click="toggleModal()">≡</button>
  <div class="details-modal" v-if="isModalToggled">
    <button>Explore</button>
    <hr />
    <button>Become a Seller</button>
    <hr />
    <button>Join</button>
  </div>
  <!-- CHECKOUT MODAL -->
  <!-- <div class="checkout-modal" v-if="isCheckOutModal">
    <div class="order-options">
      <span class="options-title">Order Options</span>
      <button class="close-modal-btn">X</button>
    </div>
    <div class="checkout-details-ctn">
      <div class="checkout-gig-price">{{ gig.price }}</div>
      <span>Single Order</span>
      <hr />
      <span>TEXT</span>
      <span>TEXT</span>
      <span>TEXT</span>
    </div>
    <button class="checkout-btn" @click="finishOrder()">Continue</button>
    <h6>You won’t be charged yet</h6>
  </div> -->

  <section v-if="gig" class="gig-details-page">
    <div class="details-content">
      <h1>{{ gig.title }}</h1>
      <div class="user-details-container flex">
        <img class="details-user-avatar" :src="userAvatar" />
        <section class="user-rating">
          <h2>{{ userDetails }}</h2>
          <h3>Level: {{ gig.owner.level }} Seller</h3>
          <h1 class="br"></h1>
          <div class="stars">
            <span class="rating-stars">★★★★★</span>
            <span class="rating-avg">4.9</span>
            <a1 class="rating-amount">(456)</a1>
          </div>
        </section>
      </div>
      <h3 class="repeat-buyesr-title">
        People keep coming back! logoflow has an exceptional number of repeat buyers.
      </h3>
      <vueper-slides class="details-slider" ref="vueperslides1" :touchable="false" :autoplay="false" :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="427px">
        <vueper-slide v-for="(slide, i) in gig.images" :key="i" :image="slide">
        </vueper-slide>
      </vueper-slides>
      <div class="bot-details-slider">

        <vueper-slides class="no-shadow thumbnails" ref="vueperslides2"
          @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="4"
          fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="true">
          <vueper-slide v-for="(slide, i) in gig.images" :key="i" :image="slide"
            @click.native="$refs.vueperslides2.goToSlide(i)">
          </vueper-slide>
        </vueper-slides>
      </div>

      <h3 class="about-gig-title">About This Gig</h3>
      <p>{{ gig.description }}</p>

      <h3>About The Seller</h3>
      <div class="about-seller">
        <img class="details-user-avatar-about" :src="userAvatar" />
        <div class="owner-details">
          <div class="owner-fullname">{{ gig.owner.fullname }}</div>
          <div class="stars"><span>★★★★★ 4.9</span> (456)</div>
          <button class="el-button is-plain btn-contact" aria-disabled="false" type="button">
            <span class="">Contact Me</span>
          </button>
        </div>
      </div>
      <div class="extended-owner-details">
        <ul class="user-state flex clean-list">
          <li>
            From <br /><strong>{{ gig.owner.loc }}</strong>
          </li>
          <li>
            Avg. response time <br /><strong>{{ gig.owner.avgResponceTime }}</strong>
          </li>
          <li>
            Member since <br /><strong>{{ gig.owner.memberSince }}</strong>
          </li>
          <li>
            Last delivery <br /><strong>{{ gig.owner.lastDelivery }}</strong>
          </li>
        </ul>
        <hr />
        <pre>{{ gig.owner.about }}</pre>
      </div>

      <div class="seller-reviews">
        <h1>{{ gig.reviewers.length }} Reviews</h1>
        <h4 v-for="review in gig.reviewers" :key="review._id" :value="review.reviews">
          <hr />
          <div class="review-container">
            <section class="review-avatar-img">
              <img class="avatar-img" :src="userAvatar" />
              <!-- <img class="avatar-img" :src="userAvatar" /> -->
            </section>
            <section class="review-right-info">
              <div class="review-user-details">
                <h5>
                  <section class="reviewer-name">{{ review.name }}</section>
                  <!-- </div> -->
                  <div class="reviewer-country">
                    <img class="reviewer-flag" :src="gigReviewFlag" />
                    {{ review.country }}
                  </div>
                  <section class="stars-and-published">
                    <div class="stars">★★★★★<span class="rate-num">5</span></div>
                    <span class="rate-reviewedAt-border"></span>
                    <h3 class="review-user-review">{{ review.reviewedAt }}</h3>
                  </section>
                </h5>
              </div>
              <div class="review-user-comment">
                <h5>
                  {{ review.review }}
                  <!-- <br /><br /><br /> -->
                </h5>
              </div>
              <section class="review-helpful-selector">
                <span>Helpful? </span>
                <span class="review-like-btn" @click="likeReview" :class="{ 'review-like-active': isLikeReview }"> 👍
                  Yes </span>
                <span class="review-dislike-btn" @click="disLikeReview"
                  :class="{ 'review-dislike-active': isDisLikeReview }"> 👎 No </span>
              </section>
              <span class="gig-like-title" v-if="isLikeReview">You found this gig helpful!</span>
            </section>
          </div>
        </h4>
      </div>
    </div>
    <!-- v-click-outside="checkOutModal()" -->

    <div class="display-checkout-modal" v-if="this.isCheckOutModal" v-click-outside="checkOutModal">
      <checkout :gig="gig" :modalOpen="modalOpen" />
    </div>

    <div class="checkout-container">
      <div class="checkout-price">
        <span>${{ gig.price }}</span>
      </div>
      <div class="checkout-title">
        <span>Order Details</span>
      </div>
      <div class="checkout-subtitle">
        <span>{{ gig.title }}</span>
      </div>
      <div class="checkout-delivery flex">
        <img src="../assets/clock.png" />
        <div>{{ gig.daysToMake }} Days Delivery</div>
      </div>
      <div class="checkout-header-list">What's Included</div>
      <div class="checkout-included">
        <ul class="order-features clean-list">
          <li>
            <i class="checkMark">
              <svg width="16" height="16" viewBox="0 0 11 9" xmins="http://www.w3.org/2000/svg" fill="#1ea968">
                <path
                  d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                </path>
              </svg>
            </i>
            3 concepts included
          </li>
        </ul>

        <ul class="order-features clean-list">
          <li>
            <i class="checkMark"><svg width="16" height="16" viewBox="0 0 11 9" xmins="http://www.w3.org/2000/svg"
                fill="#1ea968">
                <path
                  d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                </path>
              </svg></i>
            Include 3D mockup
          </li>
        </ul>

        <ul class="order-features clean-list">
          <li>
            <i class="checkMark">
              <svg width="16" height="16" viewBox="0 0 11 9" xmins="http://www.w3.org/2000/svg" fill="#1ea968">
                <path
                  d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                </path>
              </svg></i>
            Vector file
          </li>
        </ul>
      </div>
      <footer>
        <button class="side-btn" @click="checkOutModal()">
          Continue (${{ gig.price }})
        </button>
      </footer>
    </div>
  </section>
</template>
<script>
import checkout from "../cmps/checkout.vue"
import { gigService } from "../services/gig.service.js";
import { getActionRemoveGig, getActionUpdateGig } from "../store/gig.store";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { router } from "../router.js";

export default {
  data() {
    return {
      gig: null,
      modalOpen: "",
      isLikeReview: false,
      isDisLikeReview: false,
      isModalToggled: false,
      isCheckOutModal: false,
      imgArray:[
      "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c379aa91-8e48-453f-adbf-cf2ab5a2ba8d_f85qjo.webp",
      "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c379aa91-8e48-453f-adbf-cf2ab5a2ba8d_f85qjo.webp",
      "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/stepanadrian_ag4px7.webp",
      "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/JPEG_20210716_045808_7161494499008619166_zh6tkc.webp",
      "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c6667c18-c48c-415f-8d6e-28fda9b62486_depjj6.webp",
    "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c6667c18-c48c-415f-8d6e-28fda9b62486_depjj6.webp"
    
    ],
    counter:-1,
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
    };
  },

  created() {
    this.loadGig();
    // this.updateMsgs()
  },
  methods: {

    disLikeReview() {
      this.isDisLikeReview = !this.isDisLikeReview
    },
    likeReview() {
      this.isLikeReview = !this.isLikeReview
    },
    checkOutModal() {
      this.isCheckOutModal = !this.isCheckOutModal
      if (this.isCheckOutModal) {
        setTimeout(() => {
          this.modalOpen = "modal-open"
        }, 10);
      }
      if (!this.isCheckOutModal) {
        setTimeout(() => {
          this.modalOpen = ""
        }, 10);
      }
    },
    // checkOutModal() {
    //   this.$router.push(`/order/${this.gig._id}`);
    // },
    toggleModal() {
      this.isModalToggled = !this.isModalToggled;
    },
    loadGig() {
      const id = this.$route.params.gigId;
      gigService.getById(id).then((gig) => {
        this.gig = gig;
        console.log("loadGig");
      });
    },
    setLabelToQuery(labelTitle) {
      const pathToRoute = this.$route.path.split("/");
      this.displayLabel = labelTitle;
      this.$router.push({ path: "/gig", query: { label: labelTitle } });
    },
  },
  watch: {
    "$route.params.gigId"(id) {
      console.log("Changed to", id);
    },
  },
  computed: {
    userDetails() {
      return `${this.gig.owner.fullname}`;
    },
    userLevel() {
      return `Level: ${this.gig.owner.level} Seller |⭐⭐⭐⭐⭐ 5 (169) 12 Orders in Queue`;
    },
    userAvatar() {
      return `${this.gig.owner.imgUrl}`;
    },
    gigPreview() {
      return `${this.gig.owner.imgUrl}`;
    },
    gigReviewFlag() {
      return "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png";
      // return `${this.gig.reviewers.flag}`;
    },
    gigReviewimg(){
      this.counter++
    return imgArray[counter]
    }
  },
  components: {
    VueperSlides,
    VueperSlide,
    checkout,
  },
};
</script>
