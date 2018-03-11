<template>
  <div class="search-input" @click="isShowSearch">
    <div class="search">
      <i class="fa fa-search"></i>&nbsp;&nbsp;
      <span>奇异果</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchInput',
  props: ['isShowSearch']
}
</script>

<style lang = "scss" scoped>
  .search-input{
    height: 50px;
    width: 100%;
    padding: 10px;
    display: flex;
    background: #f8f8f8;
    box-sizing: border-box;
    .search{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      font-size: 12px;
      justify-content: center;
      background: #eaeaea;
      border-radius: 5px;
      color: #959595;
    }
  }
</style>
