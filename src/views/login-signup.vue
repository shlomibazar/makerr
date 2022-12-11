<template >
  <div v-if="loginOrSignUp === `signup`" class="login-modal"   >
    <h1>Join Makerr</h1>
    <!-- <p class="mute">user1 or admin, pass:123 </p> -->
    <form  @submit.prevent="signinSignup" >
      <input
        type="text"
        v-model="signupCred.fullname"
        placeholder="Your full name"
      />
      <input
        type="text"
        v-model="signupCred.username"
        placeholder="Username"
      />
      <input
        type="password"
        v-model="signupCred.password"
        placeholder="Password"
      />
      <img-uploader @uploaded="onUploaded"></img-uploader>
      <button class="login-modal-btn">Signup</button>
    </form>
    </div>
      <div v-if="loginOrSignUp === `login`" class="login-modal" >
    <h1>Login to Makerr<span class="login-greendot">•</span></h1>
      <form  @submit.prevent="signinSignup">
      <input
        v-if="loginOrSignUp === `login`"
        type="text"
        v-model="loginCred.username"
        placeholder="Username"
      />
      <input
        type="password"
        v-model="loginCred.password"
        placeholder="Password"
      />
      <button class="login-modal-btn">Login</button>
    </form>
  </div>
</template>
<script>
import imgUploader from "../cmps/img-uploader.vue";

export default {
  name: "login-signup",
  props: { loginOrSignUp: String },
  data() {
    return {
      msg: "",
      loginCred: { username: "", password: "" },
      signupCred: { username: "", password: "", fullname: "", imgUrl: "" },
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  created() {
    this.loadUsers();
  },
  methods: {
    async signinSignup() {
      if (this.loginOrSignUp === "login") {
        this.doLogin();
      }
      if (this.loginOrSignUp === "signup") {
        this.doSignup();
      }
    },
    async doLogin() {
      if (!this.loginCred.username) {
        this.msg = "Please enter username/password";
        return;
      }
      try {
        // await this.$store.dispatch({ type: "login", userCred: this.loginCred })
        console.log("this.loginOrSignUp in store ", this.loginOrSignUp);
        await this.$store.dispatch({
          type: this.loginOrSignUp,
          userCred: this.loginCred,
        });
        this.$emit("closeModal");
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });
    },
    async doSignup() {
      if (
        !this.signupCred.fullname ||
        !this.signupCred.password ||
        !this.signupCred.username
      ) {
        this.msg = "Please fill up the form";
        return;
      }
      console.log("loginOrSignUpprooops", this.loginOrSignUp);
      await this.$store.dispatch({ type: "signup", userCred: this.signupCred });
      // await this.$store.dispatch({ type: 'login', userCred: this.signupCred })
      this.$emit("closeModal");
      this.$router.push("/");
    },
    loadUsers() {
      this.$store.dispatch({ type: "loadUsers" });
    },
    async removeUser(userId) {
      try {
        await this.$store.dispatch({ type: "removeUser", userId });
        this.msg = "User removed";
      } catch (err) {
        this.msg = "Failed to remove user";
      }
    },
    onUploaded(imgUrl) {
      this.signupCred.imgUrl = imgUrl;
    },
  },
  components: {
    imgUploader,
  },
};
</script>
