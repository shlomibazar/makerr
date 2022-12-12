<template>
  <li class="gig-preview">
    <custom-card>
      <template #card-header>


        <vueper-slides box-shadow: none :touchable="false" fixed-height="194px" class="preview-slider">
          <vueper-slide v-for="(slide, i) in gig.images" :key="i" :image="slide" :content="slide.content"
            @click="goToDetail" />
        </vueper-slides>

      </template>
      <template #main>
        <section class="card-main-header">
          <img class="card-seller-img" :src="gig.owner.imgUrl">
          <span class="card-seller-online" v-if="gig.owner.isOnline"></span>

          <section class="card-seller-name-rating flex column">
            <span class="card-seller-name">{{ gig.owner.fullname }}</span>
            <span class="card-seller-level">{{ userLevel(gig) }}</span>
          </section>
          <section class="card-seller-clients">Clients</section>
          <section class="client-logo-wraper">
            <img class="clients-logo" v-for="client in gig.owner.clients" :src="client">
          </section>
          <!-- <p><span class="fw-bold">Name:</span> {{ gig.fullname }}</p> -->

          <!-- <p><span class="fw-bold">In stock:</span> {{ gig.inStock }}</p> -->
          <!-- <p><span class="fw-bold">Price:</span> ${{ gig.price }}</p> -->
        </section>
        <div class="card-main-header-gap"></div>
        <section class="card-main-center">
          <h4 @click="goToDetail">{{ gig.title }}</h4>
        </section>
        <!-- mini user - user.img + user.name
            gig.title -->
        <section class="card-main-footer flex row"><span class="card-mid-footer-star"
            ><span class="gig-rating text-body-2">
            <svg class="card-mid-footer-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
            <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
            </path>
            </svg>
            </span>
            </span>
            
          <span class="user-rating">{{ userRating(gig) }}</span><span class="ratingProject">{{ getRandomIntInclusive(5,
              120)
          }} </span>

        </section>
        <!-- <p><span class="fw-bold">In stock:</span> {{ gig.inStock }}</p> -->
        <!-- <p><span class="fw-bold">Price:</span> ${{ gig.price }}</p> -->
      </template>
      <template #footer class="card-footer flex">
        <img class="card-fav-hart" src="../assets/imgbin_color-paper-grey-white-png.png" />
        <!-- add to favorite (heart sign) / price  -->
        <div class="btn-group">
          <span class="starting-at">STARTING AT</span>
          <span class="card-gig-price">US${{ gig.price }}</span>
          <!-- {{this.decimelToLowerSize(gig.price)}} -->
          <!-- <button @click="goToEdit" class="btn btn-primary">edit</button> -->
          <!-- <button @click="goToDetail" class="btn btn-info">details</button> -->
          <!-- <button @click="removeGig(gig._id)" class="btn btn-danger">delete</button> -->
        </div>
      </template>
    </custom-card>
  </li>
</template>
<script>
import customCard from "./custom-card.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import { } from '../services/util.service.js'
import "vueperslides/dist/vueperslides.css";

export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  components: {
    customCard,
    VueperSlides,
    VueperSlide,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/gig/${this.gig._id}`);
    },
    goToEdit() {
      this.$router.push(`/gig/edit/${this.gig._id}`);
    },
    removeGig(gigId) {
      this.$emit("removeGig", gigId);
    },
    decimelToLowerSize(price) {
      console.log(arguments)
      return `<span class="dollar_sign">$</span><span class="dollars"><?= $part[0] ?></span>.<span class="cents"><?= $part[1] ?></span>`
    },
    userLevel(gig) {
      var userLevel = gig.owner.level || 1
      return `Level ${userLevel} Seller`
    },
    userRating(gig) {
      //need to make a calculated value with avg rate to gigs
      var gigLevel = `${gig.owner.rate}` || `5.0`;
      // console.log(gig,gigLevel)
      return gigLevel
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return `(${Math.floor(Math.random() * (max - min + 1)) + min})` //The maximum is inclusive and the minimum is inclusive 
    }


  },
  computed: {

  },
};
</script>
