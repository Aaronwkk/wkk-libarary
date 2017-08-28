<template>
	<section>
		<input type="" name="" @focus=''>
	</section>
</template>
<script>
	export default {
  name: 'reg',
  data(){
  	return {}
  },
  created(){
  	// this.regDemo1()
  	this.demo3()
  	// console.log(this.demo3())
  },
  methods:{
  	changenum(el) {
      console.log(el)
		// console.log(el.target.value)
		this.value=el.target.value.replace(/\D/g,'')
		// this.value=this.value.replace(/\D/g,'')
  	},
  	regDemo1(){
		// console.log(1)
		var b = "0_0 (: /-\ :) 0-0"
		// let m = b.replace(/(\D)/g, '')
		let c = /\[([0-9a-f]{4,6})\]/g.test('[2006]')
		// b.match(/\d+/g)
		// m.group(1)
		console.log(c)
  	},
  	demo2(){
  		var title = "aaa";
		var myclass = function(){}

		myclass.prototype.title = "bbb";
		console.log(myclass.prototype)
		myclass.prototype.getTitle = function(){
		    function doGetTitle(){
		    	// console.log(this.title)
		        return this.title;
		    }
		    console.log(this)
		    return doGetTitle.call(this);
		}

		var obj = new myclass();
		console.log(obj.getTitle());
  	},
  	demo3(){
  		// var str = '你好呀？#哈哈#，很#不错#';
  		// console.log(str.replace(/#(.{0,}?)#/gi, 'aaaaa'))
		// str = str.replace(/#(.*?)#/gi, function (data) {
		//     data = data.replace(/#/gi,'');
		//     return '<span class="yellow">'+data+'</span>'
		// })
		// let a = '123456aa34'
		// console.log(a.replace(/\d{7,}/, 'x'))
		let b = '$10.9,￥20.5'
		console.log(b.match(/\$\d+\.\d/))
		console.log(b.replace(/\$(\d+\.\d)/, 'x'))
  	}
  }
}
</script>
<style type="text/css">

</style>
