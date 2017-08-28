<template>
  <ul v-if="scorce.length>0" class="item">
    <li v-for="(item,index) in scorce" :class="starType">
      <span class="icon" :class="classMap[scorce[index].type]"></span><span class="text">{{scorce[index].description}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name:"star",
  props:{
    scorce:{
      type: Array,
      default: function () {
        return[
          {
            type: 1,
            description: '促销'
          },
          {
            type: 2,
            description: '特价'
          }
        ]
      }
    },
    size:{
      type: Number,
      default: 2
    }
  },

  created(){
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },

  computed:{
      starType(){
        return 'support-'+this.size;
      },
  },

}
</script>

<style>
  li{
    list-style: none;
  }
  .item{
    font-size: 0px;
  }
  .support-1{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  };
    .support-1>.icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  };
  .support-1>.decrease{
    background-image: url("decrease_1@3x.png");
  }
  .support-1>.discount{
    background-image: url("discount_1@3x.png");
  }
  .support-1>.guarantee{
    background-image: url("guarantee_1@3x.png");
  }
  .support-1>.invoice{
    background-image: url("invoice_1@3x.png");
  }
  .support-1>.special{
    background-image: url("special_1@3x.png");
  }




  .support-2{
    margin-bottom: 12px;
    line-height: 12px;
    font-size: 12px;
  };
    .support-2>.icon{
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  };
  .support-2>.decrease{
    background-image: url("decrease_2@3x.png");
  }
  .support-2>.discount{
    background-image: url("discount_2@3x.png");
  }
  .support-2>.guarantee{
    background-image: url("guarantee_2@3x.png");
  }
  .support-2>.invoice{
    background-image: url("invoice_2@3x.png");
  }
  .support-2>.special{
    background-image: url("special_2@3x.png");
  }


</style>
