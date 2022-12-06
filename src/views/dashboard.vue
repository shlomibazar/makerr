<template>
  <h1 v-for="(order, i) in orders" :key="i">
   <pre>{{ order }}</pre>
  </h1>
</template>

<script>
import { orderService } from "../services/order.service";
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
  },
  methods: {},
  computed: {},
  unmounted() {},
};
</script>
