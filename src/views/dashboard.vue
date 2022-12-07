<template>
  <div class="user-info-container">
    <section class="user-info main-layout flex">
      <div class="left side">
        <div class="user-details">
          <img class="user-image" :src="user.imgUrl" alt="" />
          <h4 class="user-fullname">{{ user.fullname }}</h4>
          <hr />
          <div class="dashboard-memberdetails">
            <span class="dashboard-inboxrate"
              >Inbox response rate
              <div class="w3-light-grey">
                <div
                  class="w3-green"
                  style="height: 14px; width: 93%; border-radius: 50px; color: red"
                >
                  %93
                </div>
              </div>
            </span>
            <span class="dashboard-inboxtime"
              >Inbox response time
              <div class="w3-light-grey">
                <div
                  class="w3-green"
                  style="height: 14px; width: 98%; border-radius: 50px"
                >
                  %98
                </div>
              </div>
            </span>
            <span class="dashboard-orderrate"
              >Order response rate
              <div class="w3-light-grey">
                <div
                  class="w3-green"
                  style="height: 14px; width: 72%; border-radius: 50px"
                >
                  %72
                </div>
              </div>
            </span>
            <span class="dashboard-delivertime"
              >Delivered on time
              <div class="w3-light-grey">
                <div
                  class="w3-green"
                  style="height: 14px; width: 87%; border-radius: 50px"
                >
                  %87
                </div>
              </div>
            </span>
            <span class="dashboard-ordercomplete"
              >Order completion
              <div class="w3-light-grey">
                <div
                  class="w3-green"
                  style="height: 14px; width: 75%; border-radius: 50px"
                >
                  %75
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div class="orders-container">
        <div>
          <button @click="toggleMode">{{ switchMode }}</button>
          <ul v-for="order in orders">
            <div class="order">
              <div class="order-info">
                <img class="gig-img" :src="order.gig.image" alt="" />
                <div class="seller">
                  <img class="seller-img" :src="order.seller.sellerImg" alt="" />
                  <div class="name">{{ order.seller.sellerName }}</div>
                </div>
                <div class="price-info">
                  <p class="title"><strong>Price</strong></p>
                  <p class="info">${{ order.price }}</p>
                </div>
                <div class="days-info">
                  <p class="title"><strong>Delivery Time</strong></p>
                  <p class="info">3 days</p>
                  <!-- <p class="info">{{ order.deliveryTime }}</p> -->
                </div>
                <div class="issued">
                  <p class="title"><strong>Issued At</strong></p>
                  <p class="info">{{ order.createdAt }}</p>
                </div>
              </div>
              <div class="status-container">
                <hr />
                <div v-if="!user.isSeller" class="status">
                  <h1 class="status-title">Order status:</h1>
                  <h1 class="status-info">{{ order.status }}</h1>
                </div>
                <div v-else class="status">
                  <h1 class="status-title">Order status:</h1>
                  <button class="status-info" @click="changeStatus(order._id)">
                    {{ order.status }}
                  </button>
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
import { create } from "lodash";
import { RouterLink } from "vue-router";
import { orderService } from "../services/order.service";
// import {userService} from "../services/user.service.js"

import { userService } from "../services/user.service.js";
export default {
  name: "dashboard",
  components: {},
  data() {
    return {
      i: 0,
      switchMode: "",
      orders: null,
      user: null,
    };
  },
  async created() {
    this.user = userService.getLoggedinUser();
    this.orders = await orderService.query();
    console.log("orders", this.orders);
    this.filterdOrders();
    this.user.isSeller
      ? (this.switchMode = "Switch to buyer")
      : (this.switchMode = "Switch to seller");
  },
  methods: {
    filterdOrders() {
      var currConnUser = userService.getLoggedinUser();
      var currConnUserId = currConnUser._id;
      console.log("currConnUserId", currConnUserId);

      if (!currConnUser.isSeller) {
        this.orders = this.orders.filter(
          (order) => order.buyer.userId === currConnUserId
        );
      } else {
        this.orders = this.orders.filter(
          (order) => order.seller.sellerId === currConnUserId
        );
      }
    },
    toggleMode() {
      var currConnUser = userService.getLoggedinUser();
      currConnUser.isSeller = !currConnUser.isSeller;

      console.log("currConnUser", currConnUser);
      userService.saveLocalUser(currConnUser);

      currConnUser.isSeller
        ? (this.switchMode = "Switch to buyer")
        : (this.switchMode = "Switch to seller");
      // this.create()
      this.$router.go();
      // this.$route.go()
    },

    async changeStatus(orderId) {
      let updatedOrder = JSON.parse(
        JSON.stringify(this.orders.find((order) => order._id === orderId))
      );
      console.log("updatedOrder front ", updatedOrder);
      if (updatedOrder.status === "pending") {
        updatedOrder.status = "approved";
      } else if (updatedOrder.status === "approved") {
        updatedOrder.status = "completed";
      }
      orderService.save(updatedOrder);
      // this.orders = await orderService.query();
      // orderService.update()
    },
  },
  computed: {
    sellerImg() {
      return `${order.seller.sellerImg}`;
    },
  },
  unmounted() {},
};
</script>
