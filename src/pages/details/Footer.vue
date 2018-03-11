<template>
	<div class="foot">
		<a href="#" class="cart-btn">
			<i class="fa fa-shopping-cart"></i>
		</a>
		<a href="#" class="add-btn">
			<span>明日达</span>
			<em>加入购物车</em>
		</a>
	</div>
</template>

<script>
	export default{
		name:"foot"
	}
</script>

<style lang="scss" scoped>
	.foot{
		height: 0.9rem;
		width: 100%;
		background:#FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
	    line-height: .9rem;
	    display: block;
	    box-shadow: 0 -0.04rem 0.04rem 0 rgba(0,0,0,.15);
	    font-size: 0.2rem;
	    .cart-btn{
	    	display: block;
	    	top: auto;
		    right: auto;
		    bottom: .1rem;
		    left: .1rem;
		    position: absolute;
		    background: #65a032;
		    text-align: center;
		    color: #fff;
		    width: 1rem;
		    height: 1rem;
		    line-height: 1rem;
		    border-radius: 100%;
		    i{
		    	font-size: 0.58rem;
		    	display: block;
		    	position: relative;
		    	top: 0.16rem;
		    }
	    }
	    .add-btn{
	    		display: block;
	    		text-align: center;
	    	    float: right;
			    width: 3.6rem;
			    background: #ff8000;
			    font-size: .36rem;
			    line-height: .92rem;
			    color: #fff;
			    span{
			    	display: inline-block;
				    font-size: .28rem;
				    color: rgba(255,255,255,.8);
				    line-height: .92rem;
				    padding-right: .2rem;
			    }
			    em{
			    	font-size: .36rem;
    				line-height: .92rem;
    				color: #FFFFFF;
    				font-style:normal ;
			    }
	    }
	}
</style>