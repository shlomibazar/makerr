<template>
    <ul class="gig-list clean-list grid gap-1">
      <gig-preview @removeGig="removeGig" v-for="gig in gigs" :gig="gig" :key="gig._id" />
    </ul>
  </template>
  
  <script>
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
  