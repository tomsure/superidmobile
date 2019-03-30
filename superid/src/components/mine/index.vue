<!--  -->
<template>
  <div>
     <mineHeader></mineHeader>
    <div>
      <mt-cell title="钱包管理" :is-link="true">
        <img slot="icon" src="../../assets/logo.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="账单明细" :is-link="true">
        <img slot="icon" src="../../assets/logo.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="邀请好友" :is-link="true" to='/share' >
        <img slot="icon" src="../../assets/logo.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="我的分红" :is-link="true">
        <img slot="icon" src="../../assets/logo.png" width="24" height="24">
      </mt-cell>
    </div>
    <div>
      <mt-cell title="个人设置" :is-link="true">
        <img slot="icon" src="../../assets/logo.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="意见反馈" :is-link="true">
        <img slot="icon" src="../../assets/logo.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="关于我们" :is-link="true">
        <img slot="icon" src="../../assets/logo.png" width="24" height="24">
      </mt-cell>
    </div>
  </div>
</template>

<script>
import mineHeader from "@/components/mine/mineHeader/index.vue";
export default {
  components: { mineHeader },
  data() {
    return {};
  },

  
  created () {
         
  },
  mounted () {
    // this.$router.push({name:'Login'})
  },
  computed: {},

  methods: {}
};
</script>
<style  scoped>
</style>