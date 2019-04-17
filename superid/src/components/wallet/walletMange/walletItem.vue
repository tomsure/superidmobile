<!--  -->
<template>
  <div>
    <div>
      <div class="wallet-box">
        <mt-cell title="币种:" :value="wallet.name"></mt-cell>
        <mt-cell title="币种:" :value="wallet.addr"></mt-cell>
        <mt-cell title="备注:" :value="wallet.reamrk"></mt-cell>
        <div class="flex-box">
          <div @click="changeStatus({status:1},wallet.id)">设为默认</div>
          <!-- <div @click="edit()">编辑</div> -->
          <div @click="changeStatus({status: 2},wallet.id)">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestPut, requestDelete } from "@/api/api.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      wallet: {
        addr: "",
        cate_id: "",
        default: "",
        id: "",
        name: "",
        remark: ""
      }
    };
  },
  props: ["walletData"],
  components: {},
  created() {
    this.wallet = this.walletData;
  },

  computed: {},

  methods: {
    edit() {
      this.$router.push({path:'/addWalletAddr'})
    },
    changeStatus(action, data) {
      if (action.status == 1) {
        this.updateWallet({ default: "1" });
      } else if (action.status == 2) {
        this.deleteWallet();
      }
    },
    deleteWallet() {
      requestDelete("/api/v1/user_wallet/" + this.wallet.id).then(res => {
        if (res.data.code == 0) {
          Toast({
            message: "删除成功",
            position: "top",
            duration: 2000
          });
          this.$emit("deleteWallte");
        } else {
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        }
      });
    },
    updateWallet(updData) {  //
      requestPut("/api/v1/user_wallet/" + this.wallet.id, updData).then(res => {
        if (res.data.code == 0) {
          Toast({
            message: "设置成功",
            position: "top",
            duration: 2000
          });
          this.$router.push({ path: "/", query: { selected: "mine" } });
        } else {
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>
<style  scoped>
.list-box-b {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 0 0.2rem;
  margin-top: 0.7rem;
  border-radius: 6px;
}
.wallet-box {
  background: white;
  border-radius: 6px;
  width: 95%;
  margin: 0.2rem auto;
}
.addr {
  text-align: center;
  color: #5677fd;
}
.icon-ETH::before {
  font-size: 0.7995735607675906rem;
  position: relative;
  bottom: 0.2rem;
  color: black;
}
.mint-button--default {
  box-shadow: none;
}
.mint-cell {
  border-radius: 6px;
}
.flex-box {
  display: flex;
  padding: 0.2rem;
  font-size: 0.4rem;
  color: #26a2ff;
}
</style>