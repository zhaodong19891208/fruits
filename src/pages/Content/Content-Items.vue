<template>
  <div class="main-contnet-item hot-fruits">
    <div class="item-list">
      <div class="hot-ftuits-title">
        <a class="title"  href="#">
          <img src="https://imgjd6.fruitday.com/images/2018-01-17/8265ad64fa014013d28ec2e410c6083e.jpg" title="果园热卖" style="height: 54.6133px;">
        </a>
      </div>

      <div class="fruits-info">
        <div class="fruits-info-img">
          <img src="https://imgjd6.fruitday.com/images/product_pic/4450/1/1-370x370-4450-Y5S3UH4B.jpg" alt="">
        </div>
        <div class="desc">
          <h5>巨无霸佳沛意大利金奇异果</h5>
          <p>甜蜜巨能量 一手握不住</p>
          <div class="tag">限量供应</div>
          <div class="price">
            <span class="money">￥78 / <em>6个</em></span>
            <i class="fa fa-plus-circle"></i>
          </div>
        </div>

       </div>

        <div class="swiper-container goods-item-swiper" style="padding:0 15px">
          <div class="swiper-wrapper">
              <div class="swiper-slide item-swiper">
                <div class="item-img">
                  <img src="https://imgjd6.fruitday.com/images/product_pic/4450/1/1-370x370-4450-Y5S3UH4B.jpg" alt="">
                </div>
                <div class="item-desc">
                  <div class="tag">限量供应</div>              
                  <h5>巨无霸佳沛意大利金奇异果</h5>
                  <div class="item-price">
                    <span class="item-money">￥78 / <em>6个</em>
                      <i class="fa fa-plus-circle"></i>
                    </span>
                    
                  </div>
                </div>

                 <div class="swiper-slide item-swiper">
                <div class="item-img">
                  <img src="https://imgjd6.fruitday.com/images/product_pic/4450/1/1-370x370-4450-Y5S3UH4B.jpg" alt="">
                </div>
                <div class="item-desc">
                  <div class="tag">限量供应</div>              
                  <h5>巨无霸佳沛意大利金奇异果</h5>
                  <div class="item-price">
                    <span class="item-money">￥78 / <em>6个</em>
                      <i class="fa fa-plus-circle"></i>
                    </span>
                    
                  </div>
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
  name: 'contnet-item'
}
</script>

<style lang="scss" scoped >
  .item-list {
       height:2000px;
        .hot-ftuits-title {
        
        }
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
      .item-swiper {
                  width: 96px;
                  height: 170px;
                  
        .item-img {
                  margin: auto;
                  position: relative;
                  background:pink;
                  img{
                    display:inline-block;
                    width: 96px;
                    height: 96px;
                  }
          }
          .item-desc{
            text-align: center;
            h5 {
              font-size: 0.28rem;
              width: 96px;
              color: #878787;
              margin-bottom: .1rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
             .tag {
                width: 50px;
              }
              .item-price {
                position: relative;
                .item-money {
                    display: block;
                    color: #ff8000;
                    width: 96px;
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                i::before{
                      display: inline-block;
                      text-align: center;
                      font-size: 16px;
                      color: #ff8000;
                      background-color: #fff;
                      width: .32rem;
                      height: .32rem;
                      line-height: .32rem;
                      border: .02rem solid #bfbfbf;
                      border-radius: 50% 50% 50% 50%;
                  }
              }
          }
         
      }
     
  }
</style>
