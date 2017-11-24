import loadingVue from './loading.vue';

const defaultoption = {
	type: 'top'
}

var loadingDom

export default {

	install(Vue, option){

		Vue.prototype.$loading = function(state){

			if(!loadingDom){

				let $vm = Vue.extend(loadingVue)

				loadingDom = new $vm()
				let $dom = loadingDom.$mount().$el
				document.body.appendChild($dom)

			}
			console.log('loadingDom' ,loadingDom)
			
			loadingDom.showtog = state

			// console.log(loadingDom.showtog)
			
		}

	}
}



// module.exports insall