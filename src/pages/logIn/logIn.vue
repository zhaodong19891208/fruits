<template>
  <div class="log-in">
     <div class="logIn-header">
       <span class="iconfont">&#xe600;</span>
       <p>手机号快捷登录</p>
    </div>
    <div clss="logIn-animate">
      <app-logIn :isLogIn="isLogIn" :animate="animate"></app-logIn>
      <app-register :isLogIn="!isLogIn" :animate="animate"></app-register>
    </div>
  </div>
</template>

<script>
import AppLogIn from './app-logIn'
import AppRegister from './app-register'
export default {
  name: 'logIn',
  components: {
    AppLogIn,
    AppRegister
  },
  data () {
    return {
      isLogIn: true
    }
  },
  methods: {
    animate () {
      this.isLogIn = !this.isLogIn
    }
  }
}
</script>

<style lang='stylus' scoped >
  .logIn-header
     display: flex
  .logIn-header span
     display: block
     text-align: center
     line-height: 1rem
     width: .86rem
     height: 1rem
     color: #75a739
  .logIn-header p
     width: 3.98rem
     height: 1rem
     text-align: center
     margin-left: 1rem
     line-height: 1rem
     color: #75a739
     font-size: .34rem
  .logIn-animate
     display: flex
</style>
