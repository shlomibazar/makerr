<template>
  <section
    v-if="isInHome"
    class="header-wrapper main-container fullWidthContainer sticky"
    :class="{ change_color: scrollPosition > 1 }">
    <header class="flex">
      <div>
        <router-link to="/" @click="headerScroll(true)" class="logo">
          <div class="top-logo main-logo">Makerr<span class="green">.</span></div>
        </router-link>
      </div>
      <div v-if="scrollPosition > 165" class="search-input not-sticky">
        <input
          class="input not-sticky"
          type="text"
          v-model="searchInfo"
          placeholder="What service are you looking for today?"
        />
        <button-search class="button-search not-sticky" @click="setFilterByTitle()">
          <svg
            fill="white"
            width="17"
            height="17"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
            ></path>
          </svg>
        </button-search>
      </div>
      <nav class="flex nav-bar-links">
        <section class="nav-links flex">
          <router-link to="/gig">Explore</router-link>
          <router-link to="/gig">Become a Seller</router-link>
          <!-- <router-link to="/login">Sign In</router-link> -->
          <button class="navbar-signin-btn" @click="toggleSignInModal">Sign In</button>
          <div class="show-login-modal" v-if="this.isSignModalOpened">
            <login-signup @closeModal="toggleSignInModal" />
          </div>
        </section>
        <!-- <router-link to="/join" class="join-btn flex">Join</router-link> -->

        <!-- <router-link to="/chat">Chat</router-link>
        <router-link to="/login">Login / Signup</router-link> -->
      </nav>
    </header>
  </section>
  <section
    v-if="isInHome && scrollPosition > 165"
    class="sub-header-labels homePage main-container fullWidthContainer"
  >
    <section class="fixed-lables main-container">
      <h4 v-for="label in labelsSub" :key="label" @click="setLabelToQuery(label)">
        {{ label }}
      </h4>
    </section>
  </section>
  <section
    v-if="!isInHome"
    class="header-wrapper main-container fullWidthContainer not-sticky"
  >
    <header class="flex">
      <div>
        <router-link to="/" class="logo logo-fixed">
          <div class="top-logo main-logo">Makerr<span class="green">.</span></div>
        </router-link>
      </div>
      <div class="search-input not-sticky">
        <input
          class="input not-sticky"
          type="text"
          v-model="searchInfo"
          placeholder="What service are you looking for today?"
        />
        <button-search class="button-search not-sticky" @click="setFilterByTitle()">
          <svg
            fill="white"
            width="17"
            height="17"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
            ></path>
          </svg>
        </button-search>
      </div>
      <nav class="flex nav-bar-links not-sticky">
        <section class="nav-links flex not-sticky">
          <router-link to="/gig">Explore</router-link>
          <router-link to="/gig">Become a Seller</router-link>
          <router-link to="/gig">Sign In</router-link>
        </section>
        <router-link to="/gig" class="join-btn flex not-sticky">Join</router-link>
        <!-- <router-link to="/chat">Chat</router-link>
        <router-link to="/login">Login / Signup</router-link> -->
      </nav>
    </header>
  </section>

  <section class="loggedin-user" v-if="loggedInUser">
    <router-link :to="`/user/${loggedInUser._id}`">
      {{ loggedInUser.fullname }}
    </router-link>
    <span class="logged-in-user-name">{{ loggedInUser.fullname }}</span>
    <img
      class="logged-in-user-avatar"
      :src="loggedInUser.imgUrl"
      @click="toggleUserModal()"
    />
    <div class="user-modal-opts" v-if="isUserModalOn">
      <router-link to="/profile">Profile</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <button class="user-modal-logout-btn" @click="doLogout">Logout</button>
    </div>
    <!-- <span>{{ loggedInUser.score.toLocaleString() }}</span>
    <img :src="loggedInUser.imgUrl" /> -->
  </section>
</template>
<script>
import loginSignup from "../views/login-signup.vue";
export default {
  created() {
    this.$watch(
      () => this.$route,
      () => {
        if (this.$route.path === "/") {
          this.isInHome = true;
        } else {
          this.isInHome = false;
        }
      }
    );
    window.addEventListener("scroll", this.updateScroll);
    // this.isInHomePage()
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  data() {
    return {
      isSignModalOpened: false,
      isUserModalOn: false,
      isInHome: "",
      previousParams: "4564",
      toParams: "456",
      scrollPosition: 0,
      searchInfo: "",
      labels: [
        "All",
        "Logo",
        "Design",
        "Wordpress",
        "Voice Over Video",
        "ExplainerProgramming",
        "Illustration",
      ],
      labelsSub: [
        "graphics & design",
        "digital marketing",
        "writing & translation",
        "video & animation",
        "music & audio",
        "programming & tech",
        "business",
        "lifestyle",
        "trending",
      ],
    };
  },
  components: {
    loginSignup,
  },
  methods: {
    logOutUser(){
    this.$emit("userLogOut");
  },
  doLogout() {
      this.$store.dispatch({ type: 'logout' })
    },
    toggleUserModal(){
      this.isUserModalOn = !this.isUserModalOn;
    },
    toggleSignInModal() {
      this.isSignModalOpened = !this.isSignModalOpened;
      console.log("Sign in modal status: ", this.isSignModalOpened);
    },
    setLabelToQuery(labelTitle) {
      console.log("example", this.searchInfo);
      const pathToRoute = this.$route.path.split("/");
      console.log("pathToRoute", pathToRoute);
      this.displayLabel = labelTitle;
      this.$router.push({ path: "/gig", query: { label: labelTitle } });
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setFilterByTitle(ev) {
      const pathToRoute = this.$route.path.split("/");
      this.$router.push({ path: "/gig", query: { title: this.searchInfo } });
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>
