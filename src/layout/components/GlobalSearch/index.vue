<template>
  <div class="global-search">
    <a-input-search
      size="small"
      placeholder="搜索"
      enter-button
      allowClear
      @focus="handleFocus"
      v-model="searchValue"
    />
    <div :class="['search-panel', showList ? 'show' : 'hide']">
      <ul class="list" v-if="searchList.length > 0">
        <li
          v-for="item in searchList"
          :key="item.key"
          :class="['list-item', item.hasChildren ? 'disabled' : '']"
          @click="handleItemClick(item.key, item.title, item.hasChildren)"
        >
          <span class="parent-title" v-if="item.parentTitle"
            >{{ item.parentTitle }} /
          </span>
          <span>{{ item.title }}</span>
        </li>
      </ul>
      <p
        v-else
        style="text-align:center;margin-top:20px;color: rgba(0, 0, 0, 0.25);"
      >
        暂无数据
      </p>
      <div class="spin" v-show="loading">
        <a-icon
          class="search-loading"
          type="loading"
          style="font-size: 24px"
          spin
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GlobalSearch",
  created() {
    this.DBgetSearchList = this._.debounce(this.getSearchList, 300, false);
  },
  data() {
    return {
      indicator: <a-icon type="loading" style="font-size: 24px" spin />,
      searchValue: "",
      loading: false,
      showList: false,
      searchList: []
    };
  },
  watch: {
    searchValue(value) {
      this.DBgetSearchList(value);
    }
  },
  computed: {
    ...mapGetters("common", ["menuList"]),
    formatMenuList() {
      let list = [];
      for (let item of this.menuList) {
        list.push(
          item.children && item.children.length > 0
            ? {
                key: item.key,
                title: item.title,
                hasChildren: true
              }
            : {
                key: item.key,
                title: item.title,
                hasChildren: false
              }
        );
        if (item.children && item.children.length > 0) {
          for (let item1 of item.children) {
            list.push({
              ...item1,
              hasChildren: false,
              parentTitle: item.title
            });
          }
        }
      }
      return list;
    }
  },
  methods: {
    addEventListener() {
      document.addEventListener("click", this.handleFunc);
    },
    removeEventListener() {
      document.removeEventListener("click", this.handleFunc);
    },
    handleFunc(e) {
      if (
        e.target.className !== "search-panel" &&
        e.target.className !== "ant-input ant-input-sm" &&
        e.target.className !==
          "ant-btn ant-btn-primary ant-btn-sm ant-input-search-button"
      ) {
        this.showList = false;
        this.removeEventListener();
      }
    },
    handleFocus() {
      this.showList = true;
      this.addEventListener();
      this.getSearchList(this.searchValue);
    },
    handleItemClick(key, title, hasChildren) {
      if (hasChildren) return;
      this.searchValue = title;
      this.$router.push(key);
    },
    getSearchList(v) {
      this.loading = true;
      let searchList = this.formatMenuList.filter(
        item =>
          item.title.includes(v) ||
          (item.parentTitle && item.parentTitle.includes(v))
      );
      setTimeout(() => {
        this.loading = false;
        this.searchList = searchList;
      }, 300);
    }
  }
};
</script>

<style lang="less" scoped>
.global-search {
  display: flex;
  align-items: center;
  position: relative;
  .search-panel {
    opacity: 0;
    position: absolute;
    top: 28px;
    width: 183px;
    height: 0px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 10px 30px 0px rgba(196, 214, 250, 0.5);
    .spin {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: rgba(255, 255, 255, 0.5);
    }
    .search-loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: #1890ff;
    }
  }
  .show {
    opacity: 1;
    top: 30px;
    height: 120px;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .hide {
    opacity: 0;
    top: 28px;
    height: 0px;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .list {
    list-style: none;
    padding-left: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .list-item {
      padding: 5px 12px;
      text-align: left;
      line-height: 22px;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: #e6f7ff;
      }
      .parent-title {
        color: rgba(0, 0, 0, 0.25);
      }
    }
    .list-item.disabled {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
