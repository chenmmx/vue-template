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
            <a-icon type="user" /><span>{{ item.title }}</span>
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
    ...mapGetters("common", ["menuList"]),
    rootSubmenuKeys() {
      let keys = this.menuList.map(item => {
        if (item.children && item.children.length > 0) {
          return item.key;
        }
      });
      return keys;
    }
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
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
