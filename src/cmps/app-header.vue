<template>
  <section
    v-if="isInHome"
    class="header-wrapper main-container fullWidthContainer change_color"
    :class="{ white_BG: scrollPosition > 1 }"
  >
    <header class="flex">
      <div>
        <router-link to="/" @click="headerScroll(true)" class="logo">
          <div class="top-logo main-logo">Makerr<span class="green">.</span></div>
        </router-link>
      </div>
      <Transition>
        <div v-if="scrollPosition > 200" class="search-input not-sticky">
          <input
            class="input not-sticky"
            type="text"
            v-model="searchInfo"
            placeholder="What service are you looking for today?"
          />
          <button class="button-search not-sticky" @click="setFilterByTitle">
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
          </button>
        </div>
      </Transition>
      <nav class="flex nav-bar-links">
        <section class="nav-links flex">
          <router-link class="nav-btn" to="/gig">Explore</router-link>
          <router-link class="nav-btn" to="/gig">Become a Seller</router-link>
          <a
            v-if="!loggedInUser"
            class="navbar-signin-btn nav-btn"
            @click="toggleSignInModal(false)"
            >Sign In</a
          >
        </section>
        <a
          v-if="!loggedInUser"
          class="join-btn flex nav-btn"
          @click="toggleSignInModal(true)"
          >Join</a
        >
        <section
          v-if="loggedInUser"
          class="loggedin-user flex"
          @click="toggleUserModal()"
        >
          <!-- <img
              class="logged-in-user-avatar"
              :src="loggedInUser.imgUrl"
              @click="toggleUserModal()"
            /> -->
          <!-- <span class="logged-in-user-name">{{
            usersFirstLetter(loggedInUser.fullname)
          }}</span> -->
          <span  >
            <img :src="loggedInUser.imgUrl" alt="" class="loggedin-user flex">
            <!-- {{loggedInUser.imgUrl}} -->

          </span>
          <Transition>
            <div
              class="user-modal-opts"
              v-if="isUserModalOn"
              v-click-outside="toggleUserModal"
            >
            <div class="usermodal-link" @click="moveToProfile(loggedInUser._id)">Profile</div>
            <div class="usermodal-link" @click="moveToDashboard">Dashboard</div>
            <div class="usermodal-link" @click="toggleUserModal, doLogout()">Logout</div>
            </div>
          </Transition>
        </section>
      </nav>
    </header>
  </section>
  <Transition>
    <section
      v-if="isInHome && scrollPosition > 200"
      class="sub-header-labels homePage main-container fullWidthContainer">
      <section class="fixed-lables main-container">
        <h4 v-for="label in labelsSub" :key="label" @click="setLabelToQuery(label)">
          {{ label }}
        </h4>
      </section>
    </section>
  </Transition>
  <section
    v-if="!isInHome"
    class="header-wrapper main-container fullWidthContainer not-sticky white_BG"
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
        <button class="button-search not-sticky" @click="setFilterByTitle">
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
        </button>
      </div>
      <nav class="flex nav-bar-links not-sticky">
        <section class="nav-links flex not-sticky">
          <!-- <router-link class="nav-btn" to="/gig">Explore</router-link> -->
          <a class="nav-btn" @click="clearFilter()">Explore</a>
          <router-link class="nav-btn" to="/gig">Become a Seller</router-link>
          <a v-if="!loggedInUser" class="nav-btn" @click="toggleSignInModal(false)"
            >Sign In</a>
        </section>
        <a
          v-if="!loggedInUser"
          class="join-btn flex not-sticky"
          @click="toggleSignInModal(true)"
          >Join</a
        >
        <section v-if="loggedInUser" class="loggedin-user" @click="toggleUserModal()">
          <span  >
            <img :src="loggedInUser.imgUrl" alt="" class="loggedin-user flex">
            <!-- {{loggedInUser.imgUrl}} -->

          </span>

          <div
            class="user-modal-opts"
            v-if="isUserModalOn"
            v-click-outside="!toggleUserModal"
            @click="toggleUserModal()"
          >
            <div class="usermodal-link" @click="moveToProfile(loggedInUser._id)">Profile</div>
            <div class="usermodal-link" @click="moveToDashboard">Dashboard</div>
            <div class="usermodal-link" @click="toggleUserModal, doLogout()">Logout</div>
          </div>

          <!-- <div
            class="user-modal-opts"
            v-if="isUserModalOn"
            v-click-outside="!toggleUserModal"
            @click="toggleUserModal()"
          >
            <router-link
              @click="toggleUserModal"
              class="user-modal-links"
              :to="`/profile/${loggedInUser._id}`"
              >Profile</router-link
            >
            <router-link @click="toggleUserModal" class="user-modal-links" to="/dashboard"
              >Dashboard</router-link
            >
            <router-link
              @click="toggleUserModal, doLogout()"
              class="user-modal-links"
              to="/"
              >Logout</router-link
            >
          </div> -->
        </section>
      </nav>
    </header>
  </section>
  <Transition>
    <div v-if="this.isSignModalOpened" class="show-login-modal">
      <!-- <login-signup :loginOrSignUp="loginOrSignUp" v-click-outside="toggleSignInModal" /> -->
      <login-signup
        :loginOrSignUp="loginOrSignUp"
        @closeModal="toggleSignInModal"
        v-click-outside="toggleSignInModal"
      />
    </div>
  </Transition>
