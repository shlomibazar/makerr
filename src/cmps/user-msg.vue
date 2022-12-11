<template>
  <div v-show="alive" class="alert" :class="alertClass">
    <h1>Hello,</h1>
    <h4>{{ msg?.txt }}</h4>
    <div class="my-btn">
    <div class="my-btn-border"></div>
      <img src="http://www.clker.com/cliparts/b/B/T/D/i/H/bell-icon-white.svg.hi.png" alt="">
  </div>
  </div>
</template>


<script>
import { eventBus, SHOW_MSG } from "../services/event-bus.service.js"

export default {
  created() {
    eventBus.on(SHOW_MSG, (msg) => {
      this.msg = msg
      var delay = msg.delay || 10000
      this.alive = true
      window.scrollTo({top: 0, behavior: 'smooth'});
      setTimeout(() => {
        this.alive = false
      }, delay)
    })
  },
  data() {
    return {
      alive: false,
      msg: null,
    }
  },
  computed: {
    alertClass() {
      if (!this.msg) return
      return `alert-${this.msg.type}`
    },
  },
}
</script>