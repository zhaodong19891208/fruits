<template>
	<div class="position">
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
				<li><a href="javascript:;" v-for="position in positions" :key="position" @click="getCity(position)">{{position}}</a></li>
			</ul>
		</div>
	</div>
</template>
                    
<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	import { SETPOSITION } from '../../../store/position/const'
	export default {
		name:'position',
		data () {
			return {
				positions:['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东',
'河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','甘肃','青海','宁夏','新疆','台湾','香港','澳门']
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
			height: 0.46rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.fa{
			color: #76a741;
			display: inline-block;
		    float: none;
		    font-size: .2rem;
		    margin-top: 0;
		    margin-left: 0.08rem;
		}
			.head-center{
			    text-align: center;
			    font-size: .17rem;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    color: #65a032;
    			line-height: .43rem;
			}
			.head-add{
				color: #76a741;
    			display: inline-block;
    			font-size: 0.14rem;
    			margin-right: 0.08rem;
			}
		}
		.search-more{
			padding: 0 .1rem .1rem;
			position: relative;
    		display: -webkit-box;
    		border-radius:0.04rem;
    		.search-pos{
    			box-sizing: border-box;
    			display: block;
			    /*position: absolute;
			    left: 0;
			    top: 0;*/
			    width: .8rem;
			    color: #3a3a3a;
			    font-size: .16rem;
			    text-align: center;
			    height: 34px;
			    line-height: .33rem;
			    border-right: .01rem solid #dcdcdc;
			    background: #eee;
			    border-top-left-radius: 0.04rem;
			    border-bottom-left-radius: 0.04rem;
    		}
    		.searchbar{
					    box-sizing: border-box;
					    position: relative;
					    background-color: #eee;
					    /*border-radius: .05rem;*/
					    color: #878787;
					    font-size: .14rem;
					    display: -webkit-box;
							flex: 1;
					    width: 2.3rem;
					    
					    z-index: 1;
					i{
						    font-size: .16rem;
						    margin: 0 .1rem;
						    position: relative;
						    line-height: .32rem;
						   
						
					}
					input{
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    max-width: 100%;
						    padding: 0 .3rem 0 0;
						    height: .32rem;
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
				-webkit-margin-before: 1em;
			    -webkit-margin-after: 1em;
			    -webkit-margin-start: 0px;
			    -webkit-margin-end: 0px;
			    -webkit-padding-start: 40px;
			    li{
			    	position: relative;
			    	list-style: none;
			    	display: list-item;
    				text-align: -webkit-match-parent;
    				a{
    					color: #000;
					    display: block;
					    position: relative;
					    left: -0.18rem;
					    border-bottom: 1px solid #d8d8d8;
					    font-size: .18rem;
					    padding-top: .12rem;
    					padding-bottom: .12rem;
    					-webkit-tap-highlight-color: transparent;
					    background-color: transparent;
					    text-decoration: none;
    				}
			    }
			}
		}
    	
	}
</style>