import Vue from 'vue'
export default {
  updimg (file, filename) {
    let param = new FormData()
    param.append('Filedata', file)
    param.append('type', filename)
    let config = {
      headers: {'Content-Type': 'multipart/form-data'}
    }
    return new Promise(function (resolve, reject) {
      Vue.axios.post('/upload', param, config)
        .then((res) => {
          if (res.data.code == 200) {
            resolve(res.data)
          } else {
            reject(res)
          }
        })
    })
  }
}


//图片上传方法，file:  filename: 