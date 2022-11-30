<template>
  <!-- Swiper CSS -->
  <link rel="stylesheet" href="css/swiper-bundle.min.css">
  <!-- CSS -->
  <link rel="stylesheet" href="css/style.css">

  <section class="container home text-center">

    <!-- <section class="content-container"> -->
    <section class="hero flex main-layout">


      <div class="hero-content ">
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
    <h1>Popular professional services</h1>
    <swiper 
    :slidesPerView="4"
     :spaceBetween="35" 
     :slidesPerGroup="4" 
     :loop="true" 
     :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }" 
      :navigation="true" 
      :modules="modules"
       class="mySwiper main-layout">
       
      <swiper-slide class="swiper-slide1">
        <h2 class="popular-title-text">Build your brand</h2>
        <h2 class="popular-subtitle-text"> Logo Design</h2>
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png">
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png">
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
          alt="">
      </swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>

    </swiper>


    <!-- <div class="slide-container swiper">
            <div class="slide-content">
                <div class="card-wrapper swiper-wrapper">
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile1.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile2.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile3.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile4.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile5.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile6.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile7.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile8.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="images/profile9.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-button-next swiper-navBtn"></div>
            <div class="swiper-button-prev swiper-navBtn"></div>
            <div class="swiper-pagination"></div>
        </div> -->
    <!-- <div class="popular-services">
      <div class="main-container title">
        <h1 class="popular-services-title">
          Popular professional services
        </h1>
      </div>
      <div class="slick-slider inner-slider-div slick-initialized" dir="ltr">
        <button type="button" data-role="none" class="slick-arrow slick-prev" style="display: block;">
          Previous
        </button>
        <div class="slick-list">
          <div class="slick-track" style="width: 6350px; opacity: 1; transform: translate3d(-1270px, 0px, 0px);">
            <div data-index="-5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;">
                  <a class="" href="/explore?category=digital-marketing">
                    <div class="slide-link">
                      <h4 class="slide-title">
                        <small>
                          Unlock growth online
                        </small>
                        SEO
                      </h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-index="-4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;">
                  <a class="" href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title">
                        <small>
                          Color your dreams
                        </small>
                        Illustration
                      </h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-index="-3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;">
                  <a class="" href="/explore?category=writing-and-translation">
                    <div class="slide-link">
                      <h4 class="slide-title">
                        <small>
                          Go global
                        </small>
                        Translation
                      </h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;">
                  <a class="" href="/explore?category=business">
                    <div class="slide-link">
                      <h4 class="slide-title">
                        <small>
                          Learn your business
                        </small>
                        Data Entry
                      </h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title">
                        <small>
                          Showcase your story
                        </small>
                        Book Covers
                      </h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Build your brand</small>Logo Design</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="1" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=programming-and-tech">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Customize your site</small>WordPress</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="2" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=music-and-audio">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Share your message</small>Voice Over</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="3" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=video-and-animation">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Engage your audience</small>Video Explainer</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="4" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=digital-marketing">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Reach more customers</small>Social Media</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="5" class="slick-slide" tabindex="-1" aria-hidden="true"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=digital-marketing">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Unlock growth online</small>SEO</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="6" class="slick-slide" tabindex="-1" aria-hidden="true"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Color your dreams</small>Illustration</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="7" class="slick-slide" tabindex="-1" aria-hidden="true"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=writing-and-translation">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Go global</small>Translation</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="8" class="slick-slide" tabindex="-1" aria-hidden="true"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=business">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Learn your business</small>Data Entry</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="9" class="slick-slide" tabindex="-1" aria-hidden="true"
              style="outline: none; width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Showcase your story</small>Book Covers</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="10" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Build your brand</small>Logo Design</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="11" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=programming-and-tech">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Customize your site</small>WordPress</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="12" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=music-and-audio">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Share your message</small>Voice Over</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="13" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=video-and-animation">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Engage your audience</small>Video Explainer</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="14" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=digital-marketing">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Reach more customers</small>Social Media</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="15" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=digital-marketing">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Unlock growth online</small>SEO</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="16" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Color your dreams</small>Illustration</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="17" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=writing-and-translation">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Go global</small>Translation</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="18" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=business">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Learn your business</small>Data Entry</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
            <div data-index="19" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
              style="width: 254px;">
              <div>
                <div tabindex="-1" style="width: 100%; display: inline-block;"><a class=""
                    href="/explore?category=graphics-and-design">
                    <div class="slide-link">
                      <h4 class="slide-title"><small>Showcase your story</small>Book Covers</h4>
                      <picture class="slide-pic">
                        <source media="(min-width: 1060px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(min-width: 800px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(min-width: 600px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <source media="(max-width: 599px)"
                          srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                        <img class="slide-img"
                          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x">
                      </picture>
                    </div>
                  </a></div>
              </div>
            </div>
          </div>
        </div><button type="button" data-role="none" class="slick-arrow slick-next" style="display: block;">
          Next</button>
      </div>
    </div> -->

    <!-- <h1>Find the perfect <span> freelance </span> services for your business </h1>
    <h2>filter here </h2>
    <section class="btn-container">
      popular:
      <span class="router-btn">
        <router-link to="">
          Website Design
        </router-link>
      </span>
      <span class="router-btn">
        <router-link to="">
          WordPress
        </router-link>
      </span>
      <span class="router-btn">
        <router-link to="">
          Logo design
        </router-link>
      </span>
      <span class="router-btn">
        <router-link to="">
          Video Editing
        </router-link>
      </span> -->

    <!-- </section> -->

    <h5 class="text-center">
      <!-- Powered up Frontend -->
    </h5>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- </section> -->
  </section>


</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

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

  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },


}
</script>
