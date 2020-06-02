import menuList from "@/mock/menuList";
const state = {
  device: "desktop",
  // 控制菜单展开
  collapse: false,
  // 路由重载
  isRouterAlive: true,
  menuList: []
};

const getters = {
  device: state => state.device,
  collapse: state => state.collapse,
  menuList: state => state.menuList,
  isRouterAlive: state => state.isRouterAlive
};

const actions = {
  toggleDevice({ commit }, data) {
    commit("TOGGLE_DEVICE", data);
  },
  toggleCollapse({ commit }) {
    commit("TOGGLE_COLLAPSE");
  },
  getMenuList({ commit }, data = menuList) {
    commit("GET_MENU_LIST", data);
  },
  handleReload({ commit }, data) {
    commit("HANDLE_RELOAD", data);
  }
};

const mutations = {
  TOGGLE_DEVICE(state, data) {
    state.device = data;
  },
  TOGGLE_COLLAPSE(state) {
    state.collapse = !state.collapse;
  },
  GET_MENU_LIST(state, data) {
    state.menuList = data;
  },
  HANDLE_RELOAD(state, data) {
    state.isRouterAlive = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
