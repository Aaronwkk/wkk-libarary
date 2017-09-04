<template>
    <div class="cart">
      <ul>
        <li v-for="item in food">
          <span>{{item.name}}</span><br>
          <button @click="reducefood">减</button>
            <span>{{item.count}}</span>
          <button @click="addfood">加</button>
        </li>
      </ul>
      <span>{{count}}</span>
    </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default{
    data () {
      return {}
    },
    computed: {
      ...mapState(['count', 'food']),
      ...mapActions(['setfood', 'addfood', 'reducefood'])
    },
    created () {
      this.$store.dispatch('setfood', this.food)
//      console.log('1', this.$store.state.food)
    }
  }
</script>
<style scoped lang="stylus">
  .cart
    font-size 0.24rem
</style>
