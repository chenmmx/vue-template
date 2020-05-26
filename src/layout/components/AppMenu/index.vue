<template>
  <div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapse"
      class="menu"
      :selectedKeys="[$route.path]"
      @select="clickMenu"
      :openKeys="openKeys"
      @openChange="onOpenChange"
    >
      <template v-for="item in menuList">
        <a-menu-item
          v-if="!item.children && item.select"
          :key="item.key"
          class="menu-item"
        >
          <div class="item-box">
            <img :src="item.icon" alt="" /><span>{{ item.title }}</span>
          </div>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubMenu from "./SubMenu";
export default {
  name: "AppMenu",
  components: {
    SubMenu
  },
  mounted() {
    this.getDefautOpenKey();
    this.$store.dispatch("common/GET_MENU_LIST");
  },
  data() {
    return {
      collapse: false,
      openKeys: []
    };
  },
  computed: {
    ...mapGetters("common", ["menuList"])
  },
  methods: {
    // 刷新页面展开选中菜单
    getDefautOpenKey() {
      let path;
      let paths = this.$route.path.split("/");
      if (paths.length >= 3) {
        path = paths[paths.length - 2];
      }
      this.openKeys = ["/" + path];
    },
    clickMenu({ key }) {
      this.$router.push(key);
    },
    onOpenChange() {}
  }
};
</script>

<style lang="less" scoped></style>
