import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import inherit from 'components/inherit'
import cart from 'components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/inherit',
      name: 'inherit',
      component: inherit
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})

// luyou