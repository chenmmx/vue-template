import router from "@/router";
const state = {
  cachedRoutes: ["Home"],
  tagsBar: [
    {
      key: "/home",
      title: "首页",
      name: "Home"
    }
  ]
};

const getters = {
  cachedRoutes: state => state.cachedRoutes,
  tagsBar: state => state.tagsBar
};

const actions = {
  // 添加缓存路由
  addCachedRoute({ commit }, data) {
    commit("ADD_CACHED_ROUTE", data);
  },
  // 删除缓存路由
  deleteCachedRoute({ commit }, data) {
    commit("DELETE_CACHED_ROUTE", data);
  }
};

const mutations = {
  // 获取缓存路由name
  GET_CACHED_NAMES(state, data) {
    state.cachedRoutes = data.map(v => v.name);
  },
  ADD_CACHED_ROUTE(state, data) {
    const isCached = state.tagsBar.some(e => e.key === data.key);
    if (isCached) {
      return;
    }
    state.tagsBar.push(data);
    let cachedNames = state.tagsBar.map(item => item.name);
    state.cachedRoutes = cachedNames;
  },
  DELETE_CACHED_ROUTE(state, data) {
    const { that, key } = data;
    let delName = null;
    state.tagsBar = state.tagsBar.filter((item, idx) => {
      if (item.key === key) {
        delName = item.name;
      }
      if (item.key === key) {
        if (that.$route.path === key) {
          router.push(state.tagsBar[idx - 1].key);
        }
      }
      return item.key !== key;
    });
    state.cachedRoutes = state.cachedRoutes.filter(item => item !== delName);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
