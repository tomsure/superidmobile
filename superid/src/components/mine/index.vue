<!--  -->
<template>
  <div>
    <mineHeader></mineHeader>
    <div>
      <mt-cell title="钱包管理" to="/walletMange" :is-link="true">
        <span slot="icon" class="icon-5"></span>
      </mt-cell>
      <!-- <mt-cell title="账单明细" :is-link="true">
        <span slot="icon" class="icon-23"></span>
      </mt-cell> -->
      <mt-cell title="邀请好友" :is-link="true" to="/share">
        <span slot="icon" class="icon-19"></span>
      </mt-cell>
      <mt-cell title="我的分红" to='/bonus' :is-link="true">
        <span slot="icon" class="icon-25"></span>
      </mt-cell>
    </div>
    <div>
      <mt-cell title="个人设置" to="/setting" :is-link="true">
        <span slot="icon" class="icon-10"></span>
      </mt-cell>
      <mt-cell title="意见反馈" :is-link="true">
        <span slot="icon" class="icon-20"></span>
      </mt-cell>
      <mt-cell title="关于我们" :is-link="true">
        <span slot="icon" class="icon-22"></span>
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

  created() {
      if(!localStorage.getItem('user_info')){
          this.$router.push({name:'mobileLogin'})
      }
  },
  mounted() {
    
  },
  computed: {},

  methods: {}
};
</script>
<style  scoped>
[class|="icon"]::before {
  color: #8484F5;
  font-size: 0.5rem;
  position: relative;
  top: 0.1rem;
}
</style>