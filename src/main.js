import { createApp } from 'vue'
import { router } from './router.js'
import { store } from './store/store.js'
import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { clickOutsideDirective } from './directives/index.js'
import 'vue-skeletor/dist/vue-skeletor.css';
import { Skeletor } from 'vue-skeletor';

// import Vue from 'vue';
// // Import the component
// import VueSkeletonLoader from 'skeleton-loader-vue';

// Register the component globally
// Vue.component('vue-skeleton-loader', VueSkeletonLoader);
// app.component('vue-skeleton-loader', VueSkeletonLoader);

const app = createApp(rootCmp)
app.component(Skeletor.name, Skeletor);

app.directive("click-outside", clickOutsideDirective)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
