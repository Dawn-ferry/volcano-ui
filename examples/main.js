import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";
import "./icons/iconfont.css";
import "./style/base.scss";
// import BeeUI from "../packages/index";
import BeeUI from "../dist/volcano-ui.common";
import '../dist/volcano-ui.css';
Vue.use(BeeUI);
// 关闭vue的提示
Vue.config.productionTip = false;

new Vue({
  // store,
  render: (h) => h(App),
}).$mount("#app");
