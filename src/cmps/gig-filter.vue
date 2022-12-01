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
      <a class="sort-button" @click="setSort('name')">Name</a>
      <a class="sort-button" @click="setSort('price')">Price</a>
      <a class="sort-button" @click="setSort('createdAt')">Date</a>
      <!-- this way they got another class ? undefined  -->
      <!-- <a class="btn-dark-small m-1" @click="setSort('createdAt')">Date</a> -->
      <span>{{ desc === -1 ? '↓' : '↑' }}</span>
    </div>
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
      console.log('this.minPrice',this.minPrice)
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
  