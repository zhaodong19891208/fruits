<template>
  <div class="list-content">
      <h3 class="title">
        {{navs[index].title}}
        <a href="" class="all">全部  <i class="fa fa-angle-right"></i></a>
      </h3>
      <li v-for="store in stores" :key="store.id" class="right-item">
        <dl>
          <dt>
            <img :src="store.class_photo" alt="">
          </dt>
          <dd>{{store.name}}</dd>
        </dl>
      </li>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'listContent',
  props: ['navs', 'index'],
  data () {
    return {
      store_id_list: 3,
      class_id: this.navs[this.index].id,
      stores: [],
      pre_url: this.$root.config.host + '/st/v3/product/category_list'
    }
  },
  methods: {
    getStores () {
      let {store_id_list, class_id} = this
      let url = this.pre_url
      axios.get(url, {
        params: {store_id_list, class_id}
      }).then(res => {
        // console.log(res)
        this.stores = res.data.data.childrenList[0].class3Group
        // console.log(this.stores)
      }).catch(err => {
        // console.log(err)
      })
    },
    getInitStores (index) { // 根据更新后的数据重新初始化一下基本数据
      this.store_id_list = 3
      this.index = index
      this.class_id = this.navs[this.index].id
      this.stores = []
      this.getStores()
    }
  },
  created () {
    this.getStores()
    // console.log(this.navs[this.index].id + '99')
  },
  watch: {// 监听一下index是否变化
    index (newindex) {
      // console.log('newindex:' + newindex)
      this.getInitStores(newindex)
    }
  }
  // updated (){//死循环
  //   // this.getStores()
  // }
  // methods: {
  //   addActive(){
  //     this.acti
  //   }
  // }
}
</script>
<style lang = "scss" scoped>
  .list-content{
    padding-left: 0.78rem;
      .title{
        font-weight: 400;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        margin: 0;
        font-size: .14rem;
      }
      .all{
        display: block;
        position: absolute;
        top: .5rem;
        right: 0;
        height: .3rem;
        line-height: .3rem;
        font-size: .12rem;
        color: #878787;
        padding-right: .08rem;
      }
      .right-item{
        dl{
          width: 33%;
          float: left;
          text-align: center;
          padding-bottom: .2rem;
          dt{
            width: 100%;
            img{
              width: 80%;
            }
          }
          dd{
            font-size: .13rem;
            margin-top: .04rem;
            color: #3a3a3a;
          }
        }
      }
  }
</style>
