import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import List from "../views/List.vue";
import Details from "../views/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "list",
        name: "list",
        component: List,
        meta: {
          title: "列表页",
        },
        children: [
          {
            path: "details",
            name: "details",
            component: Details,
            meta: {
              title: "详情页",
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
