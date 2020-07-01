<template>
  <div class="public-top-bar">
    <a-row :gutter="15">
      <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="panel-left">
        <a-row :gutter="15" style="width:100%;">
          <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <a-input-group compact style="display:flex;">
              <a-select v-if="searchList" v-model="searchKey">
                <a-select-option
                  v-for="item in searchList"
                  :key="item.key"
                  :value="item.key"
                >
                  {{ item.value }}
                </a-select-option>
              </a-select>
              <a-input
                allow-clear
                class="search"
                placeholder="搜索"
                style="width: 80%"
                v-model="searchValue"
              />
            </a-input-group>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
            <div class="btn-group">
              <a-button class="btn" type="primary" @click="onSearch"
                >搜索</a-button
              >
            </div>
            <div class="btn-group" v-for="item in topBarsBtns" :key="item.name">
              <a-button class="btn" @click="item.click && item.click()">{{
                item.name
              }}</a-button>
            </div>
            <a-button
              class="btn"
              @click="isAdvancedSearch = !isAdvancedSearch"
              :type="isAdvancedSearch ? 'primary' : null"
              >{{ isAdvancedSearch ? "收起" : "高级搜索" }}</a-button
            >
          </a-col>
        </a-row>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="panel-right">
        <slot name="panel-right"></slot>
      </a-col>
    </a-row>
    <a-row v-if="isAdvancedSearch" style="padding:12px 0 14px">
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        class="advanced-panel"
      >
        <slot name="advanced"></slot>
        <a-button type="primary">查询</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "PublicTopBar",
  mounted() {
    this.searchKey = this.searchList && this.searchList[0].key;
    console.log(this.searchKey);
  },
  props: {
    // topbar按钮
    topBarsBtns: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: "搜索"
    },
    searchList: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      moment,
      // 是否显示高级搜索
      isAdvancedSearch: false,
      highSearchText: "高级搜索",
      // 默认展示的搜索类别
      searchKey: "",
      searchValue: ""
    };
  },
  methods: {
    // 搜索
    onSearch() {
      this.$emit("search", {
        key: this.searchKey,
        value: this.searchValue
      });
    }
  }
};
</script>

<style lang="less">
.advanced-panel {
  & > span {
    margin-right: 24px;
    margin-bottom: 10px;
    min-width: 200px;
  }
  & > div {
    margin-right: 24px;
    margin-bottom: 10px;
    min-width: 200px;
  }
  & > input {
    margin-right: 24px;
    margin-bottom: 10px;
    min-width: 200px;
  }
}
</style>

<style lang="less" scoped>
.public-top-bar {
  width: 100%;
  margin-bottom: 14px;
  .panel-left {
    display: flex;
    /deep/ .ant-select-selection {
      background: rgba(44, 140, 236, 0.1);
      color: #2c8cec;
    }
    .btn-group {
      display: inline-block;
    }
    .btn {
      margin-right: 20px;
      margin-bottom: 10px;
    }
    .search {
      // margin-right: 24px;
      margin-bottom: 10px;
    }
  }
  .panel-right {
    text-align: right;
    .btn {
      margin-bottom: 10px;
    }
  }
  .ant-btn {
    width: 88px;
  }
}
</style>
