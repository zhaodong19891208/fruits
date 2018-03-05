<template>
  <div class="main-content content">
  <content-banner></content-banner>
  <content-items></content-items>    
  </div>
</template>

<script>
import ContentItems from './Content-Items'
import ContentBanner from './Content-Banner'
export default {
  name: 'content',
  components: {
      ContentItems,ContentBanner
  }
}
</script>

<style lang="scss" scoped >

</style>
