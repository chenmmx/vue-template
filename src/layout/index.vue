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
      <div class="logo">
        <img
          src="@/assets/sliderBar/logo.png"
          style="width:104px;height:14px;"
          alt=""
        />
      </div>
      <!-- Menu -->
      <app-menu />
    </a-layout-sider>
    <a-layout class="layout-main">
      <a-layout-header
        :style="{
          background: '#F7F8FA',
          padding: 0,
          height: `${headerHeight}px`,
          width: `calc(100% - ${sliderWidth}px)`
        }"
        class="fixed-header"
      >
        <nav-bar></nav-bar>
        <!-- <tags-view></tags-view> -->
      </a-layout-header>
      <a-layout-content
        id="content"
        :style="{
          margin: `${headerHeight + 10}px 16px 0`,
          overFlow: 'hidden',
          flex: 'none'
        }"
      >
        <section class="app-main-container">
          <transition mode="out-in" name="fade-transform">
            <keep-alive :include="cachedRoutes" :max="10">
              <router-view
                v-if="isRouterAlive"
                :key="key"
                style="min-height:calc(100vh - 187px);"
              />
            </keep-alive>
          </transition>
        </section>
        <a-layout-footer class="footer-copyright" style="textAlign: center">
          template Web ©2020 Created by chenmmx
        </a-layout-footer>
        <a-back-top :target="target" />
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
    // TagsView
  },
  mixins: [Media],
  data() {
    return {
      target: () => document.querySelector(".layout-main"),
      headerHeight: 50,
      sliderWidth: 200
    };
  },
  computed: {
    ...mapGetters("common", ["device", "collapse", "isRouterAlive"]),
    ...mapGetters("tagsBar", ["cachedRoutes"]),
    key() {
      return this.$route.path;
    }
  },
  watch: {
    device: {
      immediate: true,
      handler: function(val) {
        if (val === "mobile") {
          this.sliderWidth = 0;
        } else {
          this.sliderWidth = 200;
        }
        this.$store.dispatch(
          "common/changeScrollWidth",
          this.sliderWidth + 160
        );
      }
    },
    collapse(v) {
      if (this.device === "desktop") {
        this.sliderWidth = v ? 80 : 200;
        this.$store.dispatch(
          "common/changeScrollWidth",
          this.sliderWidth + 160
        );
      }
    }
  },
  methods: {
    ...mapActions("common", ["toggleCollapse"]),
    onCollapse() {
      this.toggleCollapse();
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
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  .ant-layout-sider {
    background-color: #fff;
  }
  .fixed-header {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 101;
    // box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    transition: all 0.2s;
  }
  .layout-normal {
    height: 100%;
    z-index: 101;
  }
  .ant-layout-sider-zero-width-trigger-left {
    top: 103px;
  }
  .layout-mobile {
    position: fixed;
    height: 100%;
    z-index: 102;
  }
  .logo {
    height: 60px;
    line-height: 52px;
    text-align: center;
    background: #f7f8fa;
    // margin: 16px;
  }
  .ant-layout-sider-zero-width {
    position: fixed;
    height: 100%;
  }
  .app-main-container {
    padding: 16px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  .footer-copyright {
    min-height: 70px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    background: #f8f8fa;
  }
}
</style>
