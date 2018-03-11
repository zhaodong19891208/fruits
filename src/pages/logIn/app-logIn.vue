<template>
  <div class="app-logIn">
    <transition  leave-active-class="animated fadeOutLeft" enter-active-class="animated fadeInLeft">
      <div v-if="isLogIn" class="logIn-plone">
          <p>
             	<router-link :to="{ name: 'home'}"  tag="span" class="iconfont">&#xe654;</router-link>
              <input type="text" placeholder="手机号">
              <i>获取验证码</i>
          </p>
          <p>
              <span class="iconfont">&#xe605;</span>
              <input type="password" placeholder="短信验证">
          </p>
          <h3>首次用手机号登录将自动为您注册，并有豪礼相送。</h3>
          <button>登录</button>
          <div class="logIn-a">
            <a href="javascript:;" @click="animate">账号密码登录</a>
            <a href="javascript:;">未收到验证码?</a>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app-logIn',
  props: ['isLogIn', 'animate']
}
</script>

<style lang='stylus' scoped>
  .logIn-plone
     top: 40%
     right: auto
     bottom: auto
     left: auto
     position: absolute
     margin-top: -1.35rem
     width: 84%
     padding: 0 8%
     background: #fff
  .logIn-plone p
     display: flex
     width: 100%
     height: .84rem
     line-height: .84rem
     padding: .08rem 0
     margin: .1rem 0
     border-bottom: .01rem solid #d8d8d8
  .logIn-plone span
     font-size: .5rem
  .logIn-plone p input
     width: 100%
     ::-webkit-input-placeholder
        font-size: .6rem
  .logIn-plone i
     display: block
     width: 1.4rem
     height: .5rem
     border-radius: .02rem
     background: #bfbfbf
     line-height: .5rem
     font-size: .2rem
     color: #fff
     text-align: center
  .logIn-plone h3
     height: .4rem
     line-height: .4rem
     font-size: .2rem
     color: #878787
  .logIn-plone button
     display: block
     width: 100%
     height: .8rem
     margin: 1rem 0 .3rem
     border-radius: .04rem
     background: #f93
     line-height: .8rem
     font-size: .32 rem
     color: #fff
     text-align: center
    .logIn-a
       display: flex
       width: 100%
       justify-content: space-between
    .logIn-a a
       display: block
       color: #f93
       font-size: .24rem
</style>
