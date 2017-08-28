<template>
	<div class="picture" ref="picture">
		<ul>
			<li class="photo_wrap" v-for="(item,index) in data" @click="clickimg(item,index)" ref="photowrap" :class="{'active': current == index}">
        <div class="photo_content" :class="{'front_active': item.turn, 'back_active': !item.turn}">
            <div class="photo photo_front">
              <img :src="item.imgurl">
            </div>
            <div class="photo photo_back">
              <div class="desc">{{item.desc}}</div>
            </div>
        </div>
      </li>
		</ul>
    <ul class="icon_img">
      <li v-for="(item, index) in data" class="icon_item" @click="clickimg(item,index)" :class="{'active': index === current}">
        <div class="icon_content" :class="{'front_active': item.turn, 'back_active': !item.turn}">
          <img src="./icon_fan.png" alt="" v-if="index === current">
        </div>
      </li>
    </ul>
	</div>
</template>

<script>
import {alldata} from './data.js'
export default{
  data () {
    return {
      current: 0,
      data: [],
      oldimg: {},
      firstclick: true,
      img_sec: {
        left: {
          minw: '',
          maxw: ''
        },
        right: {
          minw: '',
          maxw: ''
        }
      }
    }
  },
  created () {
    var _this = this
    _this.data = alldata
    let len = this.data.length
    _this.current = _this.random(0, len)
    let width = document.body.clientWidth
    _this.$nextTick(() => {
      _this.initimg(alldata)
      _this.calwh(width)
      _this.Separate()
    })
//    console.log(alldata)
  },
  computed: {
  },
  methods: {
    clickimg (item, ind) {
      this.current = ind
      this.$set(item, 'turn', !item.turn)
      if (item === this.oldimg || !this.firstclick) return
      this.oldimg = item
      this.firstclick = true
//      console.log(item.turn)
      this.initimg(alldata)
      this.Separate()
    },
    initimg (data) {
      data.forEach((item) => {
        this.$set(item, 'turn', false)
      })
    },
//   获取两个值之间的一个随机数
    random (...arg) {
      let max = Math.max(...arg)
      let min = Math.min(...arg)
      let diff = max - min
      let xx = Math.floor(Math.random() * diff + min)
      return (xx)
    },
//    获取图片的宽度和高度计算区间值
    calwh (w) {
      let width = this.$refs.photowrap[0].clientWidth
      let leftwidth = w / 2 - width / 2
      let rightwidth = w / 2 + width / 2
      this.$set(this.img_sec, 'left', {minw: 0, maxw: leftwidth})
      this.$set(this.img_sec, 'right', {minw: rightwidth, maxw: w})
      console.log(this.img_sec)
    },
//    分出两个区域存放不相同的图片
    Separate () {
      let imglist = this.$refs.photowrap
      let length = imglist.length
      let leftimg = new Set()
      let rightimg = new Set()
//      左边的dom集合
      while (leftimg.size < length / 2) {
//        console.log(imglist[this.random(0, length)])
//        console.log(this.random(0, length))
        leftimg.add(imglist[this.random(0, length)])
      }
//      右边的dom集合
      imglist.forEach((item) => {
        if (!leftimg.has(item)) {
          rightimg.add(item)
        }
      })
      this.setstyle(leftimg, this.img_sec.left)
      this.setstyle(rightimg, this.img_sec.right)
//      console.log(leftimg)
    },
//    给不同区间的dom设置样式
    setstyle (arr, obj) {
      var _this = this
      let height = document.body.clientHeight
//      console.log(arr)
      arr.forEach((el) => {
        var w = _this.random(obj.minw, obj.maxw)
        let h = _this.random(0, height)
        let d = _this.random(0, 100)
//        console.log(el)
        el.style.left = w + 'px'
//        el.style.transform = `translate3d(0,${y}px,0)`;
        el.style.transform = `rotate(${d}deg)`
        el.style.top = h + 'px'
      })
    }
  }
}
</script>
<style type="text/css" lang="stylus">
  *
    margin 0
    padding 0
    width 100%
    height 100%
  .picture
    position relative
    background #333
    width 100%
    height 100%
    overflow hidden
    box-sizing border-box
    font-size 0
    .photo_wrap
      top 50%
      left 50%
      width 180px
      height 260px
      transform rotate(360deg)
      position absolute
      margin-top -130px
      margin-left -90px
      transition all 0.5s
      &.active
        top 50% !important
        left 50% !important
        transform rotate(360deg) !important
        width 240px
        height 300px
        position absolute
        margin-top -150px
        margin-left -120px
        transition all 0.5s
        z-index 100
      .photo_content
        transform-origin 0% 100%
        perspective: 800px
        transform-style: preserve-3d
        transition all 0.5s
        &.front_active
          transform translate(180px,0px) rotateY(180deg)
        &.back_active
          transform rotateY(0deg)
        .photo
          position absolute
        .photo_front
          backface-visibility:hidden
          transform rotateY(0deg)
        .photo_back
          font-size 15px
          backface-visibility:hidden
          transform rotateY(180deg)
          background pink

    .icon_img
      width 100%
      text-align center
      height 100px
      bottom 20px
      display block
      position fixed
      .icon_item
        display inline-block
        margin-left 10px
        background #fff
        height 15px
        width 15px
        border-radius 10px
        &.active
          background #fff
          padding 2px
          border-radius 5px
          height 20px
          width 20px
        &.rot_active
          transform rotate(180deg)
        .icon_content
          transition all 0.5s
          &.front_active
            transform rotateY(180deg)
          &.back_active
            transform rotateY(0deg)


</style>
