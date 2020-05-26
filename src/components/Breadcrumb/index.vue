<template>
  <a-breadcrumb class="breadcrumb" separator=">">
    <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.key">
      <a v-if="breadList.length !== index + 1" :href="item.key">{{
        item.title
      }}</a>
      <span v-else>{{ item.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Breadcrumb",
  mounted() {
    this.getCurrenBread(this.$route.path);
  },
  data() {
    return {
      breadList: []
    };
  },
  computed: {
    ...mapGetters("common", ["menuList"])
  },
  watch: {
    "$route.path"(path) {
      this.getCurrenBread(path);
    }
  },
  methods: {
    getCurrenBread(path) {
      const paths = path.split("/").filter(v => v);
      const queryParams = ["id", "sn"];
      let breadList = [];
      for (let item of this.menuList) {
        if (item.key === path) {
          breadList.push({
            path: item.key,
            title: item.title
          });
          break;
        }
        if (item.children) {
          for (let item1 of item.children) {
            if (item1.key === path) {
              breadList.push(
                {
                  path: item.key,
                  title: item.title
                },
                {
                  path: item1.key,
                  title: item1.title
                }
              );
              break;
            }
          }
        }
      }
      if (paths.includes("form")) {
        let flag = false;
        for (let item of queryParams) {
          if (this.$route.query[item]) {
            flag = true;
          }
        }
        if (flag) {
          breadList.push({
            key: path,
            title: "编辑"
          });
        } else {
          breadList.push({
            key: path,
            title: "新增"
          });
        }
      }
      this.breadList = breadList;
    }
  }
};
</script>

<style lang="less"></style>
