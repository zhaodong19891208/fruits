<template>
  <div class="drop-down" v-if="isDropShow">
    <ul class="drop-down-list">
        <li class="item" v-for="(itme, i) in itmes" :key="i"><a href="javascript:;">{{itme}}</a></li>
    </ul>
    <i class="fa fa-close" @click="close"></i>
  </div>
</template>
<script>
export default{
  name: 'dropDown',
  props: ['isDropShow', 'close', 'itmes'],
  data () {
    return {
      dropdown: []
    }
  }
}
</script>
<style lang = "scss" scoped>
    .drop-down{
        position: fixed;
        top: 55px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        padding-left: 0.1rem;
        .drop-down-list{
            .item{
                line-height: 1;
                font-size: .16rem;
                a{
                    box-sizing: border-box;
                    display: inline-block;
                    padding: .16rem 0;
                    border-bottom: 1px solid #eee;
                    color: #3a3a3a;
                    width: 100%;
                    font-weight: lighter;
                }
            }
        }
        .fa-close{
            position: absolute;
            right: 0.48rem;
            top: -0.42rem;
            color: #878787;
            font-weight: 300;
        }
    }
</style>
