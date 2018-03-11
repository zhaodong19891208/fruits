<template>
	<div class="info">
		<div class="info-box">
			<h3>{{contents.product_name}}</h3>
			<h4>{{contents.product_desc}} </h4>
			<div class="price">
				<small class="price-one">￥</small>
				<em class="price-two">59</em>
				<small class="price-one">.9</small>
			</div>
			<div class="size">
				<span class="size-one active-size">
					<strong>6个</strong>
					<small>明日达</small>
				</span>
				<span class="size-two">
					<strong>12个</strong>
					<small>明日达</small>
				</span>
				<em class="time">最快明天09:00-18:00送达</em>
			</div>
		</div>
		<div class="position">
			<span>送至</span>
			<h4>
				<i class="fa fa-location-arrow"></i>
				{{city}}
			</h4>
		</div>
		<div class="safe">
			<span>
				<i class="fa fa-check-circle-o"></i>
				48小时退换货
			</span>
			<span>
				<i class="fa fa-check-circle-o"></i>
				全程冷链
			</span>
			<span>
				<i class="fa fa-check-circle-o"></i>
				果园标准
			</span>
			<span>
				<i class="fa fa-check-circle-o"></i>
				全球直采
			</span>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import config from '../../../modules/config'
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default{
		name:'info',
		data (){
			return {
				contents:{},
				city:''
			}
		},
		computed:{
			...mapState({
				id:state=>state.position.id,
				
			})
		},
		methods:{
			getContents(){
				axios.get(config.host+'gy/v3/product/detail?store_id_list=3&product_id='+this.id+'&store_id=3&delivery_code=3').then(res =>{
					this.contents = res.data.data.productInfo
					console.log(this.contents)
				})
			}
		},
		created(){
			this.getContents()
			this.city=localStorage.city
		}
		
	}
</script>

<style lang="scss" scoped>
	.info{
		
		overflow: scroll;
		.info-box{
			padding: .1rem;
		    margin-bottom: .1rem;
		    background: #fff;
		    text-align: center;
		    height:1.72rem;
		    h3{
	    	    font-size: .18rem;
				color: #3a3a3a;
				margin: 0 0 .05rem;
			    font-weight: 400;
			    line-height: 1;
		    }
		    h4{
		    	font-size: .14rem;
    			color: #878787;
    			margin: 0 0 .05rem;
			    font-weight: 400;
			    line-height: 1;
		    }
		    .price{
		    	margin-bottom: 0.1rem;
		    	margin: 0;
		    	padding: 0;
		    	text-align: center;
		    	.price-two{
		    		font-size: 0.3rem;
		    		color: #ff8000;
		    	}
		    	.price-one{
		    		font-size: 0.12rem;
		    		color: #ff8000;
		    		font-weight: 300;
		    	}
		    }
		    .size{
		    	margin: 0;
		    	padding: 0;
		    	color: #3A3A3A;
		    	height: 0.66rem;
		    	.size-one{
		    		width: 0.72rem;
		    		display: inline-block;
		    		border-color: #ff8000;
				    background: #FFFFFF;
				    color: #3A3A3A;
				    height: 0.4rem;
				    min-width: .5rem;
				    border: .01rem solid #dcdcdc;
				    border-radius: .04rem;
				    padding: .04rem .1rem;
				    margin: 0 .05rem;
				    font-size: .14rem;
				    
				    line-height: 1.4;
				    color: #3a3a3a;
				    text-align: center;
				    margin-bottom: .1rem;
				    strong{
				    	font-weight: 300;
				    	font-size: 0.14rem;
				    	
				    }
				    small{
				    	display: block;
				    	font-size: 0.08rem;
				    	
				    }
		    	}
		    	.size-two{
		    		width: 0.72rem;
		    		border-color: #ff8000;
				    background: #FFFFFF;
				    color: #fff;
				    display: inline-block;
				    min-width: .5rem;
				    border: .01rem solid #dcdcdc;
				    border-radius: .04rem;
				    padding: .04rem .1rem;
				    margin: 0 .05rem;
				    font-size: .14rem;
				    height: 0.4rem;
				    line-height: 1.4;
				    color: #3a3a3a;
				    text-align: center;
				    margin-bottom: .1rem;
				    strong{
				    	font-weight: 300;
				    	font-size: 0.14rem;
				    	
				    }
				    small{
				    	display: block;
				    	font-size: 0.08rem;
				    	
				    }
		    	}
		    	.active-size{
		    		background:#ff8000;
		    		color: #FFFFFF;
		    	}
		    	.time{
			    		font-size: .1rem;
					    display: block;
					    color: #ff8000;
		    	}
		    }
		}
		.position{
			height: 45px;
			background: #FFFFFF;
			margin-top: 0.1rem;
			position: relative;
		    padding: .1rem .1rem .1rem .45rem;
		    margin-bottom: .1rem;
		    
			span{
				top: .15rem;
			    right: auto;
			    bottom: auto;
			    left: .1rem;
			    position: absolute;
			    font-size: .12rem;
			    color: #878787;
			}
			h4{
				margin: 0;
			    height: .25rem;
			    font-size: .13rem;
			    line-height: .25rem;
			    font-weight: 400;
			    color: #3a3a3a;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    i{
			    	font-size: 16px;
			    	color: #ff8000;
			    }
			}
		}
		.safe{
			height:0.4rem ;
			position: relative;
		    padding: .1rem .1rem;
		    margin-bottom: .1rem;
		    background: #fff;
		    margin-top: 0.1rem;
		    span{
		    	float: left;
			    padding: .02rem .05rem .02rem 0;
			    font-size: .1rem;
			    color: #bfbfbf;
			    i{
			    	/*border-color: #ff8000;*/
    				color: #ff8000;
    				width: .14rem;
				    height: .14rem;
				    margin-right: 0;
				    /*border: .01rem solid #bfbfbf;*/
				    border-radius: 100%;
				    font-size: .15rem;
			    }
		    }
		}
	}
</style>