<template>
 
  <div >
        <mt-header title="邀请好友">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  
</mt-header> 
       <div class="box">
           <div class="box-1 ">
         <div class="box-1-1">
           blockBank
         </div>
         <div class="box-1-2">
           科技、创业、金融、服务
         </div>
      </div>
      <div class="box-common">
          <div class="share-title">
             我的专属邀请码
          </div>
          <div class="share-t share-num">
           {{uid}}
          </div>
          <div class="share-t">
              <button class="share-btn">立即邀请</button>
          </div>
      </div>
      <div class="box-common">
           <h4>活动规则：</h4>
          <p>
              1、对于通过推荐链接邀请成功注册的用户，您是他们的一级推荐人；
          </p>
          <p>
              2、对于直接推荐的用户通过推荐链接邀请成功注册的用户，您是他们的二级推荐人；
          </p>
          <p>
              3、好友接受邀请后，购买相应的产品并产生收益，会根据收益相应的比例进行分红；
          </p>
          <p>
              4、分红奖励在好友所购产品清算完当日进行统计，次日到账；
          </p>
          <p>
              5、系统将根据当日的行情兑换LT，并发放至用户账号，可随时提现；
          </p>
          <p>
              6、本活动长期进行，特殊活动请留意消息推送；
          </p>
          <p>
              7、本活动最终解释权归Blockbank所有。
          </p>
      </div>
       </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
     uid:''
    }
      },
  created(){
       this.uid=JSON.parse(localStorage.getItem('user_info')).uid
    }
 }
</script>

<style lang="less" scoped>
     .box-1{
      text-align: center;
      background: #2B81EE;
      color: white;
      margin-top: 1rem;
     }
      .box-1-1{
          font-size:0.7462686567164179rem;
      }
       .box-1-2{
          font-size:;
       }
     .share-t{
         text-align: center;
     }
   .box-common{
       p{
        text-indent:0.5rem;
        line-height: 1.7;

       }
      
       padding: 0.2rem;
       border-radius: 6px;
       background: white;
       width: 88%;
        margin: 0.5rem auto;
   }
   .box{
       background: #2B81EE;
       height: 100%;
       position: fixed;
       top: 40px;
       bottom: 0;
      
   }
   #app{
       height: 100%;
   }
   .share-btn{
     border: 0;
     background: #2B81EE;
     border-radius: 5px;
     padding: 0.2rem 0.4rem;
     color: white;
     width: 3rem;
   }
    .share-title{
         font-size:0.4464818763326226rem;
         text-align: center;
         color: #888888;
        }
   .share-num{
       margin:0.4rem;
       font-size:0.7462686567164179rem;
   }
</style>