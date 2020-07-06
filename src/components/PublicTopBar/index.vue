<template>
  <div class="public-top-bar">
    <a-row style="margin-bottom:10px;">
      <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="panel-left">
        <a-row style="width:100%;">
          <a-col :xs="24" :sm="24" :md="24" :lg="11" :xl="11">
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
          <a-col :xs="24" :sm="24" :md="24" :lg="13" :xl="13">
            <div class="btn-group">
              <a-button class="btn" type="primary" @click="onSearch"
                >搜索</a-button
              >
            </div>
            <div class="btn-group" v-for="item in topBarsBtns" :key="item.name">
              <a-button
                class="btn"
                type="dashed"
                @click="item.click && item.click()"
                >{{ item.name }}</a-button
              >
            </div>
            <a-button
              class="btn"
              @click="isAdvancedSearch = !isAdvancedSearch"
              :type="isAdvancedSearch ? 'primary' : 'dashed'"
              >{{ isAdvancedSearch ? "收起" : "高级搜索" }}</a-button
            >
          </a-col>
        </a-row>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="panel-right">
        <slot name="panel-right"></slot>
      </a-col>
    </a-row>
    <a-row
      v-if="isAdvancedSearch"
      style="padding:22px 0 2px;background:#F7F8FA;margin-bottom:20px;"
    >
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        class="advanced-panel"
      >
        <a-row style="width:100%;padding:0 12px;">
          <slot name="advanced"></slot>
          <a-button type="primary">查询</a-button>
        </a-row>
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
    },
    getElementPosition() {}
  }
};
</script>

<style lang="less">
.public-top-bar {
  .advanced-panel {
    .ant-col {
      display: flex;
      justify-content: flex-start;
      // padding: 0 13px;
      & > span {
        margin: 0 0 20px 10px;
        min-width: 200px;
        width: 80%;
      }
      & > div {
        margin: 0 0 20px 10px;
        min-width: 200px;
        width: 80%;
      }
      & > input {
        margin: 0 0 20px 10px;
        min-width: 200px;
        width: 80%;
      }
      & > .text {
        margin: 0;
        min-width: 56px;
        line-height: 34px;
        width: 56px;
      }
    }
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
      margin-right: 20px;
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
