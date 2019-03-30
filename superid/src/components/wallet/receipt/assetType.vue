<!--  -->
<template>
  <div class="content-box">
     <div class="header">
          
         <div class="coin-text">
          <div>
              <span class="icon-ETH"></span>
          </div>
          <div>
              <span class="coin-name">ETH</span>
          </div>
         </div>
          <div class="rowt" >
               <div>11221,21</div>
               <div>≈ $<span>12311</span></div>
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
    toReceipt(){
      this.$router.push({path:'/receipt'})
      // alert(123)
    }
  }
}

</script>
<style  scoped>
button:focus{
  outline: none;
}
button{
  background: #FFFFFFFF;
  color:#3F82DD ;
  border: 0;
   margin: 0.1rem;
   width:2rem;
   border:1px solid #3F82DD;
   border-radius:20px;
}
 html{
    background: #F8F8FF;
    
   /* background: red; */

 }
  .coin-text{
      display: flex;
   
  }
 .rowt{
   color:#616860 ;
 }
 
  .header{
    display: flex;
    justify-content: space-between;
  }
   .header{
     text-align: center;
   }
   .content-box{
    
/* position: relative; */

width:8.75rem;
/* height:3.15625rem; */
line-height: 0.625rem;;
border-radius: 0.1875rem;;
background-color: rgba(255, 255, 255, 1);
color: rgba(16, 16, 16, 1);
font-size: 0.4375rem;
text-align: center;
/* box-shadow: 0px 0px 0.6875rem 0px rgba(210, 210, 210, 1); */
font-family: Arial;
margin: 0.25rem auto;
color: #333333 100%;
padding: 0.46875rem;
  
   }
   .icon-ETH::before{
     font-size:1.5rem;
   }
 .coin-name{
     display: inline-block;
     /* width: 1.5rem; */
     /* height: 1.5rem; */
     margin-top: 0.4rem;
 }
</style>