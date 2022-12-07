<template>
  <center>
    <h1>Thank you for the order!</h1>
    <pre>
    {{this.gig}}
    </pre>
  </center>
</template>

<script>
// import chatVue from "./chat.vue"
import { gigService } from "../services/gig.service.js";
import { router } from "../router.js";

export default {
  data() {
    return {
      gig: null,
    };
  },
  created() {
    this.loadGig();
  },
  methods: {
    loadGig() {
      const id = this.$route.params.gigId;
      gigService.getById(id).then((gig) => {
        this.gig = gig;
        console.log("loadGig");
      });
    },
  },
  watch: {
    "$route.params.gigId"(id) {
    },
  },
  computed: {
  },
  components: {
  },
};
</script>
