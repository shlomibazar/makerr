<template>
  <section class="gig-filter flex items-center">
    <!-- <input type="text" placeholder="Search.." style="width:100px
        height:100px"> -->

    <el-input v-model="txt" @input="setFilterTxt" style="width: 250px" placeholder="Search gig..."
      :prefix-icon="search" />

    <label>
      Min price:
      <input type="range" @input="setFilterPrice" v-model.number="minPrice" min="0" max="1000" />
      <span>{{ minPrice }}</span>
    </label>

    <!-- need to add filter by delviry time 
      filter by price(min/max)  -->
    <!--   
      <el-select
        v-model="status"
        @change="setFilterStatus"
        class="m-2"
        placeholder="All"
      >
        <el-option
          v-for="status in statuses"
          :key="status.title"
          :label="status.title"
          :value="status.value"
        />
      </el-select> -->

    <!-- <el-select
        v-model="selectedLabels"
        @change="setFilterLabel"
        multiple
        placeholder="Pick types"
        style="width: 240px"
      >
        <el-option
          v-for="label in labels"
          :key="label.title"
          :label="label.title"
          :value="label.title"
          :style="{ backgroundColor: label.color, color: '#ffffff' }"
        />
      </el-select> -->



    <div class="sort flex justify-between items-center m-2">
      <p>Sort:</p>
      <a class="sort-button" @click="setSort('rate')">Rate</a>
      <a class="sort-button" @click="setSort('price')">Price</a>
      <a class="sort-button" @click="setSort('createdAt')">Date</a>
      <!-- this way they got another class ? undefined  -->
      <!-- <a class="btn-dark-small m-1" @click="setSort('createdAt')">Date</a> -->
      <span>{{ desc === -1 ? '↓' : '↑' }}</span>
    </div>


    <div class="dropdown">
      <button class="filter-button">Budget</button>
      <div class="minMax flex">
        <div class="flex column">
          <label for="minPrice">MIN.</label>
          <input type="number" id="minPrice" name="minPrice" min="0" class="inputPrice">
        </div>
        <div class="flex column">
          <label for="maxPrice">MAX.</label>
          <input type="number" id="maxPrice" name="maxPrice" min="0" class="inputPrice">
        </div>
      </div>
      <div>
        <div class="filter-approve flex">
          <span>Clear All</span>
          <span class="apply-button">Apply</span>
        </div>
      </div>
    </div>

    <div class="dropdown">
      <button class="filter-button">Delivery Time</button>

        <input type="radio" id="express" name="express" value="HTML">
        <label for="express">Express 24H</label><br>

        <input type="radio" id="3days" name="3days" value="HTML">
        <label for="3days">Up to 3 days</label><br>

        <input type="radio" id="7days" name="7days" value="HTML">
        <label for="7days">up to 7 days</label><br>

        <input type="radio" id="anytime" name="anytime" value="HTML">
        <label for="anytime">Anytime</label><br>

      <div class="filter-approve flex">
        <span>Clear All</span>
        <span class="apply-button">Apply</span>
      </div>
    </div>




    <!-- <el-dropdown trigger="click" hide-on-click=false size="large" v-if:tabindex="-1">
      <span class="el-dropdown-link">
        Dropdown List<el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="minMax ">
            <div  class="flex ">
              <div class="flex column">
                <label for="minPrice">MIN.</label>
                <input type="number" id="minPrice" name="minPrice" min="0" class="inputPrice">
              </div>
              <div class="flex column" >
                <label for="maxPrice">MAX.</label>
                <input type="number" id="maxPrice" name="maxPrice" min="0" class="inputPrice">
              </div>
            </div>
            <div>
              <div class="filter-approve">
                <span>Clear All</span>
                <span class="apply-button">Apply</span>
              </div>
            </div>
              
          </el-dropdown-item>

        </el-dropdown-menu>
      </template>
    </el-dropdown> -->


  </section>


</template>
  
<script>
import { Search } from '@element-plus/icons-vue'
import _ from 'lodash'

export default {
  name: 'gig-filter',
  data() {
    return {
      txt: '',
      minPrice: 0,
      selectedLabels: [],
      value: [],
      sortBy: {},
      desc: -1,
    }
  },
  created() {

  },
  methods: {
    setFilterTxt() {
      console.log('this.$store.getters.labels', this.$store.getters.labels)

      this.$emit('filteredTxt', this.txt)
    },
    setFilterPrice() {
      console.log('this.minPrice', this.minPrice)
      this.$emit('filteredPrice', this.minPrice)
    },
    // setFilterLabel() {
    //   this.$emit('filteredLabel', this.selectedLabels)
    // },
    setFilterStatus() {
      this.$emit('filteredStatus', this.status)
    },
    setSort(by) {
      this.sortBy = {}
      this.desc *= -1
      this.sortBy[by] = this.desc
      const sortBy = JSON.parse(JSON.stringify(this.sortBy))
      this.$emit('sorted', sortBy)
    },
  },
  computed: {
    // labels() {
    //   // console.log('this.$store.getters.labels',this.$store.getters.labels);
    //   return this.$store.getters.labels
    // },
    search() {
      return Search
    },
  },
}
</script>
  