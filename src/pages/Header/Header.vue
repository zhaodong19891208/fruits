<template>
  <div class="app-header header-box">
      <div class="header-left">
          <div>
            <img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png" title="">
          </div>
          <div class="position">沙河镇
            <i class="iconfont">&#xe60c;</i>
          </div>
      </div>
      <div class="header-right">
        <i class="iconfont">&#xe651;</i>
      </div>
  </div>
</template>

<script>

export default {
  name: 'app-header'
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
