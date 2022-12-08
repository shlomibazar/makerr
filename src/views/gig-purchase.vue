
<template>
  <!-- <center><h1>Purchase Page!</h1></center> -->
  <div class="main-purchase-page-ctn flex" v-if="gig">
    <div class="purchase-left-sidebar flex">

      <h1>Order Details:</h1>
      {{ this.gig.title }}
      <h1>Seller Details:</h1>
      <img class="purchase-left-sidebar-avatar" :src="gigPreview" />
      <p><strong>Seller </strong>{{ this.gig.owner.fullname }}</p>
      <p><strong>Joined </strong>{{ this.gig.owner.memberSince }}</p>
      <p><strong>From </strong>{{ this.gig.owner.loc }}</p>
      <p><strong>Seller Rate </strong>{{ this.gig.owner.rate }}</p>
      <p><strong>Average response time </strong> {{ this.gig.owner.avgResponceTime }}</p>
    </div>

    <div class="gig-purchase-right-container flex">
      <h1>Price summary</h1>
      <h5>Subtotal ${{ gig.price }}</h5>
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
        <button class="side-btn" @click="orderGig()">Checkout (${{ gig.price }})</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { router } from "../router";
import { gigService } from "../services/gig.service.js";
import { utilService } from "../services/util.service";
import { userService } from "../services/user.service";
import {orderService} from "../services/order.service"
import { socketService } from '../services/socket.service'


export default {
  data() {
    return {
      gig: null,
    };
  },
  created() {
    this.loadGig();
  },
  computed: {
    gigPreview() {
      return `${this.gig.owner.imgUrl}`;
    },
  },

  methods: {
    orderGig() {
      const user = userService.getLoggedinUser();
      console.log("Order to user", user._id);

      const orderToAdd = {
        buyer: {
          userId: user._id,
          userImg: user.imgUrl,
          userName: user.fullname,
        },
        seller: {
          sellerId: this.gig.owner._id,
          sellerImg: this.gig.owner.imgUrl,
          sellerName: this.gig.owner.fullname,
        },
        price: this.gig.price,
        createdAt: new Date(),
        gig: {
          _id: this.gig._id,
          image: this.gig.images[0],
          price: this.gig.price,
          name: this.gig.title,
          deliveryTime: this.gig.deliveryTime,
        },
        status: "pending",
      };
      console.log('orderToAdd',orderToAdd)
      orderService.save(orderToAdd)
      socketService.emit('user ordered',{txt:'Someone just ordered from you'})
      router.push(`/dashboard`);
    },
    loadGig() {
      const id = this.$route.params.gigId;
      gigService.getById(id).then((gig) => {
        this.gig = gig;
      });
    },
  },
};
</script>

