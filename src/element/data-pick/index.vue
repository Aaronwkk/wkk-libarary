<template>
  <el-date-picker
    v-model="time"
    :picker-options="pickerOptions2"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :type="type"
    :align="align"
    :value-format="valueFormat"
    :format="format"
    :unlink-panels="unlinkPanels"
    :clearable="false"
    @change="setTime"/>
</template>

<script>
import moment from 'moment';

export default{
  props: {
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    rangeSeparator: {
      type: String,
      default: '至'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    },
    type: {
      type: String,
      default: 'daterange'
    },
    align: {
      type: String,
      default: 'left'
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    unlinkPanels: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      time: [],
      pickerOptions2: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '昨天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - (3600 * 1000 * 24));
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '今天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime());
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 7));
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 30));
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 90));
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    };
  },
  created() {
    this.time = this.initTime();
    this.setTime();
  },
  methods: {
    initTime() {
      const start = moment().subtract(5, 'days').format('YYYY-MM-DD');
      const end = moment().format('YYYY-MM-DD');
      return [start, end];
    },
    setTime() {
      this.$emit('input', this.time);
    },
    reset() {
      this.time = [];
    }
  }
};
</script>

<style lang="less" scope>

</style>

