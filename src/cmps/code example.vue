<template>
  <section v-if="isInHome" class="header-wrapper main-container fullWidthContainer change_color"
    :class="{ white_BG: scrollPosition > 1 }">
    <header class="flex">
      <Transition>
        <div v-if="scrollPosition > 200" class="search-input not-sticky">
          <input class="input not-sticky" type="text" v-model="searchInfo"
            placeholder="What service are you looking for today?" />
        </div>
      </Transition>
      <nav class="flex nav-bar-links">
        <section class="nav-links flex">
          <router-link class="nav-btn" to="/gig">Explore</router-link>
          <router-link class="nav-btn" to="/gig">Become a Seller</router-link>
          <a v-if="!loggedInUser" class="navbar-signin-btn nav-btn" @click="toggleSignInModal(false)">Sign In</a>
        </section>
        <a v-if="!loggedInUser" class="join-btn flex nav-btn" @click="toggleSignInModal(true)">Join</a>
        <section v-if="loggedInUser" class="loggedin-user flex" @click="toggleUserModal()">
          <!-- <img
              class="logged-in-user-avatar"
              :src="loggedInUser.imgUrl"
              @click="toggleUserModal()"
            /> -->
          <span class="logged-in-user-name">{{
              usersFirstLetter(loggedInUser.fullname)
          }}</span>
          <Transition>
            <div class="user-modal-opts" v-if="isUserModalOn" v-click-outside="toggleUserModal">
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
    <section v-if="isInHome && scrollPosition > 200"
      class="sub-header-labels homePage main-container fullWidthContainer">
      <section class="fixed-lables main-container">
        <h4 v-for="label in labelsSub" :key="label" @click="setLabelToQuery(label)">
          {{ label }}
        </h4>
      </section>
    </section>
  </Transition>
</template>
<script>
export default {
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },
  data() {
    return {
      scrollPosition: 0,
    }
  },
}
</script>




<!-- 
import { eventBus, showSuccessMsg } from "../services/event-bus.service";
import { socketService } from "../services/socket.service";
import loginSignup from "../views/login-signup.vue";
export default {
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

    this.loggedinUser = this.setLoginUser;
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  data() {
    return {
      loggedInUser: null,
      loginOrSignUp: null,
      logOrSign: true,
      isSignModalOpened: false,
      isUserModalOn: false,
      scrollPosition: 0,
      isInHome: "",
      previousParams: "4564",
      toParams: "456",
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

      showSuccessMsg(`Hi, your order has been ${order.status}`);
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
</script> -->
