<template>
  <div>
    <el-dialog
      :visible.sync="state"
      title="筛选"
      width="750px"
    >
      <template v-for="(father, ind) in list">
        <span
          v-if="father.children"
          :key="ind"
          class="title">
          {{ father.label }}
        </span>
        <el-checkbox
          v-for="(item, index) in father.children"
          v-if="!item.alwaysShow"
          :key="ind+ '-' +index"
          v-model="item.show"
          :class="{'checkbox_ind': index%5 === 0}"
          class="checkbox-style"
        >
          {{ item.label }}
        </el-checkbox>
      </template>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button @click="selectAll()">全 选</el-button>
        <el-button @click="state = false">取 消</el-button>
        <el-button
          type="primary"
          @click="confirmForm()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import deepCopy from 'common/deepCopy';

export default{
  props: {
    tableData: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      state: false,
      radio: false,
      list: []
    };
  },
  watch: {
    tableData() {
      this.list = deepCopy(this.tableData);
    }
  },
  created() {
    this.initList(this.tableData);
    this.list = deepCopy(this.tableData);
  },
  methods: {
    show() {
      this.state = true;
    },
    change(item) {
      this.$set(item, 'show', !item.show);
    },
    selectAll() {
      this.list.forEach((item) => {
        if (item.children) {
          item.children.forEach((child) => {
            this.$set(child, 'show', true);
          });
        }
      });
    },
    initList(arr) {
      arr.forEach((item) => {
        this.$set(item, 'show', true);
        if (item.children) {
          let count = 0;
          item.children.forEach((child) => {
            if (!child.show) {
              count += 1;
            }
          });
          if (count === item.children.length) {
            this.$set(item, 'show', false);
          }
        }
      });
    },
    confirmForm() {
      this.initList(this.list);
      this.$emit('change', this.list);
      this.state = false;
    },

  },
};
</script>
<style scope lang="less">
  .title{
    display: block;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    margin-left: 6px;
  }
  .checkbox_ind{
    margin-left: 0px !important;
  }
  .checkbox-style{
    width: 118px
  }
</style>
