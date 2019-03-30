<template>
  <div>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <a :href="item.href">
          <img :src="item.url" class="img"/>
          <span class="desc">{{item.title}}</span>
        </a>
      </mt-swipe-item>
    </mt-swipe>
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
          href: 'http://google.com',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553931780802&di=1e287e5d8cd12675388091411bcb6ab1&imgtype=0&src=http%3A%2F%2F2d.zol-img.com.cn%2Fproduct%2F124_500x2000%2F309%2FceyVdhB71o7GM.jpg'
        }]
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
</style>
