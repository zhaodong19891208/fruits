<template>
  <div class="list">
      <search-input :isShowSearch = "isShowSearch"></search-input>
      <list-content :navs="navs" :index = "index"></list-content>
      <list-bar :navs="navs" :index = "index" :changeIndex = "changeIndex"></list-bar>
      <search-page :isShow = "isShow" :isShowSearch = "isShowSearch"></search-page>
  </div>
</template>

<script>
import searchInput from './searchInput.vue'
import listContent from './listContent.vue'
import listBar from './listBar.vue'
import searchPage from './searchPage.vue'
export default {
  name: 'list',
  data () {
    return {
      navs: [
        {id: 303, title: '果园优选'},
        {id: 18, title: '新鲜水果'},
        {id: 11, title: '水产海鲜'},
        {id: 12, title: '肉禽蛋类'},
        {id: 14, title: '乳品素食'},
        {id: 17, title: '时令鲜蔬'},
        {id: 16, title: '粮油干货'},
        {id: 126, title: '礼盒券卡'},
        {id: 135, title: '果园周边'}
      ],
      index: 0,
      isShow: false
    }
  },
  components: {
    searchInput, listContent, listBar, searchPage
  },
  methods: {
    changeIndex (index) {
      this.index = index
    },
    isShowSearch () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang = "scss">

</style>
