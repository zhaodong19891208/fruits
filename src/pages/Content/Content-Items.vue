<template>
  <div class="main-contnet-item hot-fruits">
    <div class="item-list01" v-for="(item,i) in Items" :key="i">
      <content-title :title="item[0].content[0]"></content-title>
    
        <content-info :decinfo="item[1].content[0]"></content-info>
        <swiper-banner  :info="item[2].content"></swiper-banner>
    </div>
     <content-meat :title="title" :bigImg="bigImg" :bannerImg ='bannerImg'></content-meat>
    <content-lastItem :lastTitle="lastItem" :goodsItem="goodsItem[0].content"></content-lastItem>
  </div>
</template>

<script>
import axios from 'axios'
import SwiperBanner from './swiper-Banner'
import ContentTitle from './Content-Title'
import ContentInfo from './Content-Info'
import ContentMeat from './Content-Meat'
import ContentLastItem from './Content-LastItem'
export default {
  name: 'main-contnet-item',
  data() {
    return {
      showType:true,
      BannerItem:[],
      Items:[],
      AllItem:[],
      Item1:[],
      Item2:[],
      title:[],//主页的标题栏
      bigImg:[],//精选专题的banner图
      bannerImg:[],//中间轮播图数据
      lastItem:[],
      goodsItem:[]//主页下面的商品
    }
  },
  components: {
    SwiperBanner,ContentTitle,ContentInfo,ContentMeat,ContentLastItem
  },
   methods: {
    getBanners () {
      axios.get('http://localhost:8080/tt/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11624&ad_code=110114')
        .then(this.resSuccuss.bind(this))
        .catch(this.resErr.bind(this))
    },
    resSuccuss (res) {
      let Item = [];
      let Item1 = [];
      let content = res.data.data.banner.mainBanners
       Item.push(content.slice(5,8))
       Item.push(content.slice(8,11))
       Item1.push(content.slice(11,12))
       Item1.push(content.slice(12,20))
    // 最下面的列表部分
      
      this.lastItem.push(content[20])
      this.goodsItem.push(content[21])
      console.log(this.goodsItem)
    //  console.log(this.lastItem)

      this.Items = Item
      this.Item1 = Item1//bigImg+swiper

      this.title = Item1[0]//精选专题

    //主页精选专题部分轮播+大图部分
      let bigImg = Item1[1]
      for(var i in bigImg ){
        if( i%2 == 0 ){
          this.bigImg.push(bigImg[i])
        }else{
          this.bannerImg.push(bigImg[i])
        }
      }
   
   

    },
    resErr (err) {
      console.log(err)
    }
  },
  created () {
      this.getBanners()
  }
}
</script>

<style lang="scss" scoped >
  .hot-fruits {
    padding-bottom: 0.84rem;
  }
  .item-list01 {
    
        .hot-ftuits-title {
        
        }    
    .tag {
          position: absolute;
          position: relative;
          width:50px;
          left: 0;
          padding: .06rem .12rem;
          color: #fff;
          font-size: .18rem;
          background-color: #ff8a65;
          border-radius: .08rem .08rem .08rem .08rem;
      } 
  }
</style>
