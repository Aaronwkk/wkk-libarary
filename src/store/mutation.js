import * as types from './mutation-type'
import Vue from 'vue'
const mutation = {
  [types.SET_FOOD] (state, food) {
    // console.log(food)
    food.forEach((item) => {
      // item.count = 1
      Vue.set(item, 'count', 1)
    })
  },
  [types.COUNTADD] (state, item) {
    item.count++
  },
  [types.COUNTREDUCE] (state, item) {
    item.count--
  }
}
export default mutation
