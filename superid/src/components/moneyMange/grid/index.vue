<template>
  <div class="grid-box component-content">
      
      <div @click="toRegularIntervals">
          <div class="icon-box"><span class="icon-18"></span></div>
          <div>定期理财</div>
      </div>
      <div class="">
          <div class="icon-box"><span class="icon-15"></span></div>
          <div>科创金服</div>
      </div>
       <div> 
          <div class="icon-box"><span class="icon-8"></span></div>
          <div>量化产品</div>
      </div>
      <div>
          <div class="icon-box"><span class="icon-14"></span></div>
          <div>理财学堂</div>
      </div>
      <div>
          <div class="icon-box"><span class="icon-21"></span></div>
          <div>蚂蚁搬砖</div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  methods:{
      toRegularIntervals(){
    //   alert(123)
      this.$router.push({path:'/regularIntervals'})
  }
  }
 }
</script>

<style lang="" scoped>
  .grid-box{
      display: flex;
      justify-content:space-around;
      margin-top:-1.6rem;
      background: white;
      padding: 0.5rem 0;
  }
  .icon-box{
      text-align: center;
      font-size: 1rem;
      margin-bottom: 0.3198294243070362rem;
  }
</style>