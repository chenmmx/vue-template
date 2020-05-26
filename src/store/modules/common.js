import menuList from "@/mock/menuList";
const state = {
  device: "desktop",
  // 控制菜单展开
  collapse: false,
  menuList: []
};

const getters = {
  device: state => state.device,
  collapse: state => state.collapse,
  menuList: state => state.menuList
};

const actions = {
  TOGGLE_DEVICE({ commit }, data) {
    commit("TOGGLE_DEVICE", data);
  },
  TOGGLE_COLLAPSE({ commit }) {
    commit("TOGGLE_COLLAPSE");
  },
  GET_MENU_LIST({ commit }, data = menuList) {
    commit("GET_MENU_LIST", data);
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
