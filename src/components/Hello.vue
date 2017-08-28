<template>
  <div class="hello">
    hello music
  </div>
</template>

<script>
import api from 'api/post.js'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello
  font-size: 0.24rem
</style>
