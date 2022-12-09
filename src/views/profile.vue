<template>
  <section class="fullWidthContainer container-section">
    <div class="main-container">
      <div class="profile-main-container">
        <div class="left-side-mini-profile">
          <div class="profile-user-avatar">
            <img :src="user.imgUrl" />
          </div>
          <div class="profile-user-details" v-if="user">
            <span class="profile-user-details-from"><strong>Name:</strong> {{ user.fullname }}</span>
            <span class="profile-user-details-since"><strong>Member Since:</strong> Last Week</span>
            <span class="profile-user-details-response"><strong>Avg Time Response:</strong> 5 days</span>
          </div>
        </div>
        <div class="right-side-gigs-profile">
          <div class="profile-gigs-nav">
            <h1 class="active-gigs-title flex">ACTIVE GIGS</h1>
             
            <div class="addgig-section-card flex">
              <span class="addgig-icon" @click="addGigPage()">+</span>
             
            </div>
          </div>
            <!-- <img @click="addGigPage()"src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"/> -->
          <section class="gig-render"></section>
          
          <gig-list @removeGig="removeGig" v-if="!isLoading" :gigs=filteredGigs />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import imgUploader from "../cmps/img-uploader.vue";
// import {userService} from '../services/user.service'
import gigList from "../cmps/gig-list.vue";
export default {
  data() {
    return {
      // user: null
      gigs: null,
      filteredGigs: []
    };
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" })
    setTimeout(() => {
      this.loadgigs()
      this.gigsFiltered()
    }, 2000);

    // const user = await userService.getById(id)
    // this.user = user
  },
  watch: {
    userId: {
      handler() {
        if (this.userId) {
          this.$store.dispatch({ type: "loadAndWatchUser", userId: this.userId });
        }
      },
      immediate: true,
    },
  },
  methods: {
    addGigPage() {
      this.$router.push("/gig/edit");
    },
    async gigsFiltered() {
      console.log('this.userId', this.userId)
      console.log('this.gigs[0].owner.id', this.gigs[0].owner.id)
      // this.orders.filter((order) => order.seller.sellerId === currConnUserId)
      var x = this.gigs.filter((gig) => gig.owner._id === this.userId ? this.filteredGigs.push(gig) : gig.owner)
      console.log('this.gigs', x)
      console.log('filteredGigs', this.filteredGigs)
      this.gigs = this.gigs.find(gig => gig.owner.id === this.userId)
      // console.log('this.userId',this.userId)
      // console.log('this.gigs', this.gigs)
      // console.log('getters', await this.$store.getters.gigs)
      //   this.$store.dispatch({ type: "loadGigs"  });
      // this.$store.getters.
    },
    loadgigs() {
      console.log('hey')
      this.gigs = this.$store.getters.gigs;
    },

  },
  computed: {

    user() {
      return this.$store.getters.watchedUser;
    },
    userId() {
      return this.$route.params.id;
    },
  },
  components: {
    gigList,

  },
};
</script>
