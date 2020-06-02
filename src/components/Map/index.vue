<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "Map",
  props: [""],
  data() {
    return {
      trackAni: ""
    };
  },

  components: {},

  created() {},
  mounted() {
    this.creatMap();
  },

  methods: {
    start() {
      this.trackAni.start();
    },
    //构建基本地图
    creatMap() {
      this.$nextTick(() => {
        var bmap = new window.BMapGL.Map("map"); // 创建Map实例
        bmap.centerAndZoom(new window.BMapGL.Point(116.297611, 40.047363), 18); // 初始化地图，设置中心点坐标和地图级别
        bmap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
        var path = [
          {
            lng: 116.297611,
            lat: 40.047363
          },
          {
            lng: 116.302839,
            lat: 40.048219
          },
          {
            lng: 116.308301,
            lat: 40.050566
          },
          {
            lng: 116.305732,
            lat: 40.054957
          },
          {
            lng: 116.304754,
            lat: 40.057953
          },
          {
            lng: 116.306487,
            lat: 40.058312
          },
          {
            lng: 116.307223,
            lat: 40.056379
          }
        ];
        // bmap.setMapStyleV2({
        //   styleId: '3d71dc5a4ce6222d3396801dee06622d'
        // });
        var point = [];
        for (var i = 0; i < path.length; i++) {
          point.push(new window.BMapGL.Point(path[i].lng, path[i].lat));
        }
        var pl = new window.BMapGL.Polyline(point, {
          strokeColor: "#2C8CEC",
          strokeWeight: 7,
          strokeOpacity: 0.7
        });
        this.trackAni = new window.BMapGLLib.TrackAnimation(bmap, pl, {
          overallView: true, // 动画完成后自动调整视野到总览
          tilt: 30, // 轨迹播放的角度，默认为55
          duration: 10000, // 动画持续时长，默认为10000，单位ms
          delay: 3000 // 动画开始的延迟，默认0，单位ms
        });
      });
    }
  },

  filters: {},

  watch: {}
};
</script>
<style lang="less">
#map {
  height: 100%;
  .BMap_cpyCtrl {
    display: none;
  }
  .anchorBL {
    display: none;
  }
}
</style>
