<!-- 
 -->
<template>
  <div class="auth">
     <mt-header title="身份认证">
  <router-link to="/safe" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
 
</mt-header>
    <mt-cell title="国家" @click.native="showPop" is-link>
      <span>{{country}}</span>
    </mt-cell>
    <mt-field label="姓名" placeholder="请输入姓名" type v-model="name"></mt-field>
    <mt-field label="身份证" placeholder="请输入身份证号码" type v-model="sfz_id"></mt-field>
    <div class="submit-box-common">
      <mt-button type="primary" size="large" @click="toAuth">下一步</mt-button>
    </div>
    <mt-popup v-model="popupVisible" position="top">
      <div class="submit-box-common">
        <mt-button type="primary" size="large" @click="close">确定</mt-button>
      </div>
      <mt-picker value-key="cn_name" :slots="slots" @change="onDataChange"></mt-picker>
    </mt-popup>
    <!-- demo -->
  </div>
</template>

<script>
import { requestPost, requestGet } from "@/api/api.js";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      name: "",
      sfz_id: "",
      id: "137",
      popupVisible: false,
      country: "中国",
      areaCode: "",
      sheetVisible: "",
      actions: [],
      setCountry: "",
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center",
          defaultIndex: 1
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    onDataChange(picker, values) {
      if (values[0]) {
        this.country = values[0].cn_name;
        console.log(this.country);
      }
    },

    showPop() {
      this.popupVisible = true;
      this.getcountey();
    },
    close() {
      this.popupVisible = false;
    },
    toAuth() {
      requestPost("/api/v1/kyc", {
        name:this.name,
        sfz_id: this.sfz_id,
        country: this.country
      }).then(res => {
          if(res.data.code=='1'){
            Toast({
            message: res.data.msg,
            position: 'top',
            duration: 2000
          });
          }else if(res.data.code=='0'){
            this.$router.push({
                path:'/authStatus',
                query: {
                  name: this.name,
                  sfz_id: this.sfz_id,
                  country: this.country
                     },
                
              })
          }
      });
    },
    getcountey() {
      requestGet("/api/v1/mobile_prefix").then(res => {
        if (res.data.status == "success") {
          let arr = [];
        res.data.data.forEach(el => {
            arr.push({ cn_name: el.cn_name, id: el.id });
          });
          this.slots[0].values = arr;
        }
      });
    }
  }
};
</script>
<style lang='less'  scoped>
.mint-popup.mint-popup-top {
  width: 100%;
}
</style>