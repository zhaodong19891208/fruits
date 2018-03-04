<template>
  <div id="app">
    <app-footer></app-footer>
    <router-view/>
  </div>
</template>

<script>
import AppFooter from './pages/Footer/Footer'
export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>

<style  lang="scss">
 
</style>
