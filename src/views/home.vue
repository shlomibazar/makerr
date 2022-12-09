<template>
  <section class="container home text-center">
    <!-- <section class="content-container"> -->
    <section class="hero flex fullWidthContainer">

      <section class="main-container">
        <div class="hero-content ">
          <h1 class="hero-title">
            Find the perfect <span class="freelance"> freelance </span>
          </h1>
          <h1 class="hero-title">
            services for your business
          </h1>

          <div class="search-input">
            <div class="search">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z">
                </path>
              </svg>
            </div>
            <input class="input" v-model="searchInfo" type="text" placeholder="Try &quot;building mobile app&quot;">
            <button-search class="button-search" @click="setFilterByTitle">Search</button-search>
          </div>
          <div class="hero-btn-conteiner">
            <h1>Popular:</h1>
            <span class="hero-button">
              <div @click="setLabel('graphics & design')">
                Website Design
              </div>
            </span>
            <span class="hero-button">
              <div @click="setLabel('digital marketing')">
                WordPress
              </div>
            </span>
            <span class="hero-button">
              <div @click="setLabel('Logo')">
                Logo design
              </div>
            </span>
            <span class="hero-button">
              <div @click="setLabel('writing & translation')">
                Video Editing
              </div>
            </span>
          </div>
        </div>
      </section>
      <div class="hero-image">
        <div class="hero-backgrounds">
          <div class="hero-img">
            
            <div class="animate-fade" :class="[heroBackgroundClass,zoom]">
              <div class="main-container seller-name">
                <Transition>
                <p class="animate-fade-text" :class="textDisplayClass">{{heroName}},
                  <b class="animate-fade-text">{{heroTitle}}</b> 
                </p>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <trustedby/>

    <div class="main-container">

      <h1 class="flex popular-title">Popular professional services</h1>

      <vueper-slides class="homepage-slider" fixed-height="345px" :visible-slides="5" :slide-ratio="1 / 4"
        slide-multiple :gap="3" :dragging-distance="200" :touchable="false" :breakpoints="sliderBreakpoints">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title"
          :content="slide.content" @click="setLabel(slide.label)" />

      </vueper-slides>

    </div>


  </section>
</template>

<script>
import trustedby from "../cmps/trusted-by.vue"
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'home',
  data() {
    return {
      zoom:"",
      textDisplayClass:"",
      heroName: null,
      heroTitle: null,
      heroCounter:0,
      heroBackgroundClass:null,
      heroInfo:[{
        heroBackgroundClass:"hero-andrea", name:"Andrea", title:"Fashion Designer"
      }, {
        heroBackgroundClass:"hero-moon", name:"Moon", title:"Marketing Expert"
      }, {
        heroBackgroundClass:"hero-gabrielle", name:"Gabrielle", title:"Shoemaker & Designer"
      }, {
        heroBackgroundClass:"hero-zach", name:"Zach", title:"Bar Owner"
      }, {
        heroBackgroundClass:"hero-ritika", name:"Ritika", title:"Video Editor"
      }],
      slides: [
        {
          title: 'Build your brand',
          content: 'Logo Design',
          label: 'graphics & design',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'
        },
        {
          title: 'Customize your site',
          content: 'WordPress',
          label: 'digital marketing',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png'
        },
        {
          title: 'Share your message',
          content: 'Voice Over',
          label: 'music & audio',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png'
        },
        {
          title: 'Engage your audience',
          content: 'Video Explainer',
          label: 'video & animation',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'
        },
        {
          title: 'Reach more customers',
          content: 'Social',
          label: 'trending',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png'
        },
        {
          title: 'Unlock growth online',
          content: 'SEO',
          label: 'digital marketing',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png'
        },
        {
          title: 'Color your dreams',
          content: 'Illustration',
          label: 'graphics & design',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png'
        },
        {
          title: 'Go global',
          content: 'Translation',
          label: 'writing & translation',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png'
        },
        {
          title: 'Learn your business',
          content: 'Data Entry',
          label: 'programming & tech',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png'
        },
        {
          title: 'Showcase your story',
          content: 'Book Covers',
          label: 'writing & translation',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png'
        },

      ],
      APIData: [],
      searchInfo: '',
      sliderBreakpoints: {
        600: {
          visibleSlides: 2, slideMultiple: 2
        },
        900: {
          visibleSlides: 3, slideMultiple: 3
        },

        1200: {
          visibleSlides: 4, slideMultiple: 4

        }
      }
    }
  },
  computed: {
  },
  created() {
    this.setHeroInterval()
  },
  methods: {
    setHeroInterval() {
      this.zoom=""
      this.heroBackgroundClass = this.heroInfo[this.heroCounter].heroBackgroundClass
      // console.log(this.heroBackgroundClass, this.heroCounter)
      
      setTimeout(() => {
        this.textDisplayClass = "none"
      }, 6500);
      setTimeout(() => {
        this.zoom="zoom-in"
        this.textDisplayClass ="block"
        var correctingCounter
      this.heroCounter===0?correctingCounter=4:correctingCounter=this.heroCounter-1
      this.heroName = this.heroInfo[correctingCounter].name
        this.heroTitle = this.heroInfo[correctingCounter].title
      
      }, 700);
      setTimeout(() => {
      this.setHeroInterval()
      }, 8000);
      this.heroCounter++
      this.heroCounter===5?this.heroCounter=0:this.heroCounter
    },
    setLabel(labelTxt) {
      this.$router.push({ path: '/gig', query: { label: labelTxt } })
    },
    setFilterByTitle(ev) {
      const pathToRoute = this.$route.path.split('/')
      this.$router.push({ path: '/gig', query: { title: this.searchInfo } })
    },
  },
  components: {
    trustedby,
    VueperSlides,
    VueperSlide,
  },
}
</script>
