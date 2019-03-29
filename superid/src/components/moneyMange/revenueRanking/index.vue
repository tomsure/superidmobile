<template>
  <div class=""> 
      <mt-navbar v-model="selected">
  <mt-tab-item id="all">全部产品</mt-tab-item>
  <mt-tab-item id="fixedPeriod">定期理财</mt-tab-item>
  <mt-tab-item id="ant">蚂蚁搬砖</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="all">
    <mt-cell  :title="'内容 '" />
  </mt-tab-container-item>
  <mt-tab-container-item id="fixedPeriod">
    <mt-cell  :title="'测试 '" />
  </mt-tab-container-item>
  <mt-tab-container-item id="ant">
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
     selected:'all'
    }
  }
 }
</script>

<style lang="" scoped>
</style>