<template>
  <div>
    <!-- <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <a :href="item.href">
          <img src="@/assets/imgs/bg01.png" class="img"/>
          <span class="desc">{{item.title}}</span>
        </a>
      </mt-swipe-item>
    </mt-swipe> -->
      <div class="swipe-img" @click="toDownLoad" >
           <img src="@/assets/imgs/bg01.png" alt="">
           <div class="text-1">
             <div class="ft-28">
             全面上线
           </div>
           <div class="bottom ft-16">
           BlockBank钱包App推出海量精选量化产品
           </div>
           </div>
      </div>
  </div>
</template>
 
<script>
  import {Swipe, SwipeItem} from 'mint-ui'
  import 'mint-ui/lib/style.css'
 
  export default {
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem
    },
    data () {
      return {
        items: [{
        //   title: '你的名字',
          href: '#',
          url: '@/assets/imgs/bg01.png'
        }]
      }
    },
    methods: {
      toDownLoad(){
          // alert(123)
         this.$router.push({path:'/downLoad'})
      }
    }
  }
</script>
 
<style scoped>
  img {
    width: 100%;
  }
  .mint-swipe {
    height: 218px;
  }
  /* .desc {
    font-weight: 600;
    opacity: .9;
    padding: 5px;
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: #fff;
    background-color: gray;
    position: absolute;
    bottom: 0;
  } */
   .swipe-img{
     text-align: center;
     color: white;
     /* background: url('@/assets/imgs/bg01.png') */
   }
   .top{
    font-size:''
   }
   .bottom{
    font-size:''
   }
   .text-1{
     position: relative;
     bottom:3rem;
   }
</style>
