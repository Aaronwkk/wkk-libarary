<template>
	<section>
		<div>什么是类数组，类数组，对象，数组的相互转换</div>
	</section>
</template>
<script>
	export default {
  name: 'reg',
  data(){
  	return {}
  },
  created(){
  	// this.argue(1,2)
  	this.spread()
  },
  methods:{

	  	argue: function(...value)  {
		// 类数组示例：
	  	var aa = {'0':1,'1':2,'2':3,length:3}
		let dd = Array.prototype.join.call(aa);//'+gg+love++meimei'
		console.log(dd)
		console.log(aa)
	// *************************************
		// 类数组转换成数组的方法	
	  	let c = Array.prototype.slice.call(arguments)
	    console.log(c) 
	  	},

	  	array: function(...value)  {
			let obj = [1, 2, 3]
			// 检测是否为数组方法
			let a = Object.prototype.toString.call(obj)
		    console.log(a)
	      },

	  	spread(){
		  let arrayLike = {
		    '0': 'a',
		    '1': 'b',
		    '2': 'c',
		    length: 3
		 };
			console.log(Array.prototype)
			// console.log(Array.from(arrayLike))
	  	}
  	}
}
</script>
<style type="text/css">
	
</style>