<template>
  <a-row class="public-header">
    <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="header-left">
      <slot>缺勤记录</slot>
    </a-col>
    <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="header-right">
      <slot name="header-right"></slot>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "PublicHeader"
};
</script>

<style lang="less" scoped>
.public-header {
  width: 100%;
  padding-bottom: 20px;
  .header-left {
    font-size: 16px;
    font-family: MicrosoftYaHeiSemi;
    font-weight: bold;
    color: #2c8cec;
  }
  .header-right {
    text-align: right;
  }
}
</style>
