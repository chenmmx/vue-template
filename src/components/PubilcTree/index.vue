<template>
  <div class="public-tree">
    <a-skeleton active :rows="7" class="skeleton">
      <a-tree>
        <template slot="custom" slot-scope="item">
          <img class="item-img" v-if="item.type === 1" :src="iconProp" alt />
          <span class="item-title" @click="handleClick(item)">{{
            item.title
          }}</span>
          <div class="button-group but_type">
            <slot name="customize" :row="item"></slot>
          </div>
        </template>
      </a-tree>
    </a-skeleton>
  </div>
</template>

<script>
export default {
  name: "PublicTree",
  props: [""],
  data() {
    return {
      loading: true,
      bodyStyle: { height: "100%" }
    };
  },

  components: {},

  mounted() {},

  methods: {
    // 节点-点击事件
    handleClick(item) {
      this.treeSelectedKeys = [item.id];
      this.$emit("click", item);
    }
  },

  filters: {}
};
</script>
<style lang="less">
.public-tree {
  width: 100%;
  height: 100%;
  background-color: #fafcfc;
  padding: 30px 20px;
  .skeleton {
    height: 100%;
  }
}
</style>
