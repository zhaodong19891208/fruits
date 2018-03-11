<template>
	<div class="detail">
		<detail-header></detail-header>
		<div class="box">
			<detail-banner></detail-banner>
			<detail-info></detail-info>
		</div>
		
		<detail-footer></detail-footer>
	</div>
</template>

<script>
	import DetailHeader from './Header.vue'
	import DetailBanner from './Banner.vue'
	import DetailInfo from './Info.vue'
	import DetailFooter from './Footer.vue'
	export default{
		name:'detail',
		components:{DetailHeader,DetailBanner,DetailInfo,DetailFooter}
	}
</script>

<style lang="scss" scoped>
	.box{
		flex: 1;
		margin-top: 0.45rem;
		height: 5.77rem;
		overflow: auto;
		z-index: 1;
	}
</style>