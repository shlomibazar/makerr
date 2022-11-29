<template class="">
    <ul class="card-grid gig-list grid">
      <gig-preview @removeGig="removeGig" v-for="gig in gigs" :gig="gig" :key="gig._id" class="card"/>
    </ul>
  </template>
  
  <script lang="ts">
  import gigPreview from './gig-preview.vue'
  
  export default {
    props: {
      gigs: {
        type: Array,
        required: true,
      },
    },
    components: {
      gigPreview,
    },
    methods: {
      removeGig(gigId) {
        this.$emit('removeGig', gigId)
      },
    },
  }
  </script>
  