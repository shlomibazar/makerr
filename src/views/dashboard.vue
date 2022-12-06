<template>
    <div class="user-info-container">
    <section class="user-info main-layout flex">
      <div class="left side">
        <div class="user-details">
          <img class="user-image" alt="" /><!---->
          <hr />
          <div class="member-Since">
            <div class="member">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonIcon"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
              <h4 class="since">Member since</h4>
            </div>
            <h4 class="date">May 2021</h4>
          </div>
        </div>
      </div>
      <div class="orders-container">
        <div>
          <ul v-for="order in orders">
          <div class="order">
            <div class="order-info">
              <img
                class="gig-img"
                :src=order.imgUrl
                alt=""
              />
              <div class="seller">
                <img
                  class="seller-img"
                  :src=order.seller.sellerImg
                  
                  alt=""
                />
                <div class="name">{{ order.seller.sellerName }}</div>
              </div>
              <div class="price-info">
                <p class="title">Price</p>
                <p class="info">${{order.price}}</p>
              </div>
              <div class="days-info">
                <p class="title">Delivery Time</p>
                <p class="info">{{order._id}}</p>
              </div>
              <div class="issued">
                <p class="title">Issued At</p>
                <p class="info">{{order.createdAt}}</p>
              </div>
            </div>
            <div class="status-container">
              <hr />
              <div class="status">
                <h1 class="status-title">Order status:</h1>
                <h1 class="status-info">{{ order.status }}</h1>
              </div>
            </div>
          </div>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { orderService } from "../services/order.service";
// import {userService} from "../services/user.service.js"

import { userService } from "../services/user.service.js";
export default {
  name: "dashboard",
  components: {},
  data() {
    return {
      orders: null,
    };
  },
  async created() {
    this.orders = await orderService.query();
    console.log("orders", this.orders);
    this.filterdOrders();
  },
  methods: {
    filterdOrders() {
      var currConnUser = userService.getLoggedinUser();
      var currConnUserId = currConnUser._id;
      console.log("currConnUserId", currConnUserId);

      if (!currConnUser.isSeller) {
        this.orders = this.orders.filter((order) =>
          order.buyer.userId === currConnUserId
        );
      } else {
        this.orders = this.orders.filter((order) =>
          order.seller.sellerId === currConnUserId
        );
      }
    },
  },
  computed: {
    sellerImg(){
      return `${order.seller.sellerImg}`;
    },
  },
  unmounted() {},
};
</script>
