<!--  -->
<template>
  <div>
    
<mt-field label="phone" placeholder="Input tel" type="tel" v-model="phone"></mt-field>
<mt-field label="密码" placeholder="Input password" type="password" v-modal="password"></mt-field>


<mt-field label="验证码" placeholder="Input number" type="number" v-model="number"></mt-field>

  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      password:'',
     number:''
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped>
</style>