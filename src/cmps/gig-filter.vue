<template>
  <section class="gig-filter flex items-center filter-conteiner">

    <div class="flex filter-buttons-container" >
      <!-- BUDGET MODAL -->
      <div class="dropdown">
        <button class="filter-button" @click="budgetModal()">
          Budget
          <Transition>
          <span class="budget-arrow" :class="{ 'arrow-up': isBudgetModal }">
            <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z">
              </path>
            </svg>
          </span>
        </Transition>
        </button>
        <div class="budget-modal-container" v-if="isBudgetModal" v-click-outside="budgetModal">
          <div class="minMax flex">
            <div class="flex column">
              <label for="minPrice">MIN.</label>
              <!-- <input type="text" id="minPrice" name="minPrice" min="0" class="inputPrice" v-bind:budget.minPrice="value" placeholder="Any              $"/> -->
              <input type="text" id="minPrice" name="minPrice" min="0" class="inputPrice" v-model="budget.minPrice "
                placeholder="Any             $" />
            </div>
            <div class="flex column">
              <label for="maxPrice">MAX.</label>
              <!-- <input type="text" id="maxPrice" name="maxPrice" min="0" class="inputPrice" v-bind:budget.maxPrice="value" placeholder="Any              $"/> -->
              <input type="text" id="maxPrice" name="maxPrice" min="0" class="inputPrice" v-model="budget.maxPrice"
                placeholder="Any             $" />
            </div>
          </div>
          <div>
            <div class="filter-approve flex">
              <div class="clear-button" @click="clearAllBudget">Clear All</div>
              <button class="apply-button" @click="setFilterBudget">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <!-- DELIVERY TIME MODAL -->
      <div class="dropdown">
        <button class="filter-button" @click="deliveryTimeModal()">
          Delivery Time
          <Transition>
          <span class="deliverytime-arrow" :class="{ 'arrow-up': isDeliveryModal }">
            <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z">
              </path>
            </svg></span>
          </Transition>
        </button>
        <div class="delivery-time-modal" v-if="this.isDeliveryModal" v-click-outside="deliveryTimeModal">
          <section class="delivery-time-radio flex">
            <div class="flex">
              <input class="radio-btn" type="radio" id="express" name="express" value="1" v-model="buttonChoose" />
              <label class="radio-label fivepix" for="express">Express 24H</label><br />
            </div>
            <div class="flex">
              <input class="radio-btn" type="radio" id="3days" name="express" value="3" v-model="buttonChoose" />
              <label class="radio-label fivepix" for="3days">Up to 3 days</label><br />
            </div>
            <div class="flex">
              <input class="radio-btn" type="radio" id="7days" name="express" value="7" v-model="buttonChoose" />
              ?? <label class="radio-label" for="7days">Up to 7 days</label><br />
            </div>
            <div class="flex">
              <input class="radio-btn" type="radio" id="anytime" name="express" value="999" v-model="buttonChoose" />
              ?? <label class="radio-label" for="anytime">Anytime</label><br />
            </div>
          </section>
          <div class="filter-approve flex">
            <div class="clear-button" @click="clearAllDellTime">Clear All</div>
            <button class="apply-button" @click="setFilterDelTime(buttonChoose)">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="sort-button">
      <div class="sort-title"> 
        Sort by 
      </div>
      <b>
        <a @click="setSort('rate')">Rate</a>
      </b>
    </div>
  </section>
</template>
<script>
import { Search } from "@element-plus/icons-vue";
import _ from "lodash";

export default {
  name: "gig-filter",
  data() {
    return {
      txt: "",
      minPrice: 0,
      selectedLabels: [],
      value: [],
      sortBy: {},
      desc: -1,
      isDeliveryModal: false,
      isBudgetModal: false,
      selected: "",
      buttonChoose: "",
      budget: {
        minPrice: "",
        maxPrice: "",
      },
    };
  },
  created() { },
  methods: {
    clearAllBudget() {
      this.budget.minPrice = 0;
      this.budget.maxPrice = 9999;
      this.isBudgetModal = false;
      this.$emit("filteredBudget", this.budget);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    clearAllDellTime() {
      this.buttonChoose = "";
      this.isDeliveryModal = false;
      this.$emit("filteredDel", this.buttonChoose);
    },
    setFilterTxt() {
      this.$emit("filteredTxt", this.txt);
    },

    setFilterPrice() {
      this.$emit("filteredPrice", this.minPrice);
    },
    setFilterDelTime() {
      this.isDeliveryModal = false;
      this.$emit("filteredDel", this.buttonChoose);
    },
    setFilterBudget() {

      // if (!this.budget.minPrice || typeof this.budget.minPrice === "string") {
      if (!this.budget.minPrice ) {
        this.budget.minPrice = 0;
      }else{
      this.budget.minPrice = +(this.budget.minPrice)
      }
      if (!this.budget.maxPrice ) {
        this.budget.maxPrice = 9999;
      }else{
        this.budget.maxPrice = +(this.budget.maxPrice)
      }
      this.isBudgetModal = false;
      this.$emit("filteredBudget", this.budget);
    },
    setFilterStatus() {
      this.$emit("filteredStatus", this.status);
    },
    setSort(by) {
      this.sortBy = {};
      this.desc *= -1;
      this.sortBy[by] = this.desc;
      const sortBy = JSON.parse(JSON.stringify(this.sortBy));
      this.$emit("sorted", sortBy);
    },
    deliveryTimeModal() {
      this.isDeliveryModal = !this.isDeliveryModal;
      this.isBudgetModal = false;
    },
    budgetModal() {
      this.isBudgetModal = !this.isBudgetModal;
      this.isDeliveryModal = false;
    },
  },
  computed: {
    search() {
      return Search;
    },
  },
};
</script>
