<template>
  <nav class="accWrapper">
    <div class="accTitle" @click="toggleList">
       <div>
          <span class="icon-ETH coin-icon"></span>
      <span class="coin">{{data1.name}}</span>
       </div>
       <div style="display:flex;just-content:space-between;">
         <div style="text-align:center;padding:0.35rem;">
            <div class="ft-16" >123,21313</div>
         <div class="ft-12">2131313</div>
         </div>
         <span class="icon--2"></span>
       </div>
       
       
    </div>
   
  </nav>
</template>
 
<script>
export default {
  data() {
    return {
      isDisplay: false,
      dat1a:{
        name:'',
        id:''
      }
    };
  },
  props: ["data"],
  created(){
   this.data1=this.data
  },
  methods: {
    toggleList() {
      this.isDisplay = !this.isDisplay;
    }
  }
};
</script>
 
<style lang="less" scoped>
.accWrapper {
  display: flex;
  flex-direction: column;
  background: white;
  // border-radius: 10px;
    width: 90%;
    margin: 0.2rem auto;
    padding: 0.2rem;
    border-bottom: 1px solid #EAEAEA;
    
}
.accTitle {
  display: flex;
  justify-content: space-between;
  // align-items: baseline;
  // height: 50px;
  // line-height: 50px;
  font-size: 16px;
  background: white;
  text-indent: 1em;
  cursor: pointer;
  
}
.accChevron {
  width: 20px;
  margin-right: 15px;
}
.accList {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
}
.accList.maxHeight {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}
.accListItem {
  // background-image: url(../assets/1.png);
  
  display: flex;
  justify-content: space-between;
 
  font-size: 16px;
  text-indent: 1em;
  cursor: pointer;
  border-top: 1px solid #ECE9E9;
  padding: 0.2rem;
}

@keyframes open-menu {
  to {
    transform: rotate(90deg);
  }
}
@keyframes close-menu {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.open_menu {
  animation: open-menu 0.4s ease-out forwards;
}
.close_menu {
  animation: close-menu 0.4s ease-out forwards;
}
.icon--2::before{
  position: relative;
  top: 0.5rem;
}

.coin-icon{
 font-size: 1.5rem;
}
.coin{
  position: relative;
  bottom: 0.5rem;
}
</style>