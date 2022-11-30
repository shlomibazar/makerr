<template>
  <!-- Swiper CSS -->
  <link rel="stylesheet" href="css/swiper-bundle.min.css">
  <!-- CSS -->
  <link rel="stylesheet" href="css/style.css">

  <section class="container home text-center">

    <!-- <section class="content-container"> -->
    <section class="hero flex">


      <div class="hero-content" style="width: 50vw;">
        <h1 class="hero-title">
          Find the perfect <span> freelance </span> services for your business
        </h1>

        <h2 class="hero-subtitle">
          place for search bar
        </h2>

        <!-- <button type="button" class="hero-button" onclick="location.href='tours.html'">
          Search for tours &raquo;
        </button> -->
        <div class="hero-btn-conteiner">
          <span class="hero-button">
            <router-link to="">
              Website Design
            </router-link>
          </span>
          <span class="hero-button">
            <router-link to="">
              WordPress
            </router-link>
          </span>
          <span class="hero-button">
            <router-link to="">
              Logo design
            </router-link>
          </span>
          <span class="hero-button">
            <router-link to="">
              Video Editing
            </router-link>
          </span>
        </div>
      </div>
      <div class="hero-image" style="width:50vw ;">
        <div class="hero-backgrounds">
          <div class="hero-img">
            <div class="animate-fade hero-andrea" style="opacity: 1;">
              <div class="main-container seller-name">
                <p>Andrea,
                  <b>Fashion Designer</b>
                </p>
              </div>
            </div>
          </div>
          <div class="animate-fade hero-moon" style="opacity: 0;">
            <div class="main-container seller-name">
              <p>Moon,
                <b>Marketing Expert</b>
              </p>
            </div>
          </div>
          <div class="animate-fade hero-ritika" style="opacity: 0;">
            <div class="main-container seller-name">
              <p>Rikita,
                <b>Shoemaker and Designer</b>
              </p>
            </div>
          </div>
          <div class="animate-fade hero-zach" style="opacity: 0;">
            <div class="main-container seller-name">
              <p>Zach, <b>Bar Owner</b>
              </p>
            </div>
          </div>
          <div class="animate-fade hero-gabrielle" style="opacity: 0;">
            <div class="main-container seller-name">
              <p>Gabrielle,
                <b>Video Editor</b>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="main-container full trusted-by">
      <div class="flex trusted-by-wrapper">
        <span class="trusted-by-text">Trusted by:</span>
        <ul class="flex clean-list trusted-by-list">
          <li class="flex trusted-by-icon">
            <img
              src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663191175/Fiverr-Sprint-4/imgs/brands/facebook_varmxu.png"
              alt="Facebook">
          </li>
          <li class="flex trusted-by-icon">
            <img
              src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663191175/Fiverr-Sprint-4/imgs/brands/google_i2tr0b.png"
              alt="Google">
          </li>
          <li class="flex trusted-by-icon">
            <img
              src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663191175/Fiverr-Sprint-4/imgs/brands/netflix_x1twh7.png"
              alt="Netflix">
          </li>
          <li class="flex trusted-by-icon">
            <img
              src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663338217/Fiverr-Sprint-4/imgs/brands/pandg_ee6ugp.png"
              alt="P&amp;G">
          </li>
          <li class="flex trusted-by-icon">
            <img
              src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663191175/Fiverr-Sprint-4/imgs/brands/paypal_hdmgej.png"
              alt="PayPal">
          </li>
        </ul>
      </div>
    </section>

    

    <h5 class="text-center">
      <!-- Powered up Frontend -->
    </h5>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- </section> -->
  </section>


</template>

<script>

export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    
  }

}
</script>
