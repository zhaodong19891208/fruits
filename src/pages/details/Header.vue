<template>
	<div class="detail-header">
		<div class="left">
			<router-link :to="{ name: 'home'}"  tag="li" class="fa fa-angle-left"></router-link>
		</div>
		<div class="center">
			<ul>
				<li class="active">商品</li>
				<li>详情</li>
				<li>评价</li>
			</ul>
		</div>
		<div class="right">
			<i class="fa fa-ellipsis-h"></i>
		</div>
	</div>
</template>

<script>
	export default{
		name:'detail-header'
	}
</script>

<style lang="scss" scoped>
	.detail-header{
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		height: 0.9rem;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		
		.left{
			.fa-angle-left{
				display: block;
				text-align: center;
    			padding-left: .02rem;
    			width: .8rem;
			    color: #75a739!important;
			    font-size: .44rem;
			    font-style: normal;
			}
		}
		.center{
			ul{
				font-size: .32rem;
			    text-align: center;
			    color: #3a3a3a;
			    margin: 0;
			    padding: 0;
			    position: relative;
			    left: -0.2rem;
				li{
					float: left;
					margin: 0 .12rem;
				    height: .86rem;
				    line-height: .9rem;
				    display: inline-block
				}
				.active{
					    border-bottom: .04rem solid #65a032;
    					color: #65a032;
				}
			}
		}
		.right{
			font-size: 0.8rem;
			color: #75a739;
			line-height: 0.86rem;
			margin-right: 0.4rem;
			    
		}
		
	}
</style>