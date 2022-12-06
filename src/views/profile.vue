<template>
  <div class="profile-main-container">
    <div class="leftside-mini-profile">
      <div class="profile-user-avatar">
        <img
          src="https://pngroyale.com/wp-content/uploads/2022/05/User-Avatar-PNG-Free-Download.png"
        />
      </div>
      <div class="profile-user-details">
        <span class="profile-user-details-from">From: Israel</span>
        <span class="profile-user-details-since">Member Since: Last Week</span>
        <span class="profile-user-details-response">Avg Time Response: 5 days</span>
      </div>
    </div>
    <div class="rightside-gigs-profile">
      <div class="profile-gigs-nav">
        <button>Active Gigs</button>
        <button>Paused Gigs</button>
      </div>
      <div class="addgig-section">
        <button @click="addGigPage()">Add Gig</button>
      </div>
    </div>
  </div>
</template>

<script>
// import imgUploader from "../cmps/img-uploader.vue";

export default {
  name: "profile",
  data() {
    return {};
  },
  methods: {
    addGigPage() {
      this.$router.push("/gig/edit");
    },
  },
};
</script>
