<!--Author: wkk-->
<template>
    <div class="calen">
      <div class="title">
        <div class="left" @click="dateRefresh(-1)">{{lastDay}}</div>
        <div class="center">{{titledata}}</div>
        <div class="right" @click="dateRefresh(+1)">{{nextDay}}</div>
      </div>
      <div class="dayDontent">
        <slot>

        </slot>
        <ul class="week_list">
          <li class="day_item" v-for="(item, index) in weeklist" :key="index">{{item}}</li>
        </ul>
        <ul class="day_list">
          <li class="day_item" v-for="(item, index) in list" :key="index" @click="select(item, index)">
            <span class="item-content" :class="[{'default': item.date.d === today.d && item.date.m === today.m}, {'active': item.date.d === selectDay}]">
              {{item.date.d}}
            </span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import { initNowDayList } from './tool.js'
  import map from './tool.js'
  export default {
    name: '',
    data () {
      return {
        list: [],
        selectDay: map.map.d,
        today: {},
        ind: '',
        weeklist: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ,'Sun' ]
      }
    },
    computed: {},
    created () {
      this.today.d = map.map.d
      this.today.m = map.map.m + 1
      this.dateRefresh(0)
      console.log(this.today.m)
    },
    methods: {
      dateRefresh (n) {
        let obj = initNowDayList(n)
        this.list = obj.list
        this.titledata = obj.date.nowday
        this.nextDay = obj.date.nextDay
        this.lastDay = obj.date.lastDay
      },
      select (item, ind) {
        if (!item.date.d) return
        this.selectDay = item.date.d
        console.log(item, ind)
      }
    },
    components: {}
  }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/variable"
  .calen
    .title
      background #fff
      display flex
      font-size 20px
      .left
        flex 1
        line-height 30px
        height 30px
        text-align left
        font-size 16px
      .right
        font-size 16px
        text-align right
        flex 1
      .center
        flex 1
        text-align center
    .dayDontent
      background #fff
      height 200px
      font-size 20px
      .week_list
        height 40px
        line-height 40px
      .day_list, .week_list
        width: 100%
        padding 0 20px
        box-sizing border-box
        background #fff
        overflow: hidden
        font-size: 16px
        .day_item
          text-align center
          display: inline-block
          width: 14.285%
          /*margin 2%*/
          overflow hidden
          box-sizing border-box
          height 46px
          cursor: default
          .item-content
            color #000
            display inline-block
            border-radius 50%
            width 36px
            height 36px
            line-height 36px
            &.default
              border 1px solid #8e75ff
            &.active
              color #fff
              background: #8e75ff;

</style>
