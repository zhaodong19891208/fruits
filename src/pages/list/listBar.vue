<template>
  <ul class="list-bar">
    <li v-for="(nav,i) in navs" :key="nav.id" class="list-item" :class="[index==i? activeClass:'']"
    @click="changeIndex(i)" >{{nav.title}}</li>
  </ul>
</template>
<script>
export default{
  name: 'listBar',
  props: ['navs', 'index', 'changeIndex'],
  data () {
    return {
      // navs: [
      //   {id: 303, title: '果园优选'},
      //   {id: 18, title: '新鲜水果'},
      //   {id: 11, title: '水产海鲜'},
      //   {id: 12, title: '肉禽蛋类'},
      //   {id: 14, title: '乳品素食'},
      //   {id: 17, title: '时令鲜蔬'},
      //   {id: 16, title: '粮油干货'},
      //   {id: 126, title: '礼盒券卡'},
      //   {id: 135, title: '果园周边'}
      // ],
      activeClass: 'active'
    }
  },
  methods: {
    // changeIndex (index) {
    //   this.index = index
    // }
  },
  created () {
    // console.log(this.navs + '888')
  }
}
</script>
<style lang = "scss">
  .list-bar{
      position:fixed;
      left: 0;
      top:50px;
      width: 0.78rem;
      height: 100%;
      background: #f8f8f8;
      .list-item{
        height: 46px;
        width: 100%;
        font-size: 0.15rem;
        line-height: 46px;
        text-align: center;
        background: #f8f8f8;
        &.active{
          border-left: 2px solid #65a032;
          color: #65a032;
          background: #fff;
        }
      }
    }
</style>
