<style scoped>
   /* .change_color {
       background-color:white;
       color:black;
   } */
</style>
<template>
 <section v-if="isInHomePage()" class="header-wrapper main-container fullWidthContainer sticky" :class="{change_color: scrollPosition > 70 }" >
    <header class="flex">
      <div>
        <router-link to="/" @click="headerScroll(true)" class="logo">
        <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#404145">
              <path
                d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z">
              </path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </router-link>
      </div>
      <div v-if="scrollPosition > 200" class="search-input not-sticky">
            <div class="search">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path></svg>
            </div>
            <input class="input" type="text" placeholder="Try &quot;building mobile app&quot;">
            <button-search class="button-search">Search</button-search>
          </div>
      <nav class="flex nav-bar-links">
        <section class="nav-links flex">
        <router-link to="/gig" >Explore</router-link>
        <router-link to="/gig" >Become a Seller</router-link>
        <router-link to="/gig" >Sign In</router-link>
        </section>
        <router-link to="/gig" class="join-btn flex">Join</router-link>
        <!-- <router-link to="/review">Reviews</router-link>
        <router-link to="/chat">Chat</router-link>
        <router-link to="/login">Login / Signup</router-link> -->
      </nav>
      
    </header>
</section>
<section class="header-labels"  v-if="scrollPosition > 140"></section>
 <section v-if="!isInHomePage()" class="header-wrapper main-container fullWidthContainer not-sticky">
    <header class="flex">
      <div>
        <router-link to="/" class="logo">
        <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#404145">
              <path
                d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z">
              </path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </router-link>
      </div>
      <div class="search-input not-sticky">
            <input class="input not-sticky" type="text" placeholder="What service are you looking for today?">
            <button-search class="button-search not-sticky">
              <svg  fill="white" width="17" height="17" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path></svg>
            </button-search>
          </div>
      <nav class="flex nav-bar-links not-sticky">
        <section class="nav-links flex  not-sticky">
        <router-link to="/gig" >Explore</router-link>
        <router-link to="/gig" >Become a Seller</router-link>
        <router-link to="/gig" >Sign In</router-link>
        </section>
        <router-link to="/gig" class="join-btn flex not-sticky">Join</router-link>
        <!-- <router-link to="/review">Reviews</router-link>
        <router-link to="/chat">Chat</router-link>
        <router-link to="/login">Login / Signup</router-link> -->
      </nav>
    </header>
    
</section>


    <section class="loggedin-user" v-if="loggedInUser">
      <router-link :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </router-link>
      <span>{{ loggedInUser.score.toLocaleString() }}</span>
      <img :src="loggedInUser.imgUrl" />
    </section>
  
</template>
<script>
export default {
  created () {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.updateScroll);
  },
  data() {
    return {
      scrollPosition: 0,
      labels:["All",
   "Logo",
   "Design",
   "Wordpress", 
   "Voice Over Video",
   "ExplainerProgramming",
   "Illustration"],
    }
  },
  methods: {
    isInHomePage() {
      return this.$router.currentRoute._value.path === "/";
    },
    updateScroll() {
    this.scrollPosition = window.scrollY
  },
},
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  }
}
</script>

