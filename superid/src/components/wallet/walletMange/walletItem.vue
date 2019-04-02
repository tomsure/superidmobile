<!--  -->
<template>
  <div>
    
    <div>
       <div class="wallet-box">
            <mt-cell title="ETH-wallet"  :is-link='true' value="">
              
                
               <mt-button  slot="right"></mt-button>
              </mt-cell> 

              <div class="addr">
                    oijrfowjogrfjowjegvojqpopqoefqworvowerfkore
              </div>
              <div class="list-box-b">  
               <div class="ft-18">
                 16648 <span>ETH</span>
               </div>
               <div>
                   <span class="icon-ETH"></span>
               </div>
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

  methods: {}
}

</script>
<style  scoped>
.list-box-b{
  display: flex;
  justify-content: space-between;
   background: white;
   padding:0 0.2rem;
   margin-top: 0.7rem;
   border-radius: 6px;
}
.wallet-box{
   background: white;
   border-radius: 6px;
   width: 95%;
   margin: 0.2rem auto;
}
 .addr{
  text-align:center;
  color: #5677FD;
 }
 .icon-ETH::before{
   font-size: 0.7995735607675906rem;
   position: relative;
   bottom:0.2rem;
   color: black;
 }
 .mint-button--default{
   box-shadow: none;
 }
 .mint-cell{
   border-radius: 6px;
 }
</style>