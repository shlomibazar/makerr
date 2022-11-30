<template>
  <!-- <center><h1>Purchase Page!</h1></center> -->
  <div class="main-purchase-page-ctn flex">
  
  <div class="purchase-left-sidebar flex">
    {{ gig.title }}
    <img class="purchase-left-sidebar-avatar" :src="gigPreview" />
    <h1>Order Details:</h1>
  </div>

  <div class="gig-purchase-right-container flex">
    <h1>Price summary</h1>
    <h5>Subtotal {{ gig.price }}</h5>
    <h5>Service Fee $9.00</h5>
    <div class="purchase-right-delivery flex">
      <img src="../assets/clock.png" />
      <div>3 Days Delivery</div>
    </div>
    <div class="purchase-right-header-list">What's Included</div>
    <div class="purchase-right-included">
      <ul class="order-features clean-list">
        <li>
          <i class="checkMark">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 9"
              xmins="http://www.w3.org/2000/svg"
              fill="#1ea968"
            >
              <path
                d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
              ></path></svg
          ></i>
          3 concepts included
        </li>
      </ul>

      <ul class="order-features clean-list">
        <li>
          <i class="checkMark">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 9"
              xmins="http://www.w3.org/2000/svg"
              fill="#1ea968"
            >
              <path
                d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
              ></path></svg
          ></i>
          Include 3D mockup
        </li>
      </ul>

      <ul class="order-features clean-list">
        <li>
          <i class="checkMark">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 9"
              xmins="http://www.w3.org/2000/svg"
              fill="#1ea968"
            >
              <path
                d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
              ></path></svg
          ></i>
          Vector file
        </li>
      </ul>
    </div>
    <footer>
      <button class="side-btn" @click="orderGig()">Purchase ({{ gig.price }})</button>
    </footer>
  </div>
</div>
</template>

<script>
import { gigService } from "../services/gig.service.local.js";
// import {userService} from '../services/user.service'

export default {
  data() {
    return {
      gig: null,
    };
  },
  created() {
    this.loadGig();
    console.log("purchase gig ID:", this.gig);
  },
  computed:{
    gigPreview(){
      return `${this.gig.owner.imgUrl}`;
    }
  },
  methods: {
    loadGig() {
      const id = this.$route.params.gigId;
      //   console.log("iddddddd", id);
      gigService.getById(id).then((gig) => {
        this.gig = gig;
        console.log("loadGig_purchase");
      });
    },
  },
};
</script>
