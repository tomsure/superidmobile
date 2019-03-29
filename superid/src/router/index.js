import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Asset from '@/components/mine/asset/index.vue'
import Login from '@/components/mine/login/index.vue'
import register from '@/components/mine/register/index.vue'
import Mine from '@/components/mine/index.vue'
import changePassword from '@/components/mine/setting/changePassword.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    },
    {
      path: '/asset',
      name: 'Asset',
      component: Asset
    }
  ]
})
