<!--  -->
<template>
  <div class="padding-bottom">
      <div>
           <mt-header title="发现">
          </mt-header>
      </div>
      <div class="box-common img-box">
        <div class="modal">
          <!-- <span>敬请期待...</span> -->
          <div class="cname-en">S-Root</div>
          <div class="cname-cn">商品溯源</div>
        </div>
        <img src="@/assets/find/find/5.png" alt="">
        
        </div>
      <div class="box-common img-box">
         <div class="modal">
          <!-- <span>敬请期待...</span> -->
          <div class="cname-en">S-Market</div>
          <div class="cname-cn">电商</div>
        </div>
        <img src="@/assets/find/find/1.png" alt="">
        
        </div>
      <div class="box-common img-box">
        <div class="modal">
          <!-- <span>敬请期待...</span> -->
          <div class="cname-en">S-Game</div>
          <div class="cname-cn">游戏</div>
        </div>
        <img src="@/assets/find/find/2.png" alt="">
         
        </div>
      <div class="box-common img-box">
         <div class="modal">
          <!-- <span>敬请期待...</span> -->
          <div class="cname-en">S-Token</div>
          <div class="cname-cn">ST服务</div>
        </div>
        <img src="@/assets/find/find/3.png" alt="">
        
        </div>
      <div class="box-common img-box">
         <div class="modal">
          <!-- <span>敬请期待...</span> -->
          <div class="cname-en">S-CBEx</div>
          <div class="cname-cn">OTC交易所</div>
        </div>
        <img src="@/assets/find/find/4.png" alt="">
        
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

  methods: {}
}

</script>
<style lang="less"  scoped>
 .box-common{
     border-radius: 0.2rem;
     width: 90%;
     height: 4rem;
     overflow: hidden;
     
   img{
    width: 100%;
    height: 100%;
   }
 }
 .modal{
     position: absolute;
     width: 90%;
     
     .cname-en{
       margin-top: 1.5rem;
       font-size: 0.6rem;

     }
     .cname-cn{
       font-size:0.4rem;
       }
     .cname-cn,.cname-en{
       color: white;
       text-align: center;
      //  font-size: 0.6rem
     }
     span{
       display: inline-block;
       width: 100%;
       text-align: center;
     
       color: white;
      //  border: 1px solid red;
       background: rgba(0,0,0,0.1);
       line-height: 8;
       font-size:0.5rem;
      height: 4rem;
      border-radius: 0.2rem;
     }
 }
</style>