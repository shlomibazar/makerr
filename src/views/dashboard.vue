<template>
  <div class="user-info-container">
    <section class="user-info main-layout flex">
      <div class="user-name-avatar">
          <img class="user-image" :src="user.imgUrl" alt="" />
          <h4 class="user-fullname">{{ user.fullname }}</h4>
        <div class="flex user-from">
        
          <span class="user-fullname">From </span>
          <strong>Israel </strong>
        </div>
        <div class="flex user-since">
          <span class="user-fullname">Member Since</span>
          <strong>Mar 2021</strong>
        </div>
      </div>
      <div class="left side">
        <div class="progress-container" v-if="this.currConnUser.isSeller">
          <div class="progress">
            <!-- <div>Response Rate <el-progress percentage="98" color="#1DBF73" /></div> -->
            <span class="rate">Response rate </span>
            <el-progress class="percentage" percentage="98" color="#1DBF73" /> <span>Delivered on time</span>
            <el-progress class="percentage" percentage="85" color="#1DBF73" />
            <span>Order completion</span>
            <el-progress class="percentage" percentage="100" color="#1DBF73" />
          </div>
          <hr />
          <div class="prodress-data">
            <div class="earned">
              Earned in July<span>${{sum}}</span>
            </div>
            <div class="earned">Total Orders <span>{{totalOrders}}</span></div>
            <!-- <div class="response">Response time<span>2Hrs</span></div> -->
          </div>
        </div>
      </div>

      <div class="orders-container">
        <div>
        <div class="flex dashboard-controls">
          <div class="display-user-status flex" v-if="this.currConnUser.isSeller">
            Manage Orders 
          </div>
          <div class="display-user-status" v-else>Your Orders</div>

          <button v-if="user.isSeller" class="dashboard-switch-btn" @click="toggleMode">{{ switchMode }}</button>

        </div>
          <ul v-for="(order,idx) in ordersToShow">
            <div class="order">
              <div class="order-info">
                <img class="gig-img" :src="order.gig.image" alt="" />
                <!-- <img class="gig-img" :src="imgs[idx] || order.gig.image" alt="" /> -->
                <div class="seller">
                  <!-- <img v-if="currConnUser.isSeller" class="seller-img" :src="order.seller.sellerImg" alt="" /> -->
                  <img v-if="currConnUser.isSeller" class="seller-img" :src="imgs[idx] || order.buyer.userImg" alt="" />
                  <img v-else class="seller-img" :src="imgs[idx] ||order.seller.sellerImg" alt="" />
                  <div v-if="currConnUser.isSeller" class="name">{{ order.buyer.userName }}</div>
                  <div v-else class="name">{{ order.seller.sellerName }}</div>
                </div>
                <div class="price-info">
                  <p class="title"><strong>Price</strong></p>
                  <p class="info">${{ order.price }} {{earned()}}</p>
                </div>
                <div class="days-info">
                  <p class="title"><strong>Delivery Time</strong></p>
                  <p class="info">3 days</p>
                  <!-- <p class="info">{{ order.deliveryTime }}</p> -->
                </div>
                <div class="issued">
                  <p class="title"><strong>Issued At</strong></p>
                  <p class="info">{{ dateFormat(order.createdAt) }}</p>
                </div>
              </div>
              <div class="status-container">
                
                <div v-if="order.seller.sellerId !== this.user._id" class="status flex">
                  <h1 class="status-title">Order status:</h1>
                  <button class="status-info-buyer" :class="statusColor">{{ status(order) }}</button>
                </div>
                <div v-else class="status">
                  <h1 class="status-title">Order status:</h1>
                  <button class="status-info" :class="statusColorBuyer" @click="changeStatus(order._id)">
                    {{ status(order) }}
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
      sum: 0,
      statusColor:"",
      statusColorBuyer:"",
      totalOrders: 0,
      isFirst: true,
      // orders: null,
      user: null,
      currConnUser: null,
      imgs: [
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c379aa91-8e48-453f-adbf-cf2ab5a2ba8d_f85qjo.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/1d8fa5f7-b34a-4f19-a55e-941a853fe2b2_qqpqnv.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/stepanadrian_ag4px7.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/JPEG_20210716_045808_7161494499008619166_zh6tkc.webp",
        "https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c6667c18-c48c-415f-8d6e-28fda9b62486_depjj6.webp",
      ],
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

      if(currConnUser.isSeller){
        console.log('i seller')
            this.orders = this.orders.filter(
            (order) => order.seller.sellerId === currConnUserId)
      }else{
               this.orders = this.orders.filter(
           (order) => order.buyer.userId === currConnUserId)
      }
      // if (!currConnUser.isSeller) {
      //   this.orders = this.orders.filter(
      //     (order) => order.buyer.userId === currConnUserId
      //   );
      // } else {
      //   this.orders = this.orders.filter(
      //     (order) => order.seller.sellerId === currConnUserId
      //   );
      // }
    },
    
    toggleMode() {

      this.currConnUser.isSeller = !this.currConnUser.isSeller;
      console.log("this.currConnUser", this.currConnUser);

      this.currConnUser.isSeller
        ? (this.switchMode = "Switch to buyer")
        : (this.switchMode = "Switch to seller");

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
    earned(){
      if(this.isFirst){
        var orders = this.ordersToShow
        this.totalOrders = orders.length
        var x = orders.forEach(order => {
          // console.log('order', order.price);
          this.sum = this.sum + order.price;
        })
      }
        this.isFirst = false
        // console.log('Earned function', x);
    },
    dateFormat(date){
      // return  new Date(date).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'})
      return  new Date(date).toLocaleString()
    },
    status(order){
      // console.log(order.status)
    order.status==="pending"? this.statusColor="yellow":this.statusColor
    order.status==="approved"? this.statusColor="blue":this.statusColor
    order.status==="completed"? this.statusColor="green":this.statusColor
      return order.status
    }
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
      // return this.currConnUser.isSeller
      //   ? this.orders.filter((order) => order.seller.sellerId === currConnUserId)
      //   : this.orders.filter((order) => order.buyer.userId === currConnUserId);
      if(this.currConnUser.isSeller){
       var filteredOrders =  this.orders.filter((order) => order.seller.sellerId === currConnUserId)
        var reversedOrders = filteredOrders.reverse()
      }
      else {
        var filteredOrders = this.orders.filter((order) => order.buyer.userId === currConnUserId) 
         var reversedOrders = filteredOrders.reverse()
      }
      return reversedOrders
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
