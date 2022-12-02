<template>
  <section class="gig-filter flex items-center">
    <!-- <input type="text" placeholder="Search.." style="width:100px
        height:100px"> -->

    <!-- <el-input v-model="txt" @input="setFilterTxt" style="width: 250px" placeholder="Search gig..."
      :prefix-icon="search" /> -->

    <!-- <label>
      Min price:
      <input type="range" @input="setFilterPrice" v-model.number="minPrice" min="0" max="1000" />
      <span>{{ minPrice }}</span>
    </label> -->

    <!-- <div class="sort flex justify-between items-center m-2">
      <p>Sort:</p>
      <a class="sort-button" @click="setSort('rate')">Rate</a>
      <a class="sort-button" @click="setSort('price')">Price</a>
      <a class="sort-button" @click="setSort('createdAt')">Date</a>
    </div> -->

    <!-- BUDGET MODAL -->
    <div class="dropdown">
      <button class="filter-button" @click="budgetModal()">Budget</button>
      <div class="budget-modal-container" v-if="isBudgetModal">
        <div class="minMax flex">
          <div class="flex column">
            <label for="minPrice">MIN.</label>
            <input type="number" id="minPrice" name="minPrice" min="0" class="inputPrice" v-model="budget.minPrice" />
          </div>
          <div class="flex column">
            <label for="maxPrice">MAX.</label>
            <input type="number" id="maxPrice" name="maxPrice" min="0" class="inputPrice" v-model="budget.maxPrice" />
          </div>
        </div>
        <div>
          <div class="filter-approve flex">
            <button class="clear-button" @click="clearAllBudget">Clear All</button>
            <button class="apply-button" @click="setFilterBudget">Apply</button>
          </div>
        </div>
      </div>
    </div>

    <!-- DELIVERY TIME MODAL -->
    <div class="dropdown">
      <button class="filter-button" @click="deliveryTimeModal()">Delivery Time</button>
      <div class="delivery-time-modal" v-if="this.isDeliveryModal">
        <!-- <div>

          <p>Tutorials:{{ tutorials }}</p>
          <input v-model="tutorials" type="radio" value="Data Structures" name="ds" />
          <label for="ds">Data Structures</label>
          <input v-model="tutorials" type="radio" value="Algorithms" name="al" />
          <label for="al">Algorithms</label>
          <input v-model="tutorials" type="radio" value="Machine Learning" name="ml" />
          <label for="ml">Machine Learning</label>
        </div> -->

        <div class="flex">
          <input type="radio" id="express" name="express" value="1" v-model="buttonChoose" />
          <label for="express">Express 24H</label><br />
        </div>
        <div class="flex">
          <input type="radio" id="3days" name="express" value="3" v-model="buttonChoose" />  
          <label for="3days">Up to 3 days</label><br />
        </div>
        <div class="flex">
          <input type="radio" id="7days" name="express" value="7" v-model="buttonChoose" />  
          <label for="7days">up to 7 days</label><br />
        </div>
        <div class="flex">
          <input type="radio" id="anytime" name="express" value="999" v-model="buttonChoose" />  
          <label for="anytime">Anytime</label><br />
        </div>


        <div class="filter-approve flex">
          <button class="clear-button" @click="clearAllDellTime">Clear All</button>
          <button class="apply-button" @click="setFilterDelTime(buttonChoose)">Apply</button>
        </div>
      </div>
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
      selected: '',
      buttonChoose: '',
      budget: {
        minPrice: 0,
        maxPrice: 9999,
      },
    };
  },
  created() { },
  methods: {
    clearAllBudget() {
      this.budget.minPrice = 0
      this.budget.maxPrice = 9999
      this.isBudgetModal = false
      this.$emit("filteredBudget", this.budget);
    },
    clearAllDellTime() {
      this.buttonChoose = ''
      this.isDeliveryModal = false
      this.$emit("filteredDel", this.buttonChoose);
      
    },
    setFilterTxt() {
      console.log("this.$store.getters.labels", this.$store.getters.labels);
      this.$emit("filteredTxt", this.txt);
    },
    setFilterPrice() {
      console.log("this.minPrice", this.minPrice);
      this.$emit("filteredPrice", this.minPrice);
    },
    setFilterDelTime() {
      this.isDeliveryModal = false
      this.$emit("filteredDel", this.buttonChoose);
    },
    setFilterBudget() {
      console.log('this.budgetttttttttttttt', this.budget)
      this.isBudgetModal = false
      this.$emit("filteredBudget", this.budget);
    },

    // setFilterLabel() {
    //   this.$emit('filteredLabel', this.selectedLabels)
    // },
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
      this.isBudgetModal = false
    },
    budgetModal() {
      this.isBudgetModal = !this.isBudgetModal;
      this.isDeliveryModal = false
    },
  },
  computed: {
    // labels() {
    //   // console.log('this.$store.getters.labels',this.$store.getters.labels);
    //   return this.$store.getters.labels
    // },
    search() {
      return Search;
    },
  },
};
</script>
