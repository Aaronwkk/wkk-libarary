<template>
    <div>
        <h1> This is 个人中心</h1>
    </div>
</template>
<script>
  export default {
    name: 'inherit',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      this.prototype()
    },
    methods: {
//      访问器的属性
      defineProperty () {
        let book = {
          _year: 2004,
          edition: 1
        }
        Object.defineProperty(book, 'year', {
          get: function () {
            return this._year
          },
          set: function (newvalue) {
            if (newvalue > 2004) {
              this._year = newvalue
              this.edition += newvalue - 2004
            }
          }
        })
        book._year = 2005
        return book
      },
//      定义多个属性
      defineProperties () {
        let book = {
          _year: {
            value: 2004
          },
          edition: {
            value: 1
          }
        }
        Object.defineProperties(book, 'year', {
          get: function () {
            return this._year
          },
          set: function (newvalue) {
            if (newvalue > 2004) {
              this._year = newvalue
              this.edition += newvalue - 2004
            }
          }
        })
        book._year = 2005
        return book
      },
//      工厂模式
      createPeople (name, age, job) {
        let o = new Object()
        o.name = name
        o.age = age
        o.job = job
        o.sayname = function () {
          console.log(this.name)
        }
        return o
      },
//      构造函数模式
      fun () {
        function People (name, age) {
//          console.log(this)
          this.name = name
          this.age = age
          this.sayname = function () {
            console.log(this.name)
          }
        }
        let o = new Object()
//        let p = new People('tom').sayname()
        People.call(o, 'tom', '36')
//        o.sayname()
      },
//      原型模式
      prototype () {
        function People () {
        }
        People.prototype.name = 'tom'
        People.prototype.age = '34'
        People.prototype.sayname = function () {
          console.log(this.age)
        }
        let p1 = new People()
        let p2 = new People()
//        p1.sayname()
        p1.__proto__.name = 'boy'
        console.log(p1.sayname === p2.sayname)
//        都指向原型中同一个对象
        console.log(p1.__proto__)
        console.log(p1.constructor)
//        constructor指向了people函数实例
//        console.log(p2.constructor)
        console.log(p2.name)
      }
    },
    components: {}
  }
</script>
<style scoped lang="stylus">

</style>
