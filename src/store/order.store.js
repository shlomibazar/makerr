import { orderService } from '../services/order.service.js'
import { socketService } from '../services/socket.service.js'
// import { socketService } from '../../services/socket.service.js'

export default {
  state: {
    orders: [],
  },
  getters: {
    orders({ orders }) {
      console.log('getter order', orders)
      return orders
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders
    },
    addOrder(state, { newOrder }) {
      console.log('newordertttttt', newOrder)
      const idx = state.orders.findIndex((order) => order._id === newOrder._id)
      if (idx !== -1) {
        state.orders.splice(idx, 1, newOrder)
        console.log('state.orders', state.orders)
      } else state.orders.push(newOrder)
      // let isNewItem = true;
      // let map = state.orders.map(item=> {
      //   if(newOrder._id===item._id) {
      //     isNewItem = false;
      //     return newOrder
      //   }
      //   return item;
      // });
      // state.orders=map;
      // if (isNewItem) state.orders.push(newOrder);
    },
  },
  actions: {
    //    async loadOrders({ commit, state }) {
    //         const orders = await orderService.query()

    //       },getUserOrdersById
    loadOrders({ commit, state }) {
      orderService.query().then((orders) => {
        console.log('orders in store', orders);
        commit({ type: 'setOrders', orders })
      })
    },
    userOrders({ commit, state }, { userId }) {
      orderService.getUserOrdersById(userId).then((orders) => {
        console.log(`orders by user id in store ${userId}`, orders);
        commit({ type: 'setOrders', orders })
      })
    },
    async addOrder({ commit }, { newOrder }) {
      console.log('eeeeeeeeee', newOrder)
      // commit({ type: 'addOrder', newOrder: newOrder })
      await orderService.save(newOrder).then((savedOrder) => {
        console.log('savedOrder', savedOrder)
        commit({ type: 'addOrder', newOrder: savedOrder })
        // socketService.emit('editOrder', newOrder)
        socketService.emit('editOrder',newOrder)
        return savedOrder
      })
    },
  },
}