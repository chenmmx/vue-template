<template>
  <div class="home">
    <a-button type="primary" @click="start">开始</a-button>
    <div class="map">
      <Map ref="map"></Map>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(123);
  },
  methods: {
    start() {
      this.$refs.map.start();
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  .map {
    width: 100%;
    height: 38vw;
  }
}
</style>
