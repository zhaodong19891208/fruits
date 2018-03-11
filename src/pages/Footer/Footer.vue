<template>
  <footer class="app-footer footer-title">
     <router-link :to={name:footer.path} @click="toggle(footer.id)" :class="[showType==footer.id?addClassName:'']" v-for="footer in footers" :key="footer.id">
      <i :class='footer.icon'></i>
      <span>{{footer.title}}</span>
     </router-link>
  </footer>


  
</template>

<script>

export default {
  name: 'app-footer',
  data () {
    return {
      showType: '1',
      addClassName: "active",
      footers: [
        {id: '1',  title: '首页', icon: 'fa fa-home', path: "/"},
        {id: '2',  title: '分类', icon: 'fa fa-th-large', path: "list"},
        {id: '3',  title: '购物车', icon: 'fa fa-cart-plus', path: "choping"},
        {id: '4', title: '我的果园', icon: 'fa fa-user', path: "logIn"},       
      ],
    }
  },
  methods: {
    toggle:function (id) {
        this.showType = id;
    }
  }
 
}
</script>

<style lang="scss" scoped>
     .footer-title{
          z-index:999;
          top: auto;
          bottom: 0;
          left: 0;
          width: 100%;
          position: fixed;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-box;
          display: -o-box;
          display: box;
          box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
          background: #fff;
          height: 0.84rem;
          font-size: .24rem;
          line-height: 1.2;
          a {
            position: relative;
            width: 100%;
            color: #898989;
            display: block;
            text-align: center;
            -webkit-box-flex: 1;
            i {
              display: block;
              font-size: .48rem;
            }
          }
          .active {
            color: #65a032;
          }
     }
</style>
