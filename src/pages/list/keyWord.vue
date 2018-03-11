<template>
  <div class="key-word">
    <p class="hot">热门搜索</p>
    <div class="hot-key">
        <a href="">橙</a>
        <a href="">提子</a>
        <a href="">樱桃</a>
        <a href="">苹果</a>
        <a href="">火龙果</a>
        <a href="">瓜</a>
        <a href="">羊蝎子</a>
        <a href="">雪花鲳</a>
        <a href="">香蕉</a>
    </div>
  </div>
</template>
<script>
export default{
  name: 'keyWord'
}
</script>
<style lang = "scss" scoped>
    .key-word{
        margin-top:55px;
        padding-top: 0.2rem;
        padding-left: .1rem;
        padding-right: .1rem;
        .hot{
            color: #878787;
            font-weight: lighter;
            margin-bottom: .05rem;
            font-size: 14px;
        }
        .hot-key{
            margin-left: -.04rem;
            margin-right: -.04rem;
            a{
                color: #3a3a3a;
                font-weight: 300;
                display: inline-block;
                padding: .07rem .08rem;
                margin: .1rem .04rem 0;
                background-color: #f1f1f1;
                border-radius: .05rem;
                max-width: 1.8rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
            }
        }
    }
</style>
