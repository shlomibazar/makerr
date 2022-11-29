import { createRouter, createWebHashHistory } from 'vue-router'

import home from './views/home.vue'
import chat from './views/chat.vue'
import gigApp from './views/gig-app.vue'
import reviewApp from './views/review-app.vue'
import loginSignup from './views/login-signup.vue'
import userDetails from './views/user-details.vue'
import gigDetails from './views/gig-details.vue'
import gigEdit from './views/gig-edit.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/gig',
    name: 'gig-app',
    component: gigApp
  },
  {
    path: '/gig/:gigId',
    name: 'gig-details',
    component: gigDetails
  },
  {
    path: '/gig/edit/:gigId?',
    name: 'gig-edit',
    component: gigEdit,
  },
  {
    path: '/review',
    name: 'review',
    component: reviewApp
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/login',
    name: 'loginSignup',
    component: loginSignup
  },
  {
    path: '/user/:id',
    name: 'user-details',
    component: userDetails
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

