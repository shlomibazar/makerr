<template>
    <li class="gig-preview">
      <custom-card >
        <template #header>
            <!-- <img class="toy-preview__img" src="@/assets/demo-toy.jpg" alt="" /> -->

         
        </template>
        <template #main>
           <p><span class="fw-bold">Name:</span> {{ gig.fullname }}</p>
          <!-- <p><span class="fw-bold">In stock:</span> {{ gig.inStock }}</p> -->
          <p><span class="fw-bold">Price:</span> ${{ gig.price }}</p>
            <!-- mini user - user.img + user.name
            gig.title -->
          <p><span class="fw-bold">Name:</span> {{ gig.title }}</p>
          <!-- <p><span class="fw-bold">In stock:</span> {{ gig.inStock }}</p> -->
          <p><span class="fw-bold">Price:</span> ${{ gig.price }}</p>
        </template>

        <template #footer >
            <!-- add to favorite (heart sign) / price  -->
          <div class="btn-group">
            <button @click="goToEdit" class="btn btn-primary">edit</button>
            <button @click="goToDetail" class="btn btn-info">details</button>
            <button @click="removeGig(gig._id)" class="btn btn-danger">delete</button>
          </div>
        </template>
      </custom-card>
    </li>
  </template>
  
  <script>
  import customCard from '../cmps/custom-card.vue'
  
  export default {
    name: 'gig-preview',
    props: {
      gig: Object,
    },
    components: {
      customCard,
    },
    methods: {
      goToDetail() {
        this.$router.push(`/gig/${this.gig._id}`)
      },
      goToEdit() {
        this.$router.push(`/gig/edit/${this.gig._id}`)
      },
      removeGig(gigId) {
        this.$emit('removeGig', gigId)
      },
    },
  }
  </script>
  