<!--  -->
<template>
  <div class="status">
      <mt-cell title="国籍" >
         <div>{{country}}</div>
      </mt-cell>
      <mt-cell title="姓名" >{{name}}</mt-cell>
      <mt-cell title="身份证" >{{sfz_id}}</mt-cell>
       <div style="background-color:white;padding:0.2rem;">
         <p class="p1">您的身份信息已提交，请耐心等待审核</p>
       </div>
       <div class="submit-box-common">
     <mt-button type="primary" size="large" @click="toBack" >确认</mt-button>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      country:'',
      name:'',
      sfz_id:''
    };
  },
  created(){
   this.country=this.$route.query.country
   this.name=this.$route.query.name
   this.sfz_id=this.$route.query.sfz_id

  },
  components: {},

  computed: {},

  methods: {
    toBack(){
      this.$router.push({path:'/safe'})
    }
  }
}

</script>
<style  lang="less" scoped>
 
</style>