<template>
  <section
    v-if="isInHome"
    class="header-wrapper main-container fullWidthContainer change_color" :class="{ white_BG: scrollPosition > 1 }">
    <header class="flex">
      <Transition>
        <div v-if="scrollPosition > 200" class="search-input not-sticky">
          <input
            class="input not-sticky"
            type="text"
            v-model="searchInfo"
            placeholder="What service are you looking for today?"
          />
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
        <section v-if="loggedInUser" class="loggedin-user flex" @click="toggleUserModal">
          <span class="logged-in-user-name">{{
            usersFirstLetter(loggedInUser.fullname)
          }}</span>
          <Transition>
            <div
              class="user-modal-opts"
              v-if="isUserModalOn"
              v-click-outside="toggleUserModal"
            >
              <div class="usermodal-link" @click="moveToProfile(loggedInUser._id)">
                Profile
              </div>
              <div class="usermodal-link" @click="moveToDashboard">Dashboard</div>
              <div class="usermodal-link" @click="toggleUserModal, doLogout()">
                Logout
              </div>
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
</template>

<script>
export default {
    created() {
        window.addEventListener("scroll", this.updateScroll);
    },
    data() {
        scrollPosition: 0,
  },
}
</script>
