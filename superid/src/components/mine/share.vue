<template>
  <div>
    
    <div class="header-box">
       <mt-button icon="back" @click="back"></mt-button>
         <div class="header-text">邀请好友</div>
    </div>
    <div class="box">
      <div class="box-1">
        <div class="box-1-1">blockBank</div>
        <div class="box-1-2">科技、创业、金融、服务</div>
      </div>
      <div class="box-common">
        <div class="share-title">我的专属邀请码</div>
        
        <div class="share-t share-num" id="uidText">{{uid}}</div>
        <div class="share-t">
          <button
            class="share-btn"
            @click="showShareCode"
            v-clipboard:copy="copyText"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            id="shareCodeBtn"
          >点击复制</button>
        </div>
      </div>
      <div class="box-common">
        <div class="share-title">邀请链接(仅限电脑端访问)</div>
        <div class="share-t share-num-1 ft-14" id="shareLinkText">{{share_link}}</div>
        <div class="share-t">
          <button
            class="share-btn"
            @click="showShareLink"
            v-clipboard:copy="copyText"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >点击复制</button>
        </div>
      </div>
      <div class="box-common qrcode">
         <!-- <div class="share-title">下载二维码</div> -->
          <div class="img-box">
            <img src="@/assets/downLoad/qrcode.png" alt="">
          </div>
          <div>
            请扫描二维码下载
          </div>
      </div>
      <!-- /api/v1/invite/get_invite_bonus_list -->
      <div class="box-common">
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th >邀请人数</th>
            <th >购买产品人数</th>
           

          </tr>
        </thead>
        <tbody>
          <tr >
            <td>{{reg_num}}</td>
            <td>{{buy_num}}</td>
             
          </tr>
            
        </tbody>
      </x-table>

         </div>
       <div class="box-common ">
           
  <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th >被邀请人账号</th>
            <th >预计分红</th>
            <th >预计分红时间</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for='(item,index) in bonus' :key='item.index'>
            <td>{{item.username}}</td>
            <td>{{item.bonus}}</td>
            <td>{{item.bonus_at}}</td>
          </tr>
            
        </tbody>
      </x-table>

         </div>
      <div class="box-common">
        <h4>活动规则：</h4>
        <p>1、对于通过推荐链接邀请成功注册的用户，您是他们的一级推荐人；</p>
        <p>2、对于直接推荐的用户通过推荐链接邀请成功注册的用户，您是他们的二级推荐人；</p>
        <p>3、好友接受邀请后，购买相应的产品并产生收益，会根据收益相应的比例进行分红；</p>
        <p>4、分红奖励在好友所购产品清算完当日进行统计，次日到账；</p>
        <p>5、产品收益发送至用户账户，并可提现；</p>
        <p>6、本活动长期进行，特殊活动请留意消息推送；</p>
        <p>7、本活动最终解释权归Blockbank所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Clipboard } from "clipboard";
import { XTable } from 'vux'
import {requestPost,requestGet} from '@/api/api.js'
export default {
  name: "",
  components:{
   XTable
  },
  data() {
    return {
      uid: "",
      share_link: "",
      copyText:'',
      msg:'',
     bonus:[],
     reg_num:'',
     buy_num:''


    };
  },
  created() {
    if (localStorage.getItem("user_info")) {
      this.uid = JSON.parse(localStorage.getItem("user_info")).uid;
      this.share_link = "http://www.superid.in/#/register?id=" + this.uid;
      this.getProfit()
    }
  },
  methods: {
    getProfit(){
      requestGet('/api/v1/invite/get_invite_bonus_list').then(res=>{
         if(res.data.code==0){
            this.bonus=res.data.data.bonus
            this.reg_num=res.data.data.reg_num
            this.buy_num=res.data.data.buy_num
            //  console.log(res.data.bonus)
         }
      })
    },
    showShareCode() {
      this.copyText=this.uid
      this.msg="邀请码已复制"
    },
    showShareLink() {
     this.copyText=this.share_link
      this.msg="邀链接已复制"
    },
     onCopy(e){

     Toast({
          message:this.msg,
          position: "top",
          duration: 2000
        });
    },
    // 复制失败
    onError(e){
      
      Toast({
          message: "请重新选择复制",
          position: "top",
          duration: 2000
        });
    },
   back(){
     this.$router.push({path:'/',query:{"selected":'mine'}})
     
   } 
  }
};
</script>

<style lang="less" scoped>
.box-1 {
  text-align: center;
  background: #2b81ee;
  color: white;
  // margin-top: 1rem;
  padding-top: 1rem;
}
.box-1-1 {
  font-size: 0.7462686567164179rem;
}
.box-1-2 {
  // font-size:;
}
.share-t {
  text-align: center;
}
.box-common {
  p {
    text-indent: 0.5rem;
    line-height: 1.7;
    text-align: center;
  }

  padding: 0.2rem;
  border-radius: 6px;
  background: white;
  width: 88%;
  margin: 0.5rem auto;
}
.box {
  background: #2b81ee;
  height: 100%;
  // position: fixed;
  top: 40px;
  // bottom: 0;
}
#app {
  height: 100%;
}
.share-btn {
  border: 0;
  background: #2b81ee;
  border-radius: 5px;
  padding: 0.2rem 0.4rem;
  color: white;
  width: 3rem;
}
.share-title {
  font-size: 0.4464818763326226rem;
  text-align: center;
  color: #888888;
}
.share-num {
  margin: 0.4rem;
  font-size: 0.7462686567164179rem;
}
.share-num-1 {
  margin: 0.4rem;
}
 .qrcode{
    text-align: center;

      }
 .img-box{
   width: 3rem;
    height: 3rem;
    margin: 0 auto;
     img{
      width: 100;
      height: 100%;
      
      
    }
 }
  .header-box{
    background: #2b81ee;
    .mint-button--default,.mint-button::after{
      background: #2b81ee;
      color: white;
      -webkit-box-shadow:none;
    }
    .header-text{
      display: inline-block;
     color: white;       
     margin-left: 33% ;
     text-align: center;
    }
  }
   
</style>