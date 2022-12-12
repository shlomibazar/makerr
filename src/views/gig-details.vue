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
            <span class="rating-avg">4.9 </span>
            <span class="rating-amount">(456)</span>
          </div>
        </section>
      </div>
      <vueper-slides class="details-slider" ref="vueperslides1" :touchable="false" :autoplay="false" :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="427px">
        <vueper-slide v-for="(slide, i) in gig.images" :key="i" :image="slide">
        </vueper-slide>
      </vueper-slides>
      <div class="bot-details-slider">
        <vueper-slides class="no-shadow thumbnails" ref="vueperslides2" @slide="
          $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })
        " :visible-slides="4" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="true">
          <vueper-slide v-for="(slide, i) in gig.images" :key="i" :image="slide"
            @click.native="$refs.vueperslides2.goToSlide(i)">
          </vueper-slide>
        </vueper-slides>
      </div>

      <h3 class="about-gig-title">About This Gig</h3>
      <pre class="pre-class">{{ gig.description }}</pre>

      <h3>About The Seller</h3>
      <div class="about-seller">
        <img class="details-user-avatar-about" :src="userAvatar" />
        <div class="owner-details">
          <div class="owner-fullname">{{ gig.owner.fullname }}</div>
          <div class="stars">
            <span>★★★★★ </span><span class="rate-number">4.9</span><span class="revew-counter"> (456)</span>
          </div>
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
        <h4 v-for="(review, idx) in gig.reviewers" :key="review._id" :value="review.reviews">
          <hr />
          <div class="review-container">
            <section class="review-avatar-img">
              <img class="avatar-img" :src="imgs[idx]" />
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
                <strong>Helpful? </strong>
                <span class="review-like-btn" @click="likeReview" :class="{ 'review-like-active': isLikeReview }">
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z">
                    </path>
                  </svg>
                  <span> Yes</span>
                </span>
                <span class="review-dislike-btn" @click="disLikeReview"
                  :class="{ 'review-dislike-active': isDisLikeReview }">
                  <span class="nFghBOe thumbs-icon" style="width: 14px; height: 14px" aria-hidden="true"><svg width="16"
                      height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z">
                      </path>
                    </svg>
                    <span> No</span>
                  </span>
                </span>
              </section>
              <span class="gig-like-title" v-if="isLikeReview">You found this review helpful.</span>
            </section>
          </div>
        </h4>
      </div>
    </div>
    <!-- v-click-outside="checkOutModal()" -->

    <div class="display-checkout-modal" v-if="this.isCheckOutModal" >
      <checkout :gig="gig" :modalOpen="modalOpen" :isCheckOutModal="isCheckOutModal" @closeModal="checkOutModal" />
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
      <div class="highly-responsive-ctn">
        <div class="rTDT0Tr highly-responsive">
          <div id="impressions-wrapper" class="flex" data-impression-collected="true">
            <span class="nFghBOe aejpJRT" aria-hidden="true" style="width: 32px; height: 32px"><svg width="32"
                height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16Z"
                  fill="#E4E5E7"></path>
                <path d="M18 2H10.5L7 17.5H15L13 30L24.5 11.5H16L18 2Z" fill="#FFD596" stroke="#404145"
                  stroke-width="1.5" stroke-linejoin="round"></path>
                <path d="M24 21V23" stroke="#C5C6C9" stroke-width="2" stroke-miterlimit="10"></path>
                <path d="M24 25V27" stroke="#C5C6C9" stroke-width="2" stroke-miterlimit="10"></path>
                <path d="M23 24H21" stroke="#C5C6C9" stroke-width="2" stroke-miterlimit="10"></path>
                <path d="M27 24H25" stroke="#C5C6C9" stroke-width="2" stroke-miterlimit="10"></path>
                <path d="M3.5 5V6.66667" stroke="#C5C6C9" stroke-width="1.66667" stroke-miterlimit="10"></path>
                <path d="M3.5 8.33325V9.99992" stroke="#C5C6C9" stroke-width="1.66667" stroke-miterlimit="10"></path>
                <path d="M2.66667 7.5H1" stroke="#C5C6C9" stroke-width="1.66667" stroke-miterlimit="10"></path>
                <path d="M6.00016 7.5H4.3335" stroke="#C5C6C9" stroke-width="1.66667" stroke-miterlimit="10"></path>
              </svg></span>
            <div>
              <div class="Uswnvgv"><b>Highly responsive!</b></div>
              <span class="GP8C4WD">Known for exceptionally quick replies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import checkout from "../cmps/checkout.vue";
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
      reviewImgCounter: 0,
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
      imgs: [
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c379aa91-8e48-453f-adbf-cf2ab5a2ba8d_f85qjo.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/1d8fa5f7-b34a-4f19-a55e-941a853fe2b2_qqpqnv.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/stepanadrian_ag4px7.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/JPEG_20210716_045808_7161494499008619166_zh6tkc.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c6667c18-c48c-415f-8d6e-28fda9b62486_depjj6.webp",
      ],
    };
  },

  created() {
    this.loadGig();
    // this.updateMsgs()
  },
  methods: {
    advanceCounder() {
      this.reviewImgCounter++;
      this.reviewImgCounter === 5 ? (this.reviewImgCounter = 0) : this.reviewImgCounter;
    },
    disLikeReview() {
      this.isDisLikeReview = !this.isDisLikeReview;
      this.isLikeReview ? (this.isLikeReview = false) : this.isLikeReview;
    },
    likeReview() {
      this.isLikeReview = !this.isLikeReview;
      this.isDisLikeReview ? (this.isDisLikeReview = false) : this.isDisLikeReview;
    },
    checkOutModal() {
      this.isCheckOutModal = !this.isCheckOutModal;
      if (this.isCheckOutModal) {
        setTimeout(() => {
          this.modalOpen = "modal-open";
        }, 10);
      }
      // if (!this.isCheckOutModal) {
      //   setTimeout(() => {
      //     this.modalOpen = "";
      //   }, 10);
      // }
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
    showImg() {
      this.reviewImgCounter += 1
      return this.imgs[this.reviewImgCounter]
    },
    userDetails() {
      return `${this.gig.owner.fullname}`;
    },
    userLevel() {
      return `Level: ${this.gig.owner.level} Seller |⭐⭐⭐⭐⭐ 5 (169) 12 Orders in Queue`;
    },
    userAvatar() {
      return `${this.gig.owner.imgUrl}`;
    },
    reviewersAvatar() {
      return `${this.imgs[this.reviewImgCounter]}`;
    },
    userAvatar() {
      // this.reviewImgCounter++;
      // this.reviewImgCounter === 5 ? (this.reviewImgCounter = 0) : this.reviewImgCounter;

      return `${this.gig.owner.imgUrl}`;
    },
    gigPreview() {
      return `${this.gig.owner.imgUrl}`;
    },
    gigReviewFlag() {
      var locarIndex = "";
      this.reviewImgCounter != 0
        ? (locarIndex = this.reviewImgCounter - 1)
        : (locarIndex = this.gig.reviewers.length - 1);
      return `${this.gig.reviewers[locarIndex].flag}`;
    },
  },
  components: {
    VueperSlides,
    VueperSlide,
    checkout,
  },
};
</script>
