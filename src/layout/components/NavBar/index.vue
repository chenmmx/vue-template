<template>
  <div class="nav-bar-container">
    <a-row :gutter="15">
      <a-col :xs="15" :md="24" :lg="12" :xl="12">
        <div class="left-panel">
          <!-- <a-icon
          v-show="device === 'desktop'"
          @click="handleCollapse"
          :type="collapse ? 'menu-unfold' : 'menu-fold'"
          style="font-size:20px;font-weight:bold;margin-right:10px;cursor:pointer;"
        />
        <breadcrumb v-show="device === 'desktop'"></breadcrumb> -->
          <tags-view></tags-view>
        </div>
      </a-col>
      <a-col :xs="9" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <!-- <global-search
          v-show="device === 'desktop'"
          style="margin-right:15px;"
        ></global-search> -->
          <!-- <full-screen
            style="margin-right:15px;"
            @reload="reload"
          ></full-screen>
          <a-icon
            class="right-panel-reload"
            type="sync"
            :spin="spining"
            @click="reload"
          /> -->
          <a-dropdown>
            <span style="cursor:pointer;">
              <!-- <img
                size="large"
                style="margin-right:10px;"
                src="../../assets/header.jpeg"
              ><img> -->
              <span class="header-name">glasssix</span>
              <img class="header-img" src="@/assets/header.jpeg" alt="" />
              <a-icon type="down" />
            </span>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">注销</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">个人信息</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// import GlobalSearch from "../GlobalSearch";
// import Breadcrumb from "../Breadcrumb";
import TagsView from "../TagsView";
// import FullScreen from "../FullScreen";
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  components: {
    // GlobalSearch,
    // Breadcrumb,
    // FullScreen,
    TagsView
  },
  data() {
    return {
      spining: false
    };
  },
  computed: {
    ...mapGetters("common", ["collapse", "device"])
  },
  methods: {
    // 展开-收起菜单
    handleCollapse() {
      this.$store.dispatch("common/toggleCollapse");
      if (this.device === "desktop") {
        this.reload();
      }
    },
    // 重载页面
    reload() {
      this.spining = true;
      this.$store.dispatch("common/handleReload", false);
      this.$nextTick(() => {
        this.$store.dispatch("common/handleReload", true);
      });
      setTimeout(() => {
        this.spining = false;
      }, 800);
    }
  }
};
</script>

<style lang="less" scoped>
.nav-bar-container {
  z-index: 1;
  padding: 0 20px;
  position: relative;
  height: 50px;
  overflow: visible;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 50px;
    min-height: 50px;
  }
  .right-panel {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
    height: 50px;
    .right-panel-reload {
      font-size: 20px;
      cursor: pointer;
      margin-right: 15px;
    }
    .anticon-down {
      display: none;
    }
    .header-name {
      color: #333333;
      font-weight: bold;
      font-family: MicrosoftYaHei;
    }
    .header-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 10px;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
      border: 2px solid rgba(255, 255, 255, 1);
    }
  }
}
</style>
