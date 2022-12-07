<template>
  <div class="profile-main-container">
    <div class="leftside-mini-profile">
      <div class="profile-user-avatar">
        <img :src="user.imgUrl" />
      </div>
      <div class="profile-user-details" v-if="user">
        <span class="profile-user-details-from"
          ><strong>Name:</strong> {{ user.fullname }}</span
        >
        <span class="profile-user-details-since"
          ><strong>Member Since:</strong> Last Week</span
        >
        <span class="profile-user-details-response"
          ><strong>Avg Time Response:</strong> 5 days</span
        >
      </div>
    </div>
    <div class="rightside-gigs-profile">
      <div class="profile-gigs-nav">
        <button>Active Gigs</button>
        <button>Paused Gigs</button>
      </div>
      <div class="addgig-section">
        <img
          @click="addGigPage()"
          src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import imgUploader from "../cmps/img-uploader.vue";
// import {userService} from '../services/user.service'

export default {
  data() {
    return {
      // user: null
    };
  },
  async created() {
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
  },
  computed: {
    user() {
      return this.$store.getters.watchedUser;
    },
    userId() {
      return this.$route.params.id;
    },
  },
};
</script>
