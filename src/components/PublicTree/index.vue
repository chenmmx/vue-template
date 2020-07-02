<template>
  <div class="public-tree">
    <a-tree v-bind="$attrs" v-on="$listeners" :tree-data="data">
      <template slot="custom" slot-scope="item">
        <span class="node-title">{{ item.title }}</span>
        <div class="button-group but_type">
          <slot name="custom" :row="item"></slot>
        </div>
      </template>
    </a-tree>
  </div>
</template>

<script>
export default {
  name: "PublicTree",
  props: {
    // treeNodes 数据
    treeData: {
      required: true,
      type: Array
    },
    // 是否自定义渲染
    showCustom: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.data = JSON.parse(JSON.stringify(this.treeData));
    if (this.showCustom) {
      this.recursiveTreeData(this.data);
    }
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
    // 节点点击
    handleClick(item) {
      this.$emit("click", item);
    },
    // 递归遍历树-添加属性 scopedSlots
    recursiveTreeData(data) {
      if (data) {
        for (let item of data) {
          item.key = item.id;
          item.scopedSlots = { title: "custom" };
          if (item.children) {
            this.recursiveTreeData(item.children);
          }
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.public-tree {
  height: 100%;
  background: rgba(250, 252, 252, 1);
  border-radius: 5px;
  min-height: calc(100vh - 187px);
  overflow: hidden;
  /deep/ .ant-tree {
    line-height: 2;
    .ant-tree-title {
      display: flex;
      align-items: center;
    }
    .ant-tree-node-selected {
      .node-title {
        color: #2c8cec;
      }
    }
    .ant-tree-node-content-wrapper {
      width: 80%;
    }
    li {
      position: relative;
    }
    .ant-tree-checkbox {
      margin: -3px 4px 0 2px !important;
    }
    .ant-tree li ul {
      margin: 0;
      padding: 0 0 0 18px;
    }
    .node-title {
      color: #333;
      display: inline-block;
      width: 85%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .button-group {
      i {
        &:hover {
          color: #5862cb;
        }
      }
    }
    .but_type {
      right: 5px;
      position: absolute;
      width: 14%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
