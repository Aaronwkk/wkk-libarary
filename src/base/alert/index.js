// var alert = {};
// alert.install = function (Vue, options) {
//   Vue.prototype.$alert = function (tips, el) {
//     let a = Vue.extend({
//       template: '<div class="bgmask alert">' +
//       '<div class="bgmask-alert">'
//       + tips + '</div>' + '</div>'
//     })
//     let p1 = new a().$mount().$el
//     console.log(1111,p1)
//     document.body.appendChild(p1)
//     setTimeout(function () {
//       document.body.removeChild(p1)
//     }, 1500)
//   }
// }
// module.exports = alert;

let alert = {}

let dom1

alert.install = function(Vue, options) {

  var defaultOpt = {
    type: 'alert_top',
    duration: '2500'
  }

  for(var pro in options){
    // console.log(pro)
    defaultOpt[pro] = options[pro]
  }
  console.log(defaultOpt)

  Vue.prototype.$alert = function(tips) {
    let show = true
    let type = defaultOpt.type
    let tep = '<div class="bgmask plug_alert" :class = "style"><div v-show = "show" class="bgmask-alert" >{{msg}}</div></div>'

    if(!dom1){

      let dom1 = Vue.extend({
            data: function() {
              return {
                show: show,
                msg: tips,
                style: type 
              }
            },
            template: tep
          })

      var domVm = new dom1()

      let dom = domVm.$mount().$el
      document.body.appendChild(dom)
      console.log(1313151,domVm)
    }

    domVm.msg = tips
    domVm.show = show
    domVm.type = defaultOpt.type

  }
}

module.exports = alert