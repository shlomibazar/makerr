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
  data() {
    return {
    
    };
  },
  methods: {
    removeGig(gigId) {
      this.$emit("removeGig", gigId);
    },
  },
  components: {
    gigPreview,
  },
};
</script>
