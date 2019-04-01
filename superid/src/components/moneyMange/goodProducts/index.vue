<template>
  <div class="component-content">
     <h3 class="box-title">精选产品</h3>
      <div class="box-c">
          <div class="top-box">
              <div>
                  <div class="top-text">
                      <span class="title-text">蚂蚁量化精选</span>
                      <span class="icon-1"></span>
                  </div>
                   <div class="bottom-text">浮动收益类</div>
              </div>
             
          </div>
          <div class="bottom-box">
            <div class="bottom-c">
                <div class="data-text">11221,21</div>
                 <div class="bottom-text">年化收益</div>
            </div>
          <div class="bottom-c">
              <div class="data-text">180天</div>
             
              <div class="bottom-text">投资期限</div>
          </div>
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
  },
  created(){
      
  }
 }
</script>

<style lang="" scoped>

 
 .top-text{
   margin-bottom:0.1rem;
 }
 .box-c{
     background: #3B8AF0;
     border-radius: 0.1599147121535181rem;
     color: white;
     /* width: 85%; */
     margin: 0 auto;
     padding:0.3464818763326226rem 0;
}
.top-box{
    text-align: center;
}
  .bottom-box{
      display: flex;
      /* justify-content: space-between; */
      margin-top: 1rem;
  }
  .bottom-c{
    flex: 1;
    text-align: center;
  }
   .title-text{
       font-size:0.5063965884861407rem;
       
   }
  .data-text{
      font-size: 0.7462686567164179rem;
  }
  .bottom-text{
    font-size: 0.3464818763326226rem;
  }
  .icon-1::before{
      color: white;
      font-size: 0.5rem;
      position: relative;
      left: 2.5rem;
  }
</style>