<template>
  <a-layout id="layout">
    <a-layout-sider
      breakpoint="lg"
      :collapsed-width="device === 'mobile' ? 0 : 80"
      :collapsed="collapse"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      :class="[device === 'mobile' ? 'layout-mobile' : 'layout-normal']"
    >
      <!-- LOGO -->
      <div class="logo" />
      <!-- Menu -->
      <app-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        :style="{ background: '#fff', padding: 0, height: '50px' }"
      >
        <nav-bar></nav-bar>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px 0',
          minHeight: 'calc(100vh - 127px)',
          overFlow: 'hidden'
        }"
      >
        <section class="app-main-container">
          <transition mode="out-in" name="fade-transform">
            <router-view
              v-if="isRouterAlive"
              :key="key"
              style="min-height:78vh;"
            />
          </transition>
        </section>
        <a-layout-footer class="footer-copyright" style="textAlign: center">
          Glasssix Web ©2020 Created by Frontend Group
        </a-layout-footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { AppMenu, NavBar } from "./components";
import { mapGetters, mapActions } from "vuex";
import Media from "./mixin/Media";
export default {
  name: "Layout",
  components: {
    AppMenu,
    NavBar
  },
  mixins: [Media],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("common", ["device", "collapse", "isRouterAlive"]),
    key() {
      return this.$route.path;
    }
  },
  watch: {
    device(val) {
      console.log("device", val);
    }
  },
  methods: {
    ...mapActions("common", ["TOGGLE_COLLAPSE"]),
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
      this.TOGGLE_COLLAPSE();
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
};
</script>

<style lang="less">
#layout {
  height: 100%;
  .layout-normal {
    height: 100%;
    z-index: 10001;
  }
  .layout-mobile {
    position: fixed;
    height: 100%;
    z-index: 10001;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .ant-layout-sider-zero-width {
    position: fixed;
    height: 100%;
  }
  .app-main-container {
    padding: 24px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .footer-copyright {
    min-height: 70px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
  }
}
</style>
