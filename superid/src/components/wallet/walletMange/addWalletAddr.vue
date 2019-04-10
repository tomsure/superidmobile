<!--  -->
<template>
  <div>
        <mt-cell title="币种" :value="coinType" @click.native="showCoin" islink>

        </mt-cell>
        <mt-field label="钱包地址" placeholder="请输入钱包地址" v-model="addr"></mt-field>
        <mt-field label="备注" placeholder="请输入用户名" v-model="remark"></mt-field>
        <mt-field label="短信验证码" placeholder="请输入短信验证码" v-model="vcode">
          <mt-button class="register-msg-btn code-btn" v-show="show" @click="getCode()">获取</mt-button>
      <mt-button class="register-msg-btn code-btn"  v-show="show==false">{{count}} s</mt-button>
        </mt-field>
        <div class="submit-box-common two-btn-box">
     <mt-button type="primary" @click="confirmSave()" >保存</mt-button>
     <mt-button type="warning"  >取消</mt-button>

     </div>
       <mt-popup
  v-model="popupVisible"
  popup-transition="popup-fade">
    <div class="wallet-select">
         <mt-cell :title="item.name" v-for="(item,index) in coinList" :key='item.id' @click.native="selectCoin(item)" ></mt-cell>
         
        
    </div>
</mt-popup>
  </div>
</template>

<script>
import  {requestPost,requestGet} from '@/api/api.js'
import {Toast} from 'mint-ui'
import {getCode} from '@/api/common.js'
export default {
  data () {
    return {
      id:'',
      addr:'',
      remark:'',
      coinType:'',
      vcode:'',
      default:"0",
      show:true,
        popupVisible:false,
      coinList:[{name:'',id:''}],
      timer:null,
      count:''
    };
  },

  components: {},

  computed: {},

 created(){
    this.getCoin()
  },
  
  methods: {
    confirmSave(){
      this.addWallet()
    },
    addWallet() {
      requestPost('/api/v1/user_wallet',{
         wallet_id: this.id,
            addr: this.addr,
            code: this.vcode,
            remark: this.remark,
            default: this.default,
      }).then(res=>{
           if(res.data.code==0){
            Toast({
            message: "添加成功",
            position: "top",
            duration: 2000
                });
             this.$router.go(-1)
           } else if(res.data.code==1){
                   Toast({
                      message: res.data.msg,
                      position: "top",
                      duration: 2000
                    });
           }
          
      })
    },

    showCoin(){
     this.popupVisible=true
    },
    selectCoin(coin){
       this.coinType=coin.name
       this.id=coin.id
       this.popupVisible=false
    },
    getCoin(){
     requestGet('/api/v1/wallet/withdraw_wallet').then(res=>{
          if(res.data.code==0){
            this.coinList=res.data.data
             
          }
      })
    },
    showWalletLlist(){
      this.popupVisible=true
     
   
    },
     getCode() { 
       alert(123)
      this.show = false;
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.sendCode()
        this.show = false;

        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    sendCode() {
      requestPost("/api/v1/user/send_code", {
        value:JSON.parse(localStorage.getItem('user_info')).mobile,
        type: "1",
        mobile_prefix: "86"
      }).then(res => {
        

        if ((res.data.status == "fail")) {
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        } else if ((res.data.status == "success")) {
          Toast({
            message: "发送成功",
            position: "top",
            duration: 2000
          });
        }
      });
    },
  }
}

</script>
<style lang='less' scoped>
  .two-btn-box{
     display: flex;
     justify-content: splace-around;
     .mint-button{
       flex: 1;
       width: 49%;
     }
  }
</style>