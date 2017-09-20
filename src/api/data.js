// import Vue from 'vue'
import axios from 'axios'

let api = axios.get('/api/goods').then(function (res) {
  console.log(res)
})

export default api
