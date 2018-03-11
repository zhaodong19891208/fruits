<template>
	<div class="position" v-if="poShow">
		<div class="nav">
			<div class="position-head">
				<router-link to="/">
				<i class="fa fa-close"></i>
				</router-link>
				<div class="head-center">
					选择收货地址
				</div>
				<div class="head-add">
					新增地址
				</div>
			</div>
			<div class="search-more">
				<span class="search-pos">
					<em class="province">{{city}}</em>
					<i class="fa fa-sort-down"></i>
				</span>
				<div class="searchbar" >
	      			<i class="fa fa-search" ></i>
	      			<input type="text" name="" id="" placeholder="请输入收货地址" />
	      			
      			</div>
				
			</div>
		</div>
		<div class="more-list">
			<h5>省/市列表</h5>
			<ul>
				<li v-for="(position, i ) in positions" :key="i" @click="showCity(i)">{{position}}</li>
			</ul>
		</div>
	</div>
</template>
                    
<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	import { SETPOSITION } from '../../store/position/const'
	export default {
		name:'position',
		props:['poShow','positions','index','showCity'],
		data () {
			return {
			}
		},
		computed:{
        	...mapState({
        		'city':state=>state.position.city
        	})
        },
		methods:{
			getCity (city) {
//				console.log(this) 
	            this.$store.commit(SETPOSITION,city)
//	            console.log('hhhhhhh')
	            localStorage.city = city
	            this.$router.push({name:'Home'})
        	}
		}
	}
</script>

<style lang="scss" scoped>
	.position{
		.nav{
			height: 0.9rem;
			background: #FFFFFF;
		}
		
		.position-head{
			height: 0.92rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.fa{
			color: #76a741;
			display: inline-block;
		    float: none;
		    font-size: .4rem;
		    margin-top: 0;
		    margin-left: 0.16rem;
		}
			.head-center{
			    text-align: center;
			    font-size: .34rem;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    color: #65a032;
    			line-height: .86rem;
			}
			.head-add{
				color: #76a741;
    			display: inline-block;
    			font-size: 0.28rem;
    			margin-right: 0.16rem;
			}
		}
		.search-more{
			padding: 0 .2rem .2rem;
			position: relative;
    		display: -webkit-box;
    		border-radius:0.08rem;
    		.search-pos{
    			box-sizing: border-box;
    			display: block;
			    /*position: absolute;
			    left: 0;
			    top: 0;*/
			    width: .8rem;
			    color: #3a3a3a;
			    font-size: .32rem;
			    text-align: center;
			    height: 68px;
			    line-height: .66rem;
			    border-right: .02rem solid #dcdcdc;
			    background: #eee;
			    border-top-left-radius: 0.08rem;
			    border-bottom-left-radius: 0.08rem;
    		}
    		.searchbar{
					    box-sizing: border-box;
					    position: relative;
					    background-color: #eee;
					    /*border-radius: .1rem;*/
					    color: #878787;
					    font-size: .28rem;
					    display: -webkit-box;
							flex: 1;
					    width: 4.6rem;
					    
					    z-index: 1;
					i{
						    font-size: .32rem;
						    margin: 0 .2rem;
						    position: relative;
						    line-height: .64rem;
						   
						
					}
					input{
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    max-width: 100%;
						    padding: 0 .6rem 0 0;
						    height: .64rem;
						    background-color: transparent;
						    border: medium none;
						    outline: medium none;
						    -webkit-appearance: none;
						        line-height: normal;
						     
						       z-index: 100;
					}    
			}
			
		}
		.more-list{
			background: #FFFFFF;
			
			h5{
				display: block;
				margin: 0;
			    font-weight: 400;
			    background-color: #f5f5f5;
			    color: #878787;
			    padding: .12rem;
			    font-size: .12rem;
			}
			ul{
				margin: 0;
				padding: 0;
				display: block;
				list-style-type: disc;
				-webkit-margin-before: 2em;
			    -webkit-margin-after: 2em;
			    -webkit-margin-start: 0px;
			    -webkit-margin-end: 0px;
			    -webkit-padding-start: 40px;
				height:250px;
				overflow: auto;
			    li{
			    	position: relative;
			    	list-style: none;
			    	display: list-item;
    				text-align: -webkit-match-parent;
    				a{
    					color: #000;
					    display: block;
					    position: relative;
					    left: -0.36rem;
					    border-bottom: 1px solid #d8d8d8;
					    font-size: .36rem;
					    padding-top: .24rem;
    					padding-bottom: .24rem;
    					-webkit-tap-highlight-color: transparent;
					    background-color: transparent;
					    text-decoration: none;
    				}
			    }
			}
		}
    	
	}
</style>