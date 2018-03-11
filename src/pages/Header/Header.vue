<template>
  <div class="app-header header-box">
      <div class="header-left">
          <div>
            <img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png" title="">
          </div>
          <div class="position" @click="positionShow" >{{positions[index]}}
            <i class="iconfont">&#xe60c;</i>
          </div>
          <app-position :poShow="poShow" :showCity='showCity' :positions ="positions" :index="index"></app-position>
      </div>
      <div class="header-right">
        <i class="iconfont">&#xe651;</i>
      </div>
  </div>
</template>

<script>
	import AppPosition from '../details/Position'
export default {
  name: 'app-header',
  components: {
    AppPosition
  },
  data() {
    return{
      poShow : false,
      index: 0,
      	positions:['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东',
'河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','甘肃','青海','宁夏','新疆','台湾','香港','澳门']
    }
  },
  methods:{
    positionShow () {
        this.poShow = !this.poShow
    },
    showCity (index) {
      this.index = index
        this.poShow = !this.poShow
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-box {
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 39px;
    box-shadow: 0 0.06rem 0.06rem 0 rgba(0,0,0,.2);
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      display: flex;
      align-items: center;
      color: #65a032;
      margin: 0 0 0 .16rem;
      width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      img {
        width: 1.02rem;
        height: 0.3rem;
        margin-right: 0.15rem;
      }
      .position {
        i {
          font-size: .24rem;
        }
      }
    }
    .header-right {
          width: 0.72rem;
          height: .72rem;
          i {
            font-size: .40rem;
            line-height: 0.72rem;
            padding-right: .36rem;
            color: #3a3a3a;
            font-weight: 999;
          }
    }
  }
</style>
