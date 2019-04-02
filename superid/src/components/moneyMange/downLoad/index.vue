<!--  -->
<template>
  <div>
    <mt-header title="扫描下载">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="qrcode">
      <img src="@/assets/downLoad/qrcode.png" alt>
    </div>
    <div class="foot-box btn-box">
      <span>请扫描二维码下载</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang="less"  scoped>
.qrcode {
  width: 85%;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 0.5rem;

  img {
    width: 100%;
    //  margin: 0 auto;
  }
}
</style>