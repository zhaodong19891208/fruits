<template>
 <div class="swiper-container app-home-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners" :key="banner.banner_ad_id">
                <img width="100%" :src="banner.image" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script scoped>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'app-home-banner',
  data () {
    return {
      banners: []
    }
  },
  methods: {
    getBanners () {
      axios.get('http://localhost:8080/tt/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11624&ad_code=110114')
        .then(this.resSuccuss.bind(this))
        .catch(this.resErr.bind(this))
    },
    resSuccuss (res) {
      let content = res.data.data.banner.mainBanners
      for (let i = 0; i < content.length; i++) {
        this.banners = content[0].content
      }
      this.$nextTick(function () {
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    },
    resErr (err) {
    }
  },
  created () {
    this.getBanners()
  }
}
</script>

<style lang="scss" scoped >
    .swiper-wrapper {
        margin-top: 0.82rem;
    }
</style>
