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
		height: 0.45rem;
		width: 100%;
		background:#FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
	    line-height: .45rem;
	    display: block;
	    box-shadow: 0 -0.02rem 0.02rem 0 rgba(0,0,0,.15);
	    font-size: 0.1rem;
	    .cart-btn{
	    	display: block;
	    	top: auto;
		    right: auto;
		    bottom: .05rem;
		    left: .05rem;
		    position: absolute;
		    background: #65a032;
		    text-align: center;
		    color: #fff;
		    width: .5rem;
		    height: .5rem;
		    line-height: .5rem;
		    border-radius: 100%;
		    i{
		    	font-size: 0.29rem;
		    	display: block;
		    	position: relative;
		    	top: 0.08rem;
		    }
	    }
	    .add-btn{
	    		display: block;
	    		text-align: center;
	    	    float: right;
			    width: 1.8rem;
			    background: #ff8000;
			    font-size: .18rem;
			    line-height: .46rem;
			    color: #fff;
			    span{
			    	display: inline-block;
				    font-size: .14rem;
				    color: rgba(255,255,255,.8);
				    line-height: .46rem;
				    padding-right: .1rem;
			    }
			    em{
			    	font-size: .18rem;
    				line-height: .46rem;
    				color: #FFFFFF;
    				font-style:normal ;
			    }
	    }
	}
</style>