<template>
  <div class="nav-bar-container">
    <a-row :gutter="15"></a-row>
    <a-col :xs="4" :md="12" :lg="12" :xl="12">
      <div class="left-panel">
        <a-icon
          v-show="device === 'desktop'"
          @click="handleCollapse"
          :type="collapse ? 'menu-unfold' : 'menu-fold'"
          style="font-size:20px;font-weight:bold;margin-right:10px;cursor:pointer;"
        />
        <breadcrumb v-show="device === 'desktop'"></breadcrumb>
      </div>
    </a-col>
    <a-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12"></a-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("common", ["collapse", "device"])
  },
  methods: {
    // 展开-收起菜单
    handleCollapse() {
      this.$store.dispatch("common/TOGGLE_COLLAPSE");
    }
  }
};
</script>

<style lang="less" scoped>
.nav-bar-container {
  padding: 0 10px;
  position: relative;
  height: 50px;
  overflow: hidden;
  user-select: none;
  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 50px;
    min-height: 50px;
  }
}
</style>
