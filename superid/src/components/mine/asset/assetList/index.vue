<!--  -->
<template>
  <div class="content-box">
     <div class="header">
         <div class="list-data">
           <div>链上资产($)</div>
         <div>122.1</div>
         </div>
          <div class="rowt" >></div>
     </div>
     <div>
          <button>转账</button><button>收款</button>
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
 .rowt{
   color:#616860 ;
 }
 .list-data{
   font-size:0.373134328358209rem;
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
box-shadow: 0px 0px 0.6875rem 0px rgba(210, 210, 210, 1);
font-family: Arial;
margin: 0.25rem auto;
color: #333333 100%;
padding: 0.46875rem;
  
   }
</style>