</template>
<script>
import { eventBus, showSuccessMsg } from "../services/event-bus.service";
import { socketService } from "../services/socket.service";
import loginSignup from "../views/login-signup.vue";
export default {
  data() {
    return {
      loginOrSignUp: null,
      logOrSign: true,
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
  created() {
    socketService.on("send to seller", this.testSocket);
    socketService.on("a new order", this.newOrderSocket);
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

  },
  destroyed() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  
  components: {
    loginSignup,
  },
  methods: {
    moveToProfile(userId){
      this.$router.push(`/profile/${userId}`);
      this.isUserModalOn = false;
    },
    newOrderSocket(msg){
      console.log('msg', msg);
      showSuccessMsg(`Hi,  ${msg.txt}`);
    },
    moveToDashboard(){
      this.$router.push("/dashboard");
      this.isUserModalOn = false;
    },
    usersFirstLetter(name) {
      return name[0];
    },
    testSocket(order) {
      console.log("order sovckert", order);

      showSuccessMsg(`Your order has been ${order.status}`);
      
      // alert("work");
    },
    logOutUser() {
      this.$emit("userLogOut");
    },
    doLogout() {
      console.log("hey i in logout");
      this.$store.dispatch({ type: "logout" });
    },
    toggleUserModal() {
      this.isUserModalOn = !this.isUserModalOn;
    },
    signModalCloseEmpty() {
      this.isSignModalOpened = !this.isSignModalOpened;
    },
    toggleSignInModal(logOrSign) {
      logOrSign ? (this.loginOrSignUp = "signup") : (this.loginOrSignUp = "login");
      // this.loginOrSignUp = logOrSign
      console.log(this.loginOrSignUp);
      this.isSignModalOpened = !this.isSignModalOpened;
      console.log("Sign in modal status: ", this.isSignModalOpened);
    },
    toggleLoginModal() {
      this.loginOrSignUp = "login";
      this.isSignModalOpened = !this.isSignModalOpened;
      // console.log("Sign in modal status: ", this.isSignModalOpened);
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
    setLoginUser() {},
    onClickOutside(value) {
      value = false;
    },
    clearFilter(){
      console.log('hey i in clear filter')
      this.$store.dispatch({ type: "loadGigs", filterBy: {txt: ''.title, budget:{},labels:null, price:0,buttonChoose: ""} });
      this.$router.push({ path: "/gig" });
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
      // console.log('befor',this.loggedinUser)
      // this.loggedinUser = this.$store.getters.loggedinUser;
      // console.log('after',this.loggedinUser)
    },
  },
};
</script>
