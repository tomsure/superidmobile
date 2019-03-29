<!--  -->
<template>
  <div  class="content">
    
     <div style="display:flex;text-align:center;">
      <div  class="topc top-left">
          <div class=""> 
            <div class="logo">
           <img src="../../../assets/1.png"   alt="">
         </div>
        <div>name</div>
          </div>
      </div>
      <div  class="topc top-right">
        <div style="display:flex;">
          <div style="flex:1;">
          <div>220022</div>
          <div style="font-sise:0.4rem!important;">资产</div>
        </div>
         <span style="flex:1;margin-left:auto;position:relative;left:1rem;top:10px;font-size:20px;" @click="toAsset">></span>
        </div>
        </div>

    </div>
      
   
    <div class="header-bottom" style="">
      <div style="flex:1;text-align:center;border-right:1px solid gray;">
        <div class="noPadding">
          可用余额($)
        </div>
        <div class="noPadding">
          2166.56
        </div>
      </div>
      <div style="flex:1;text-align:center;">
        <div class="noPadding">
         昨日收益($)
        </div>
        <div class="noPadding">
            +2132
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    toAsset(){
      
      this.$router.push({name: 'Asset'})
    }
  }
}

</script>
<style  scoped>
  .topc{
    flex:1;
    text-align:center;
    /* border: 1px solid red; */
     padding: 25px;
     display: flex;
			 align-items: center;
  }

  .top-right,.top-left{
     display: flex;
     justify-content: center;

  }
  
  .logo{
    border-radius: 50px;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    /* border: 1px solid red; */
    overflow: hidden;
  }
   .logo img{
     width: 100%;
     height: 100%;
     
   }
  .content{
    font-size: 0.5rem;


  }
  .header-bottom{
    display:flex;
    text-align:center;
    border-top:1px solid gray;
   
    
  }
   .header-bottom div{
      /* padding:0.5rem auto;
        */
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
  *{
    background-color:#1E3C72;
    color:white;
  }
  .noPadding{
    padding: 0!important;
  }
</style>