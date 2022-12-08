<template>
  <div class="user-info-container">
    <section class="user-info main-layout flex">
      <div class="user-name-avatar">
          <img class="user-image" :src="user.imgUrl" alt="" />

          <h4 class="user-fullname">{{ user.fullname }}</h4>
        </div>
      <div class="left side">
        <div class="user-details" v-if="this.currConnUser.isSeller">
          <div class="dashboard-memberdetails">
            <span class="dashboard-inboxrate"
              >Inbox response rate
              <div class="skill-container">
                <div class="skill p-72">72%</div>
              </div>
            </span>
            <span class="dashboard-inboxtime"
              >Inbox response time
              <div class="skill-container">
                <div class="skill p-98">98%</div>
              </div>
            </span>
            <span class="dashboard-orderrate"
              >Order response rate
              <div class="skill-container">
                <div class="skill p-86">86%</div>
              </div>
            </span>
            <span class="dashboard-delivertime"
              >Delivered on time
              <div class="skill-container">
                <div class="skill p-92">92%</div>
              </div>
            </span>
            <span class="dashboard-ordercomplete"
              >Order completion
              <div class="skill-container">
                <div class="skill p-81">81%</div>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div class="orders-container">
        <div>
          <div class="display-user-status" v-if="this.currConnUser.isSeller">
            Your Gigs
          </div>
          <div class="display-user-status" v-else>Your Orders</div>

          <button class="dashboard-switch-btn" @click="toggleMode">{{ switchMode }}</button>

          <ul v-for="order in ordersToShow">
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
                
                <div v-if="order.seller.sellerId !== this.user._id" class="status flex">
                  <h1 class="status-title">Order status:</h1>
                  <button class="status-info">{{ order.status }}</button>
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
      switchMode: "",
      // orders: null,
      user: null,
      currConnUser: null,
    };
  },
  async created() {
    this.user = userService.getLoggedinUser();
    this.currConnUser = userService.getLoggedinUser();
    // this.orders = await orderService.query();
    this.$store.dispatch({ type: "loadOrders" });
    // console.log("orders", this.orders);
    // this.filterdOrders();
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
      // var currConnUser = userService.getLoggedinUser();
      // this.currConnUser = JSON.parse(JSON.stringify(this.currConnUser))
      this.currConnUser.isSeller = !this.currConnUser.isSeller;
      console.log("this.currConnUser", this.currConnUser);
      // userService.saveLocalUser(currConnUser);

      this.currConnUser.isSeller
        ? (this.switchMode = "Switch to buyer")
        : (this.switchMode = "Switch to seller");
      // this.create()
      // this.ordersToShow
      // this.$router.go();
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
      this.$store.dispatch({ type: "addOrder", newOrder: updatedOrder });
      // orderService.save(updatedOrder);
      // this.orders = await orderService.query();
      // orderService.update()
    },
  },

  computed: {
    sellerImg() {
      return `${order.seller.sellerImg}`;
    },
    orders() {
      return this.$store.getters.orders;
    },
    ordersToShow() {
      console.log("ordersToshow");
      var currConnUserId = this.user._id;
      return this.currConnUser.isSeller
        ? this.orders.filter((order) => order.seller.sellerId === currConnUserId)
        : this.orders.filter((order) => order.buyer.userId === currConnUserId);
    },
    currUser() {
      console.log("run user");
      return this.currConnUser;
    },
    date(){
      return new Date(order.createdAt).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'})
    }
  },
  unmounted() {},
};
</script>
