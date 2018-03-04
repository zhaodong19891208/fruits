<template>
  <div>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-if="isLogIn" class="register-plone">
        <p>
          <span class="iconfont">&#xe654;</span>
          <input type="text" placeholder="手机号">
        </p>
        <p>
          <span class="iconfont">&#xe608;</span>
          <input type="password" placeholder="短信验证">
        </p>
          <button>登录</button>
          <div class="logIn-a">
            <a href="javascript:;" @click="animate">手机号快捷登录</a>
            <a href="javascript:;">找回密码?</a>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app-register',
  props: ['isLogIn', 'animate']
}
</script>

<style lang="stylus" scoped>
  .register-plone
     top: 40%
     right: auto
     bottom: auto
     left: auto
     position: absolute
     margin-top: -1.35rem
     width: 84%
     padding: 0 8%
     background: #fff
  .register-plone p
     display: flex
     width: 100%
     height: .84rem
     line-height: .84rem
     padding: .08rem 0
     margin: .1rem 0
     border-bottom: .01rem solid #d8d8d8
  .register-plone span
     font-size: .5rem
  .register-plone input
     ::-webkit-input-placeholder
        font-size: .8rem
  .register-plone i
     display: block
     width: 1.4rem
     height: .5rem
     margin-left: 1.4rem
     border-radius: .02rem
     background: #bfbfbf
     line-height: .5rem
     font-size: .2rem
     color: #fff
     text-align: center
  .register-plone h3
     height: .4rem
     line-height: .4rem
     font-size: .2rem
     color: #878787
  .register-plone button
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
