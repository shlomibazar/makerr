<template>
  <section class="full-width-dimmer">
    <div class="checkout-conteiner" :class="modalOpen">
      <section class="checkout-header">
        <h1 class="order-title">Order options</h1>
        <h1 class="close-checkout-btn" @click="modalOpen=false">X</h1>
      </section>
      <hr />

      <div class="PKFZREU">
        <div class="gig-mini-info">
          <div class="F4HBtqu">Basic</div>
          <span class="gig-mini-info-price">${{ gig.price }}</span>
        </div>
        <span class="gig-mini-info-basic">
          <strong>BASIC</strong> <span class="info-basic-text">{{ gig.title }} </span>
        </span>
      </div>

      <h1>Upgrade your order with extras</h1>
      <div class="upgrade-order-ctn">
        <div class="upgrade-title">
          Extra-fast 1-day delivery
          <input type="checkbox" id="checkbox" v-model="checked" />
        </div>
        <div class="upgrade-price">${{ gig.price }}</div>
      </div>

      <section class="order-total-wrapper">
        <div class="ii7ZaAL">
          <div class="CddSubE">
            <span class="text-display-2">
              <div class="flex flex-col">
                <span class="m-b-8">
                  <span class="font-size-32"> ${{ gig.price }} </span>
                </span>
                <span class="tbody-6">Single order</span>
              </div>
            </span>
          </div>

          <ul class="tbody-6 text-semi-bold CWqLIG3 gap-10">
            <li class="flex flex-items-center _7vsKc2B">
              <span
                class="nFghBOe Al0CMyF"
                aria-hidden="true"
                style="width: 16px; height: 16px"
                ><svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.75 1C0.75 0.585786 1.08579 0.25 1.5 0.25H16.5C16.9142 0.25 17.25 0.585786 17.25 1V4C17.25 4.41421 16.9142 4.75 16.5 4.75H12.25V10C12.25 10.2883 12.0847 10.5511 11.8249 10.676C11.565 10.8009 11.2566 10.7658 11.0315 10.5857L9 8.96047L6.96852 10.5857C6.74339 10.7658 6.43496 10.8009 6.17511 10.676C5.91526 10.5511 5.75 10.2883 5.75 10V4.75H1.5C1.08579 4.75 0.75 4.41421 0.75 4V1ZM7.25 4.75V8.43953L8.53148 7.41435C8.80539 7.19522 9.19461 7.19522 9.46852 7.41435L10.75 8.43953V4.75H7.25ZM2.25 3.25V1.75H15.75V3.25H2.25ZM2.5 5.25C2.91421 5.25 3.25 5.58579 3.25 6V14.25H14.75V6C14.75 5.58579 15.0858 5.25 15.5 5.25C15.9142 5.25 16.25 5.58579 16.25 6V15C16.25 15.4142 15.9142 15.75 15.5 15.75H2.5C2.08579 15.75 1.75 15.4142 1.75 15V6C1.75 5.58579 2.08579 5.25 2.5 5.25Z"
                  ></path></svg></span
              ><span class="m-l-12">Basic Package</span>
            </li>
            <li class="flex flex-items-center _7vsKc2B">
              <span
                class="nFghBOe Al0CMyF"
                aria-hidden="true"
                style="width: 16px; height: 16px"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                  ></path>
                  <path d="M9 4H7v5h5V7H9V4z"></path></svg></span
              ><span class="m-l-12">{{ gig.daysToMake }}-day delivery</span>
            </li>
            <li class="flex flex-items-center _7vsKc2B">
              <span
                class="nFghBOe Al0CMyF"
                aria-hidden="true"
                style="width: 16px; height: 16px"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
                  ></path>
                  <path
                    d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
                  ></path>
                </svg>
              </span>
              <span class="m-l-12">Unlimited revisions</span>
            </li>
          </ul>
        </div>
      </section>
      <section class="botom-btn-section">
        <button class="checkout-cmp-btn" @click="orderGig()">Submit Order (${{ gig.price }})</button>
        <div class="botom-section-txt">You won't be charged yet</div>
      </section>
    </div>
  </section>
</template>

<script>
import { userService } from "../services/user.service";
import {orderService} from "../services/order.service"
import { router } from "../router";
export default {
  name: "checkOut",
  components: {},
  data() {
    return {};
  },
  props: {
    gig: null,
    modalOpen: "",
  },

  created() {},
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
      console.log("orderToAdd", orderToAdd);
      orderService.save(orderToAdd);
      //socketService.emit('user ordered',{txt:'Someone just ordered from you'})
      router.push(`/dashboard`);
    },
  },
  computed: {},
  unmounted() {},
};
</script>

