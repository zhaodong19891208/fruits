<template>
  <div class="last-item">
    <div class="last-itemtitle">
      <a class="title"  href="#">
        <img :src="lastTitle[0].content[0].image" title="果园热卖" style="height: 54.6133px;">
      </a>
    </div>

    <div v-for="(goodsItem,i) in goodsItem" :key="i">
      <div class="fruits-info">
          <div class="fruits-info-img" >
            <img :src="goodsItem.image">
          </div>
          <div class="desc">
            <h5>{{goodsItem.title}}</h5>
            <p>{{goodsItem.subtitle}}</p>
            <div class="price">
              <span class="money">￥{{goodsItem.price}} / <em>6个</em></span>
              <i class="fa fa-plus-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    
     
    </div>



   </div>
</template>

<script>
export default {
  name: 'last-item',
  props:['lastTitle','goodsItem']
}
</script>

<style lang="scss" scoped >
    .fruits-info {
      padding: 0 .24rem 0 .5rem;
      height: 3.2rem;
      border-top: .01rem solid rgba(220,220,220,.2);
      -webkit-box-align: center;
      position: relative;
      display: -webkit-box;
      
      .fruits-info-img {
        img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
      .desc {
        position: relative;
        text-align: left;
        p {
          font-size: 0.28rem;
          width: 2.76rem;
          color: #878787;
          margin-bottom: .44rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h5 {
          width: 2.76rem;
          line-height: 0.44rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .34rem;
          margin-bottom: .1rem;
        }
        .price {
          .money {
            line-height: 0.4rem;
            display: block;
            color: #ff8000;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          i {
            position: absolute;
            top: 1.2rem;
            right: 0;
            width: .4rem;
            height: .4rem;
            text-align: right;
            line-height: .70rem;
          }
          i::before{
            display: inline-block;
            text-align: center;
            font-size: .54rem;
            color: #ff8000;
            background-color: #fff;
            width: .4rem;
            height: .4rem;
            line-height: .4rem;
            border: .02rem solid #bfbfbf;
            border-radius: 50% 50% 50% 50%;
          }
        }
      }
    }
</style>
