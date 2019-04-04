<template>
  <div class="content-box1">
    <mt-header title>
      <router-link to="/" slot="left">
        <span class="icon--11"></span>
      </router-link>
      <span class="icon-9" slot="right"></span>
    </mt-header>
    <div class>
      <div class="box-c">
        <div class="top-box">
          <div>
            <div class="top-text">
              <span class="title-text">我的资产($)</span>
            </div>
            <div class="bottom-text">{{assets}}</div>
          </div>
        </div>
        <div class="bottom-box">
          <div class="bottom-c">
            <button class="action-btn" @click="toTransfer">
              <span class="icon-24"></span> 转账
            </button>
          </div>
          <div class="bottom-c">
            <button class="action-btn" @click="toReceipt">
              <span class="icon-11"></span>收款
            </button>
          </div>
        </div>
          <div class="grid header-grid list-box box-common">
              收益
          </div>
        <!-- <div class="grid header-grid list-box box-common">
          <div>
            <div class="c">
              <span class="icon-21"></span>
            </div>
            <div class="b ft-12">收益展示</div>
          </div>
          <div>
            <div class="c">
              <span class="icon-13"></span>
            </div>
            <div class="b ft-12">场外OTC</div>
          </div>
          <div>
            <div class="c">
              <span class="icon-uniE912"></span>
            </div>
            <div class="b ft-12">主动基金</div>
          </div>
          <div>
            <div class="c">
              <span class="icon-17"></span>
            </div>
            <div class="b ft-12">更多</div>
          </div>
        </div> -->
      </div>

      <div>
        <div class="item-header">
          <div class="t-1 ft-16">资产</div>
          <div>
            <span class="add">+</span>
          </div>
        </div>
        <coinItem v-for="(item,index) in dataList" :key="item.id" :title="item" :list="item.child">></coinItem>
      </div>
    </div>
  </div>
</template>

<script>
import coinItem from "@/components/mine/asset/coin/coinItem.vue";
export default {
  name: "",
  components: {
    coinItem
  },
  data() {
    return {
      assets: "",
      dataList: [
        {
          area: "深圳",
          num: "10",
          sum: "30",
          child: [
            { area: "罗湖", num: "20", sum: "20" },
            { area: "福田", num: "20", sum: "20" },
            { area: "南山", num: "20", sum: "20" }
          ]
        },
        {
          area: "广州",
          num: "10",
          sum: "30",
          child: [
            { area: "白云", num: "20", sum: "20" },
            { area: "福田", num: "20", sum: "20" },
            { area: "南山", num: "20", sum: "20" }
          ]
        }
      ]
    };
  },
  created() {},
  methods: {
    toTransfer() {
      this.$router.push({ path: "/transfer" });
    },
    toReceipt() {
      this.$router.push({ path: "/receipt" });
    }
  }
};
</script>

<style lang="less" scoped>
.top-text {
  margin-bottom: 0.1rem;
}
.box-c {
  background: #26a2ff;
  /* border-radius: 0.1599147121535181rem; */
  color: white;
  /* width: 85%; */
  margin: 0 auto;
  padding: 0.3464818763326226rem 0;
  //  padding-bottom: 2rem;
  // margin-bottom: 2rem;
  height: 5rem;
  margin-bottom: 2rem;
}
.top-box {
  text-align: center;
}
.bottom-box {
  display: flex;
  /* justify-content: space-between; */
  margin: 1rem 0;
}
.bottom-c {
  flex: 1;
  text-align: center;
}
.title-text {
  font-size: 0.5063965884861407rem;
}

.bottom-text {
  font-size: 0.3464818763326226rem;
}
.icon-1::before {
  color: white;
  font-size: 0.5rem;
  position: relative;
  left: 2.5rem;
}
.content-box {
  color: white;
}
.icon--11::before,
.icon-9::before {
  color: white;
}
.icon--11::before {
  font-size: 0.5rem;
}
.icon-9::before {
  font-size: 0.8rem;
}
.action-btn {
  border: 0;
  background: none;
  color: white;
  border: 1px solid white;
  padding: 0.2rem 0.2rem;
  width: 2.5rem;
  border-radius: 25px;
  .icon-24::before,
  .icon-11::before {
    color: white;
    margin-right: 0.1rem;
    font-size: 0.5rem;
    position: relative;
    top: 0.05rem;
  }
}
.header-grid {
  padding: 0.9rem 0.2rem;
  border-radius: 0.2rem;
  color: black;
  position: relative;
  // top: 2rem;
}
span[class^="icon"] {
  font-size: 0.7rem;
}
.c {
  text-align: center;
}
.b {
  margin-top: 0.3rem;
}
.item-header {
  display: flex;
  justify-content: space-between;
  padding: 0 0.35rem;
}
.t-1 {
  //  font-size: 0.6rem;
}
.add {
  color: #26a2ff;
  font-size: 0.7rem;
}
</style>