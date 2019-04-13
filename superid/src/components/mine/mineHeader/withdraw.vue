<!--  -->
<template>
  <div class="widthdrow-box">
    <mt-header title="提现">
      <router-link :to="{path:'/',query:{selected:'mine'}}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="info-box">
      <mt-cell title="可提现金额" :value="available"></mt-cell>
      <mt-field label="提现金额" placeholder="请输入提现金额" type="number" v-model="withdraw_money">
        <mt-button type="primary" size="small" @click="all">全部</mt-button>
      </mt-field>
      <!-- <div class="tips">提现金额不得低于可用余额</div> -->

      <!-- <mt-field label="谷歌验证码" placeholder="请输入谷歌验证码" type="number" v-model="code">
        <button>修改</button>
      </mt-field>-->
    </div>
    <div>
      <div class="t-center addr-box">
        <div id="qrcode" class="qrcode-box"></div>
      </div>
      <div class="t-center">收款钱包地址</div>
    </div>
    <mt-cell title="钱包地址" @click.native="getWalletList" is-link :value="wallets.addr"></mt-cell>
    <div class="submit-box-common">
      <mt-button type="primary" size="large" @click="validateWithDraw">提现</mt-button>
    </div>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="bottom"
      class="widthdorw-wallet-box"
    >
      <mt-cell
        :title="item.name"
        icon=" icon-eth-01"
        v-for="(item,index) in walletList"
        :key="item.index"
        :value="item.addr"
        @click.native="setDefault(item.addr,item.id,{default:'1'})"
      ></mt-cell>
    </mt-popup>
  </div>
</template>
<script>
import { tips, smgs } from "@/api/common.js";
import { MessageBox } from "mint-ui";
import { requestPost, requestGet, requestPut } from "@/api/api.js";
import QRCode from "qrcodejs2";
import "@/css/widthdrow.less";
import { num } from "@/utils/validate/rules1.js";
export default {
  data() {
    return {
      popupVisible: false,
      number: "",
      available: "",
      withdraw_money: "",
      code: "",
      wallets: {
        name: "",
        addr: ""
      },
      walletList: []
    };
  },
  created() {
    this.getDefaultWallet();
    this.getAvailable();
  },
  components: {},
  computed: {},
  methods: {
    validateWithDraw() {
      if (this.available == 0) {
        tips("提现金额为0，不可提现！");
      } else if (this.withdraw_money == "" || !num(this.withdraw_money)) {
        tips("请输入正确的提现金额！");
      } else if (this.withdraw_money > this.available) {
        tips("提现金额不得大于可提现金额");
      } else {
        this.withdraw();
      }
    },
    withdraw() {
      let _this = this;
      requestPost("/api/v1/withdraw", {
        wallet_name: this.wallets.name,
        wallet_addr: this.wallets.addr,
        money: this.withdraw_money,
        code: this.code
      }).then(res => {
        if (res.data.code == "0") {
          tips("提现成功");
          this.$router.push({path:'/',query:{"selected":'mine'}})
        } else if (res.data.code == "1") {
          tips(res.data.msg);
        }
      });
    },
    getWalletList() {
      requestGet("/api/v1/user_wallet").then(res => {
        if (res.data.code == 0) {
          this.walletList = res.data.data;
          this.popupVisible = true;
        }
      });
    },
    getDefaultWallet() {
      requestGet("/api/v1/wallet/get_default_wallet").then(res => {
        if (res.data.status == "success") {
          this.wallets = res.data.data;
          this.$nextTick(function() {
            this.qrcode(this.wallets.addr);
                      });
        } else {
          MessageBox.alert('还没有设置钱包信息！请去设置钱包').then(res=>{
             this.$router.push({path:'/walletMange'})
          });
        }
      });
    },
    qrcode(wallet_addr) {
      let qrcode = new QRCode("qrcode", { text: wallet_addr }); // 二维码内容
    },
    setDefault(addr, id, setData) {
      requestPut("/api/v1/user_wallet/" + id, setData).then(res => {
        if (res.data.code == 0) {
          this.wallets.addr = addr;
          this.$nextTick(function() {
            document.getElementById("qrcode").innerHTML = "";
            this.qrcode(this.wallets.addr);
          });
          this.popupVisible = false;
        } else {
          tips(res.data.msg);
        }
      });
    },
    getAvailable() {
      requestGet("/api/v1/asset").then(res => {
        if (res.data.code == 0) {
          this.available = res.data.data.available;
        }
      });
    },
    tips(_this) {
      let msg = `
      <div  class="">
        <span>提现金额:</span> <span></span>
         </div>
         <div>
           <span>提现账户:</span> <span>4242</span>
         </div>
         <div>
           <span>提现状态:</span> <span>人工正在审核，请稍后查询</span>
         </div>
     </div>
    `;
      MessageBox({
        title: "提示",
        message: msg
      }).then(function() {
        console.log(123);
        _this.$router.push({ path: "/mine" });
      });
    },
    all() {
      this.withdraw_money=this.available
    }
  }
};
</script>
<style lang='less'  scoped>
</style>