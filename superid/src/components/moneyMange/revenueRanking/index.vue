<template>
  <div class=""> 
      <mt-navbar v-model="selected">
  <mt-tab-item id="1">全部产品</mt-tab-item>
  <mt-tab-item id="2">定期理财</mt-tab-item>
  <mt-tab-item id="3">蚂蚁搬砖</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell  :title="'内容 '" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell  :title="'测试 '" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell  :title="'选项 ' " />
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
     selected:''
    }
  }
 }
</script>

<style lang="" scoped>
</style>