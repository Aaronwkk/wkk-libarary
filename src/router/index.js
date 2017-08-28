import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import reg from 'components/reg'
import text from 'components/text'
import picture from 'components/picture/picture'
import star from '@/public/star/star'
import support from '@/public/support/support'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/star',
      name: 'star',
      component: star
    },
    {
      path: '/support',
      name: 'support',
      component: support
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/picture',
      name: 'picture',
      component: picture
    }
  ]
})
