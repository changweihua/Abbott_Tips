import Vue from "vue";
import Router from "vue-router";

// 懒加载方式，当路由被访问的时候才加载对应组件
// const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router);
// 实例化参数
Vue.use(require("vue-wechat-title"));

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/layout/Admin.vue"),
      children: [
        {
          path: "about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          // /* webpackChunkName: "about" */
          component: () => import("@/views/About.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/account/Login.vue")
    }
  ]
});
