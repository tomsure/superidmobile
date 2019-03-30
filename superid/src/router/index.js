import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Asset from '@/components/mine/asset/index.vue'
import Login from '@/components/mine/login/index.vue'
import register from '@/components/mine/register/index.vue'
import Mine from '@/components/mine/index.vue'
import forgetPassword from '@/components/mine/setting/forgetPassword.vue'
import resetPassword from '@/components/mine/setting/resetPassword.vue'
import verificationCode from '@/components/mine/setting/verificationCode.vue'
import receipt from '@/components/wallet/receipt/index.vue'
import selectCoin from '@/components/wallet/transfer/selectCoin/index.vue'
import transfer from '@/components/wallet/transfer/index.vue'
import assetTypeList from '@/components/wallet/receipt/assetTypeList.vue'
import share from '@/components/mine/share.vue'



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
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/verificationCode',  //获取验证码
      name: 'verificationCode',
      component: verificationCode
    },
    {
      path: '/resetPassword', 
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/asset',
      name: 'Asset',
      component: Asset
    },
    { //收款
      path: '/receipt',
      name: 'receipt',
      component: receipt
    },
    { //转账
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    { //代币选择
      path: '/selectCoin',
      name: 'selectCoin',
      component: selectCoin
    },
    { //资产类型选择
      path: '/assetTypeList',
      name: 'assetTypeList',
      component: assetTypeList
    },
    { //邀请好友
      path: '/share',
      name: 'share',
      component: share
    }
  ]
})
