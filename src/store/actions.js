import * as types from './mutation-type'

export const setfood = function ({commit}, food) {
  console.log(food)
  commit(types.SET_FOOD, food)
}
export const addfood = function ({commit}, fooditem) {
  commit(types.COUNTADD, fooditem)
}
export const reducefood = function ({commit}, fooditem) {
  commit(types.COUNTREDUCE, fooditem)
}
