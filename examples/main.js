import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";
import "./icons/iconfont.css";
import "./style/base.scss";

import VolcanoUI from "../lib/volcano-ui.common";
import '../lib/volcano-ui.css';
Vue.use(VolcanoUI);
// 关闭vue的提示
Vue.config.productionTip = false;

new Vue({
  // store,
  render: (h) => h(App),
}).$mount("#app");
