<template>
  <div class="public-top-bar">
    <a-row :gutter="24">
      <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="panel-left">
        <a-input-search
          class="search"
          placeholder="搜索"
          style="width: 200px"
          @search="onSearch"
        />
        <a-button class="btn" type="primary">新增</a-button>
        <a-button class="btn">删除</a-button>
        <a-button class="btn">导入</a-button>
        <a-button class="btn">导出</a-button>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="panel-right">
        <a-button type="primary">返回</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "PublicTopBar",
  data() {
    return {};
  },
  methods: {
    onSearch(v) {
      console.log(v);
    }
  }
};
</script>

<style lang="less" scoped>
.public-top-bar {
  width: 100%;
  margin-bottom: 14px;
  padding: 0 16px;
  .panel-left {
    .btn {
      margin-right: 24px;
      margin-bottom: 10px;
    }
  }
  .panel-right {
    text-align: right;
  }
  .ant-btn {
    width: 88px;
  }
  .search {
    margin-right: 24px;
    margin-bottom: 10px;
  }
}
</style>
