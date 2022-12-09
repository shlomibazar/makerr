<template>

  <div class="addgig-main-container fullWidthContainer">
    <section v-if="gigToEdit" class=" main-container edit-container">
      <div class="inner-edit-container flex">
        <section class="addgig-forms-container ">
          <section class="flex align-center ">
            <span class="gig-image-title">Gig Name:</span>
            <form @submit.prevent="saveGig" class="form">

              <div class="form-control">

                <input required v-model="gigToEdit.title" id="txt" type="text" class="form-input"
                  placeholder="Insert gig name here..." />

              </div>
            </form>
          </section>
          <section class="flex align-center ">
            <span class="gig-image-title">Gig Price:</span>

            <div class="addgig-price-ctn">
              <form @submit.prevent="saveGig" class="form">
                <div class="form-control">
                  <input required v-model.number="gigToEdit.price" id="inStock" type="number" class="form-input"
                    placeholder="$" />
                </div>
              </form>
            </div>
          </section>
          <section class="flex ">
          <span class="gig-image-title">Gig Image:</span>
          <section class="img-uploading-container flex">
          <!-- <img class="gig-add-img-picture" @click="toggleUploader = !toggleUploader" -->
          <!-- src="https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png" > -->
          <img-uploader class="input-img-container"  @uploaded="onUploaded"></img-uploader>
          </section>
        </section>
          <div class="addgig-buttons ">

            <button @click="saveGig" class="btn btn-info">Create a new gig</button>
            <!-- <button @click="goBack" class="btn btn-danger-text">go back</button> -->
          </div>
        </section>
        <section class="gig-list">
          <gig-preview :gig="gigToEdit" :key="gigToEdit._id" class="card" />
        </section>
      </div>
    </section>

  </div>
  <checkout />
</template>

<script>
import gigPreview from "../cmps/gig-preview.vue";
import checkout from "../cmps/checkout.vue";
import { gigService } from "../services/gig.service.js";
import { userService } from "../services/user.service";
import imgUploader from "../cmps/img-uploader.vue";

export default {
  name: "gig-edit",
  data() {
    return {
      toggleUploader: true,
      gigToEdit: null,
    };
  },
  created() {
    const { _id } = this.$route.params;
    if (_id) {
      gigService.getById(_id).then((gig) => {
        this.gigToEdit = gig;
        this.selectedLabels = gig.labels.map((label) => label.title);
      });
    } else this.gigToEdit = gigService.getEmptyGig()
    this.gigToEdit.images = [];
  },
  components: {
    imgUploader,
    checkout,
    gigPreview,
  },

  methods: {
    onUploaded(imgUrl) {
      this.gigToEdit.images.unshift(imgUrl)
      console.log('this.gigToEdit.images', this.gigToEdit.images)
      console.log('img', imgUrl)
      console.log('arguments', arguments)
    },
    goBack() {
      this.$router.push("/gig");
    },
    //   saveGig() {
    //     this.$store
    //       .dispatch({ type: 'saveGig', gig: this.gigToEdit })
    //       .then(() => {
    //         this.$router.push('/gig')
    //       })
    //   },
    saveGig() {
      var currUser = { ...this.$store.getters.loggedinUser };
      console.log("this.gigToEdit before", this.gigToEdit);
      this.gigToEdit.owner._id = currUser._id;

      console.log("currUser", currUser);
      if (!currUser.isSeller) {
        currUser.isSeller = true;
        userService.update(currUser);
      }
      console.log("this.gigToEdit after", this.gigToEdit);
      gigService.save(this.gigToEdit);
      this.$router.push("/gig");
    },
  },
};
</script>
