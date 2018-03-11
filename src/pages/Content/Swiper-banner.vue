<template>
	<div class="fruit-banner">
		<div class="box" v-for="(img,i) in info">
			<div class="img-box">
				<img id="img-box" :src="img.image"/>
			</div>
			<p>{{img.title}}</p>
			<div class="price">
				<span class="money">
					￥{{img.price}}/
					<em>{{img.volume}}</em>
				</span>
				<i class="fa fa-plus-circle fa-2x"></i>
			</div>
		</div>	
		
	</div>
	
</template>

<script>
	export default {
		name:'fruit-banner',
		props:['info']
	}
</script>

<style lang="scss" >
	.fruit-banner{
	    height: 170px;
	    width: 375px;
	    overflow-x: scroll;
	    display: flex;
	    display: -webkit-box;
	    flex-wrap: nowrap;
	    overflow-y: hidden;
		.box{
			width: 112px;
			height: 170px;
			margin-right: 10px;
			padding: .2rem .16rem .3rem;
			padding-bottom: 0;
			.img-box{
				#img-box{
					width: 1.2rem;
					height: 1.2rem;
				}
			}
			p{
				font-size: .26rem;
			    color: #3a3a3a;
			    text-align: center;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    margin-top: .24rem;	
			}
			.price{
				display: -webkit-box;
				position: relative;
				span{
				    text-align: center;
					font-size: .24rem;
					display: block;
				    color: #ff8000;
				    width: 100%;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    em{
				    	color: #ff8000;
				    	font-size: .2rem;
				    	font-style: normal;
				    	text-align: center;
				    	white-space: nowrap;
				    }
				}
				.fa-plus-circle{
					    position: absolute;
					    top: -.09rem;
					    right: -0.03rem;
					    width: 1.48rem;
					    height: .8rem;
					    text-align: right;
					    line-height: .7rem;
					    font-size: 20px;
					    font-style: normal;
					    -webkit-font-smoothing: antialiased;
					    color: #ff8000;
				}
			}
		}
	}
</style>
