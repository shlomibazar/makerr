<template>
  <li class="gig-preview">
    <custom-card>
<<<<<<< HEAD
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

      <template #footer>
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
import customCard from "../cmps/custom-card.vue";

=======
      <template #card-header>
        <img class="card-img" :src="gig.image" alt="" />
      </template>
      <template #main>
        <section class="card-main-header">
          <img class="card-seller-img" :src="gig.imgUrl">
          <span class="card-seller-online"></span>

          <section class="card-seller-name-rating flex column">
            <span class="card-seller-name">{{gig.fullname}}</span>
            <span class="card-seller-level">{{gig.daysToMake}}</span>
          </section>
          <section class="card-seller-clients">Clients</section>
        <!-- <p><span class="fw-bold">Name:</span> {{ gig.fullname }}</p> -->
        <!-- <p><span class="fw-bold">In stock:</span> {{ gig.inStock }}</p> -->
        <!-- <p><span class="fw-bold">Price:</span> ${{ gig.price }}</p> -->
        </section>
        <div class="card-main-header-gap"></div>
        <section class="card-main-center">
          <h4>{{ gig.title }}</h4>
        </section>
        <!-- mini user - user.img + user.name
            gig.title -->
        <section class="card-main-footer ">
        <!-- <p><span class="fw-bold">Name:</span> {{ gig.title }}</p> -->
        
        </section>
        <!-- <p><span class="fw-bold">In stock:</span> {{ gig.inStock }}</p> -->
        <!-- <p><span class="fw-bold">Price:</span> ${{ gig.price }}</p> -->
      </template>
      <template #footer class="card-footer flex">
        <img class="card-fav-hart" src="../assets/imgbin_color-paper-grey-white-png.png"/>
        <!-- add to favorite (heart sign) / price  -->
        <div class="btn-group">
          <span class="starting-at">STARTING AT</span>
          <span class="card-gig-price">{{gig.price}}</span>
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
import customCard from "../cmps/custom-card.vue";

>>>>>>> 3a91152b3a76fef6e9afe987df8d834f1238a8a1
export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  components: {
    customCard,
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
<<<<<<< HEAD
=======
    decimelToLowerSize(price) {
      console.log(arguments)
      return `<span class="dollar_sign">$</span><span class="dollars"><?= $part[0] ?></span>.<span class="cents"><?= $part[1] ?></span>`   
    }
>>>>>>> 3a91152b3a76fef6e9afe987df8d834f1238a8a1
  },
};
</script>
