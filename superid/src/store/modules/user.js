import {getToken,setToken,removeToken} from '@/utils/auth.js'
const user={
    state:{ //state用于设置存储的数据
      // token:getToken('token');
      token:null
                  },
    getters:{    //监听数据改变
      listenToken:function(state){
         
        console.log(state.token)
      }
    },
  actions:{  //定义间接方法
      changeData:function(context){
           context.commit('jian')
      }
    },
    
    mutations:{   // mutations对象用于配置数据修改时候使用的方法，每个方法使用逗号隔开，方法的第一个参数就是state对象
      jia(state){
        state.count++
      },
      jian(state){
        state.count--
      },
      chuanzhi(state,data){   //给mutaions方法传值，这里的data是组件Mutation点击后传进来的值
           state.token=data
      }
    }
  }

  export default user