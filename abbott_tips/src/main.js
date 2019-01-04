import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "./plugins/element.js";

import i18n from "./i18n/i18n";
// import vuexi18n from "./i18n/vuexi18n";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faAmilia } from "@fortawesome/free-brands-svg-icons";
import { faAngry } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);
library.add(faLanguage);
library.add(faAmilia);
library.add(faAngry);
Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// JWT 用户权限校验，判断 TOKEN 是否在 localStorage 当中
router.beforeEach(({ name }, from, next) => {
  // 获取 JWT Token
  if (localStorage.getItem("JWT_TOKEN")) {
    // 如果用户在login页面
    if (name === "login") {
      next("/");
    } else {
      // Todo: Check Token Is Valid
      next();
    }
  } else {
    if (name === "login") {
      next();
    } else {
      next({
        name: "login"
      });
    }
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
