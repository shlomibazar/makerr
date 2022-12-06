<template>
  <li v-for="order in orders">
    <pre>
      {{ order }}

    </pre>
  </li>
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
            ? this.orders.push(order)
            : console.log("not")
        );
      } else {
        this.orders = this.orders.filter((order) =>
          order.seller.userId === currConnUserId
            ? this.orders.push(order)
            : console.log("not")
        );
      }
    },
  },
  computed: {},
  unmounted() {},
};
</script>
