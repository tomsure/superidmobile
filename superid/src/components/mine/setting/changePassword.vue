<!--  -->
<template>
  <div>
      <h3>忘记密码</h3>
      <mt-field label="phone" placeholder="Input tel" type="tel" v-model="phone"></mt-field>
      <mt-button type="primary" size="large">获取验证码</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone:''
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped>
</style>