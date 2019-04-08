import axios from 'axios'
import Qs from 'qs'
import {getToken} from '@/utils/auth'
// import store from '@/store'
const service=axios.create({
  baseURL:'https://www.superid.in',
  timeout:5000,
  transformRequest: function(data) {
    return Qs.stringify(data)
},
headers: {'Content-Type': 'application/x-www-form-urlencoded' },
})
export function request(url,method,params){
  if(params==null){
    params={}
  }
  let data=params
           
  let res=service({
    method:method,
    url:url,
    data:data,
    headers:{ //请求头
       "token":getToken()
    }
  })
  res.then(response=>{
    // if(){ //收到响应后的回调，在调用方法的时候科技继续通过then()执行

    // }
  })
  return res
}
export function requestPost(url,params){
  return request(url,'post',params)
}
export function requestGet(url){
  return request(url,'get')
}
export function requestDelete(url,params){
  return request(url,'delete',params)
}
export function requestPut(url,params){
  return request(url,'put',params)
}
export default service