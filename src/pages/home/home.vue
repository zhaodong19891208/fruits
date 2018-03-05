<template>
  <div class="main-box home">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-content></app-content>
  </div>
</template>

<script>
import AppHeader from '../Header/Header'
import AppBanner from './Banner'
import AppContent from '../Content/Content'
export default {
  name: 'Home',
  components: {
    AppHeader, AppBanner,AppContent
  }
}
</script>

<style lang="scss" scoped >

</style>
