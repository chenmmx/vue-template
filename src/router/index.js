import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
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
        path: "/form",
        name: "Form",
        component: () => import("@/views/Form.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
