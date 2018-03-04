<template>
  <div class="main-content-banner content-banner">
    <div id="item-0-1"></div>
    <div class="section flex  inner-range two-ads twoBanner">  
        <a  href="#">
          <img src="https://imgqn9.fruitday.com/images/2017-11-07/caa96ee4453a25ed3e58f4a8f73e736d.jpg" title="" style="height: 73.1429px;">
        </a>
        <a class="" href="#">
            <img src="https://imgjd6.fruitday.com/images/2018-01-06/66b11add93bf19fc63fcaf73d05b8972.jpg" title="" style="height: 73.1429px;">
        </a>
    </div>
    <div class="section  bigImageBanner">
      <a  href="#">
        <img src="https://imgjd7.fruitday.com/images/2018-03-02/a18ef75febeb140a1bc88028fef4460a.gif" title="" style="width: 100%; height: 136.533px;">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-banner'
}
</script>

<style lang="scss" scoped >
  .content-banner {
       background: #f5f5f5;
       -webkit-box-lines: multiple;
        -moz-box-lines: multiple;
        -ms-box-lines: multiple;
        -o-box-lines: multiple;
        box-lines: multiple;
        padding-bottom: .15rem;
    .inner-range{
        background: white;
         height: 103px;
         padding-bottom: .8rem;
         padding: 0 0.15rem;
        a {
            display: block;
            float: left;
            width: 50%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: .2rem .05rem 0;
            img {
              width:100% ;          
           }
        } 
    }
    .bigImageBanner {
      a{
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        text-decoration: none;
      }    
    }
        
        
   
  
  }
</style>
