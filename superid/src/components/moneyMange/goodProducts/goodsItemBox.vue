<!--  -->
<template>
  <div class="component-content goods-item-box">
     <div>
      <h3 class="title-text"><span class="left-icon"></span> 精选产品</h3>
    </div>
     <div class="item-c">
       
      <div class="t-center cmame">
        发行公司：{{comanys}}
      </div>
    <div class="goods-box">
      <goodsItem class="goods-item" v-for="(item,index) in productList" :goodsData='item' :key="item.index" @click.native="transaction(item)"></goodsItem>
    </div>
      <div class="t-center more"><span class="add-icon">+</span> 更多</div>
     </div>
      
    
  </div>
</template>

<script>
import { requestGet } from "@/api/api.js";
import goodsItem from "@/components/moneyMange/goodProducts/goodsItem.vue";
export default {
  data() {
    return {
      comanys:'SuperID',
      productList: [],
      // goodsData:''
    };
  },

  components: {
    goodsItem
  },
  created() {
      this.getGoods()
  },
  computed: {},

  methods: {
    getGoods() {
     
      
      requestGet('/api/v1/goods_list',{

       }).then(res=>{
             
            // if(res.status=="success" && res.data.data!=[]){
               this.productList=res.data.data[0].goods
                console.log(this.productList)
            // }
            res.data.data[0].goods.forEach(element => {
                //  console.log(element)
            });
       }) 
    },
    transaction(item){
      var uid=JSON.parse(localStorage.getItem("user_info")).uid
       if(uid){
         this.$router.push({path:'/buy',query:{"id":item.id,"uid":uid,"name":item.name}})
        //  console.log(item)
       }else{
         this.$router.push({path:'/login'})
       
       }
   
      
    }
  }
};
</script>
<style  scoped>
 .goods-box{
   /* display: flex;  */
    /* justify-content: space-between; */
    border-top: 0.5px solid #F4F3F3;
    border-bottom: 0.5px solid #F4F3F3;

    overflow: hidden;
 }
 .goods-item{
   /* flex: 50%; */
   width: 50%;
   float: left;
   /* border: 0.5px solid #F4F3F3; */
 }
 .goods-item-box{
   background: white;
   /* padding:0.3rem 0.3rem;
   margin: 0.5rem 0.2rem;
   border-radius:0.2rem; */
   margin: 0.3rem 0;
   padding: 0.3rem;
 }
  .add-icon{
    display: inline-block;
    border: 1.5px solid #3C6CDF;
    
    border-radius: 100px;
    width: 0.3rem;
    height: 0.3rem;
    line-height:1.1
  }
  .more{
    color: #3C6CDF;
    margin-top: 0.2rem;
  }
 .cmame{
   font-size: 0.4rem;
   
   padding-top: 0.2rem;
   padding-bottom: 0.3rem;

 }
 .title-text{
   font-size:0.4rem;
   font-weight: 500;
   margin: 0.2rem;
 }
  .item-c{
box-shadow: 0px 0px 0.6875rem 0px rgba(210, 210, 210, 1);
    border-radius: 0.2rem;
    padding: 0.2rem;
  }
  .left-icon{
    display: inline-block;
    background: #3B60E1;
    width: 0.1rem;
    height: 0.3rem;
    border-radius: 5rem;
  }
</style>