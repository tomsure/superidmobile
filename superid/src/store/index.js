import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import getters from '@/store/getters'
import user from '@/store/modules/user'

const store=new Vuex.Store({
  modules:{
    user
  },
  getters
  
                   })
export default store  //导出模块
