<template>
  <div class="addgig-main-container">
    <section v-if="gigToEdit">
      <div class="addgig-forms-container">
        <span class="gig-image-title">Gig Name</span>
        <form @submit.prevent="saveGig" class="form">
          <div class="form-control">
            <input
              required
              v-model="gigToEdit.title"
              id="txt"
              type="text"
              class="form-input"
              placeholder="Insert gig name here..."
            />
          </div>
        </form>

        <span class="gig-image-title">Gig Price</span>
        
        <div class="addgig-price-ctn">
          <form @submit.prevent="saveGig" class="form">
            <div class="form-control">
              <input
                required
                v-model.number="gigToEdit.price"
                id="inStock"
                type="number"
                class="form-input"
                placeholder="$"
              />
            </div>
          </form>
        </div>

        <span class="gig-image-title">Gig Image</span>
        <img
          class="gig-add-img-picture"
          @click="toggleUploader = !toggleUploader"
          src="https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png"
        />
        <img-uploader v-if="toggleUploader" @uploaded="onUploaded"></img-uploader>
        <div class="addgig-buttons">
          <button @click="saveGig" class="btn btn-info">Create a new gig</button>
          <!-- <button @click="goBack" class="btn btn-danger-text">go back</button> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gigService } from "../services/gig.service.js";
import { userService } from "../services/user.service";
import imgUploader from "../cmps/img-uploader.vue";

export default {
  name: "gig-edit",
  data() {
    return {
      toggleUploader: false,
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
    } else this.gigToEdit = gigService.getEmptyGig();
  },
  components: {
    imgUploader,
  },
  methods: {
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
