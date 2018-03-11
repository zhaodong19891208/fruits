<template>
  <div class="app-logIn">
    <transition  leave-active-class="animated fadeOutLeft" enter-active-class="animated fadeInLeft">
      <div v-if="isLogIn" class="logIn-plone">
          <p>
              <span class="iconfont">&#xe654;</span>
              <input type="text" ref="useame" maxlength="11"  v-model="clear" placeholder="手机号">
              <em class="iconfont" v-if='clear === "" ? isShow : !isShow' @click="clearValue" >&#xe61b;</em>
              <i ref="getValidate" @click="getValidate" >获取验证码</i>
          </p>
          <p>
              <span class="iconfont">&#xe605;</span>
              <input type="text" maxlength="6" ref="password" v-model="clearV" placeholder="短信验证">
              <em class="iconfont" v-if="clearV === '' ? show : !show" @click="clearVa" >&#xe61b;</em>
          </p>
          <h3>首次用手机号登录将自动为您注册，并有豪礼相送。</h3>
          <button ref='btn'>登录</button>
          <div class="logIn-a">
            <a href="javascript:;" @click="animate">账号密码登录</a>
            <a href="javascript:;">未收到验证码?</a>
          </div>
           <span class="vanish" v-if='vanish'>手机格式有误</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app-logIn',
  props: ['isLogIn', 'animate'],
  data () {
    return {
      isShow: false,
      show: false,
      clear: '',
      clearV: '',
      vanish: false,
      timer: null
    }
  },
  methods: {
    clearValue () {
      this.clear = ''
    },
    clearVa () {
      this.clearV = ''
    },
    getValidate () {
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (reg.test(this.clear)) {
        console.log('sdf')
      } else {
        this.vanish = true
      }
    }
  },
  updated () {
    if (this.$refs.getValidate != undefined &&  this.$refs.btn != undefined){
      if (this.clear.length === 11) {
        this.$refs.getValidate.style.background = '#f93'
      } else {
        this.$refs.getValidate.style.background = '#bfbfbf'
      }
      if (this.clear.length === 11 && this.clearV.length === 6) {
        this.$refs.btn.style.background = '#f93'
      } else {
        this.$refs.btn.style.background = '#bfbfbf'
      }
    }
  }

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
     width: 1.8rem
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
     background: #bfbfbf
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
  .logIn-plone .vanish
     display: inline-block
     padding: 5px 14px
     color: #fff
     border-radius: 4px
     background: rgba(0,0,0,.6)
</style>
