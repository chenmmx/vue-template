import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const asyncRoutes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: "/table",
        name: "Table",
        component: () => import("@/views/Table.vue")
      },
      {
        path: "/table/form",
        name: "TableAddForm",
        component: () => import("@/views/Add.vue")
      },
      {
        path: "/form",
        name: "Form",
        component: () => import("@/views/Form.vue")
      },
      {
        path: "/map",
        name: "Map",
        component: () => import("@/views/Map.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: asyncRoutes
});

export default router;
