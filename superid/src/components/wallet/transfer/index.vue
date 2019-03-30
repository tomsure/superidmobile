<!--  -->
<template>
  <div> 
      <mt-header title="转账">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
   
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
     <div class="item" >
       <div class="coin-name" @click="selectCoin"><div><span>ETH</span><span class="icon-1"></span></div> <div class="t"><span>余额:</span><span>122</span></div></div>
       <mt-field  placeholder="请输入转出金额" v-model="num">
           <span>全部</span>
       </mt-field>

    </div>
     <div class="item">
       <mt-field label="收款地址" placeholder="请输入或粘贴钱包地址" v-model="num">
            
       </mt-field>
         <mt-field label="备注" placeholder="备注"  v-model="email"></mt-field>
     </div>
       <div class="item">
         <mt-cell title="矿工费用"  @click.native="selectCoin" is-link></mt-cell>
       </div>
        
           <div class="footer-box">
              <mt-button type="primary" class="submit-btn">确认</mt-button>
            
           </div>
        
        <div>
          <mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num:'',
      email:'',
      actions:[{name:'ETH',method:''},{name:'BYC'}],
      sheetVisible:false
    };
  },

  components: {},

  computed: {},

  methods: {
    selectCoin(){
       this.$router.push({path:'/selectCoin'})
    }
  }
}

</script>
<style lang="less"  scoped>
 .coin-name{
    padding:0.2rem 2%;
    background: white;
    font-size: 0.373134328358209rem;
    display: flex;
      justify-content: space-around;
   div{
     flex:1;
   }
   .t{
     text-align: right;
   }
 }
  
 .item{
    margin:0.5rem 0;
 }
</style>