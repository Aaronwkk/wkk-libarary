<template>
  <transition name="fade">
    <div class="bgmask" v-show = 'showtog'>
      <div class="bgmask-loading" >
        <img src="./loading.png" class="imgstyle" @click="hide">
        <div class="font_style">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
      name: '',
      data() {
        return {
          showtog: true,
          text: '加载中...'
        }
      },
      methods:{
        show(){
          this.showtog = true
        },
        hide(){ 
          this.showtog = false
        }
      }
    }
</script>

<style scoped>
  .bgmask{
    position: fixed;
    top: 50%;
    margin-top: -40px; 
    left: 50%;
    margin-left: -50px;
  }
  .bgmask-loading{
    text-align: center;
    display: block;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    height: 90px;
    width: 100px;
    padding-top: 10px;
  }
  .bgmask-loading img{
    animation: loadingAn 1s infinite linear;
  }
  .font_style{
    color: #fff;
    font-size: 14px;
  }

  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
     transition: all 2s;
  }

/*.picker-fade-enter-active, .picker-fade-leave-active{
    transition: all .3s
}
.picker-fade-enter, .picker-fade-leave-to{
    opacity: 0;
}*/

  @keyframes loadingAn{
    from {
      transform:rotate(0deg)
    }
    to {
      transform:rotate(360deg)
    }
  }


  /*.bgmask.alert {
    z-index: 1000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .bgmask {
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  .bgmask.alert .bgmask-loading {
    width: 90px;
    height: 90px;
    display: flex;
    background: rgba(58, 58, 58, 0.9);
    border-radius: 6px;
  }
  .imgstyle{
    margin: auto;
    height: 50px;
    display: inline-block;
    width: 50px;
  }*/
</style>
