<template>
  <div class="search" v-if="isShow">
      <header class="serach-header">
        <span class="go_back" @click="isShowSearch"> <i class="fa fa-angle-left sasa"></i> 返回</span>
        <div class="text">
            <i class="fa fa-search fafa" ></i>
            <input type="text" class="ipt" placeholder="新鲜水果、生鲜" v-model="keyword" @input="toggle">
        </div>
        <span class="no_name">搜索</span>
  </header>
  <drop-down :isDropShow="isDropShow" :close = "close" :itmes = "itmes"></drop-down>
  <key-word></key-word>
  </div>

</template>
<script>
import keyWord from './keyWord.vue'
import dropDown from './dropDown.vue'
import axios from 'axios'
export default{
  props: ['isShow', 'isShowSearch'],
  name: 'search',
  data () {
    return {
      isDropShow: false,
      keyword: '',
      itmes: [],
      pre_url: this.$root.config.host + '/st/v3/search/keyword'
    }
  },
  components: {
    keyWord, dropDown
  },
  methods: {
    toggle () {
      if (this.keyword) {
        this.isDropShow = true
        this.getItems()
      } else {
        this.isDropShow = false
      }
    },
    close () {
      this.isDropShow = false
      this.keyword = ''
    },
    getItems () {
      let {keyword} = this
      let url = this.pre_url
      axios.get(url, {
        params: {keyword}
      }).then(res => {
        console.log(res)
        this.itmes = res.data.data
        console.log(this.itmes)
      }).catch(err => {
        console.log(err + 'lll')
      })
    }
  },
  created () {
    this.getItems()
  }
}
</script>
<style lang = "scss" scoped>
  .search{
      background:#fff;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      .serach-header{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        background-color: #fff;
        border-bottom: 1px solid #d8d8d8;
        padding: .1rem 0;
        height: auto;
        .go_back{
            color: #64a131;
            font-size: .14rem;
            width: auto;
            height: .32rem;
            line-height: .32rem;
            margin-right: .06rem;
            display: block;
            .sasa{
                font-size: .2rem;
                display: inline-block;
                position: relative;
                top: 3px;
                padding-left: 5px;
            }
        }
        .text{
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            position: relative;
            background-color: #eee;
            border-radius: .05rem;
            color: #878787;
            font-weight: 300;
            font-size: .14rem;
            display: -webkit-box;
            width: 2.82rem;
            .fafa{
                font-size: .16rem;
                margin: 0 .1rem;
                position: relative;
                line-height: .32rem;
            }
            .ipt{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
                padding: 0 .3rem 0 0;
                height: .32rem;
                background-color: #eee;
            }
        }
        .no_name{
            box-sizing: border-box;
            height: .32rem;
            line-height: .32rem;
            color: #64a131;
            font-size: .14rem;
            padding: 0 .06rem;
            white-space: nowrap;
        }
      }
  }
</style>
