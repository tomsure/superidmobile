<template>
  <div class="component-content">
   <h3 class="box-title">为您推荐</h3>
     <div class="c-box">
         <div class="c-box-c">
             <div>新手专区</div>
         </div>
         <div class="c-box-c">
             <div>高端理财</div>
         </div>
         <div class="c-box-c">
             <div>组合投资</div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="" scoped>
.c-box{
    display: flex;
    justify-content: space-around;
}
.c-box-c{
    width: 2.985074626865672rem;
    height: 2.985074626865672rem;
    left: 12px;

line-height: 20px;
background-color:#E9ECF2;
margin:0.1rem;
text-align: center;
/* background-image: url(../../../ass) */


}
</style>
