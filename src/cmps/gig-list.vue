<template>
  <!-- <section class="sub-header-labels" ></section> -->
  <ul class="card-grid gig-list">
    <gig-preview  v-for="gig in gigs" :gig="gig" :key="gig._id" class="card" />
  </ul>
</template>

<script>
import gigPreview from "./gig-preview.vue";

export default {
  props: {
    gigs: {
      type: Array,
      required: true,
    },
  },
  created() { 
    this.gigInsertReviewImg()
  },
  data() {
    return {
      imgs: ["https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c379aa91-8e48-453f-adbf-cf2ab5a2ba8d_f85qjo.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/1d8fa5f7-b34a-4f19-a55e-941a853fe2b2_qqpqnv.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/stepanadrian_ag4px7.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/JPEG_20210716_045808_7161494499008619166_zh6tkc.webp",
      "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c6667c18-c48c-415f-8d6e-28fda9b62486_depjj6.webp"]
    
    };
  },
  methods: {
    removeGig(gigId) {
      this.$emit("removeGig", gigId);
    },
    gigInsertReviewImg() {
      console.log("hi")
      // this.gigs.map((gig) => gig.reviewers.forEach((element, index) => element.img = this.imgs[index])) 
      console.log(this.gigs)
        
      // });(review,index=>review.img="https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c379aa91-8e48-453f-adbf-cf2ab5a2ba8d_f85qjo.webp"))
      // gig.reviewers.img.push(this.imgs(index))
      
    }
  },
  components: {
    gigPreview,
  },
};
</script>
