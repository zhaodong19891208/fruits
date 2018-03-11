<template>
    <div class="content-title">
      <div class="hot-ftuits-title">
        <a class="title"  href="#">
          <img :src="title.image" title="果园热卖" style="height: 54.6133px;">
        </a>
      </div>
   </div>
   
</template>

<script>

export default {
  name: 'content-title',
  props:['title']
}
</script>

<style lang="scss" scoped >
  
</style>
