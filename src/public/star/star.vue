<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" key="index"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
  name:"star",
  props:{
      size:{
        type:Number,
        default: 48
        },
      scorce:{
        type:Number,
        default: 5
        }
    },
  computed:{
      starType(){
        return 'star-'+this.size;
      },
      itemClasses(){
      let result = [];
      let scorce = Math.floor(this.scorce*2)/2;
      let hashalf = scorce % 1 !==0;
      let integer = Math.floor(scorce);
      for(let i=0 ; i<integer ; i++ ){
        result.push(CLS_ON);
      }
      if (hashalf) {
        result.push(CLS_HALF);
      }
      while(result.length<LENGTH){
        result.push(CLS_OFF);
      }
      return result;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .star{
    font-size: 0;
  };
  .star-item{
      display: inline-block;
      background-repeat: no-repeat; 
  }
  .star-48>.star-item{ 
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
  };
   .star-48>.on{
    background-image: url('star48_on@3x.png');
  };
   .star-48>.half{
    background-image: url('star48_half@3x.png');
  };
   .star-48>.off{
    background-image: url('star48_off@3x.png');
  }
    .star-36>.star-item{ 
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
  };
   .star-36>.on{
    background-image: url('star48_on@3x.png');
  };
   .star-36>.half{
    background-image: url('star48_half@3x.png');
  };
   .star-36>.off{
    background-image: url('star48_off@3x.png');
  }
    .star-24>.star-item{ 
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
  };
   .star-24>.on{
    background-image: url('star48_on@3x.png');
  };
   .star-24>.half{
    background-image: url('star48_half@3x.png');
  };
   .star-24>.off{
    background-image: url('star48_off@3x.png');
  }

</style>


<!-- <headerr :size='36' :scorce='4.5'></headerr> -->