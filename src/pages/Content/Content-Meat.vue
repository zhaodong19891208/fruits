<template>
    <div>
      <div>
           <img :src="title[0].content[0].image" title="果园热卖" style="height: 54.6133px;">
      </div>
      <div class= "big-Img" v-for="(img, i) in bigImg" :key="i">
          <div cass="item-img">
            <img :src="img.content[0].image" style="height:136.533px"/>
          </div>
          <div class="fruit-banner">
              <div class="box" v-for="(img,i) in bannerImg" :key="i">
                <div class="img-box">
                  <img id="img-box" :src="img.content[0].image"/>
                </div>
                <p>{{img.content[0].title}}</p>
                <div class="price">
                  <span class="money">
                    ￥{{img.content[0].price}}/
                    <em>{{img.content[0].volume}}</em>
                  </span>
                  <i class="fa fa-plus-circle fa-2x"></i>
                </div>
              </div>		
          </div>      
      </div>
    </div>
</template>

<script>
import SwiperBanner from './swiper-Banner'
export default {
  name:'item-img',
  props: ['title','bigImg','bannerImg'],
  components: {
     SwiperBanner
  },
  methods: {
 
  }
}
</script>

<style lang="scss" scoped >
  .item-img {
    img {
      height: 136.533px;;
      width: 100%;
    }
  }
</style>
