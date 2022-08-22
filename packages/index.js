import Vue from "vue";
import reCard from "./card";
import reButton from "./button";
import reInput from "./input";
import "./style/common.scss";
import './fonts/font.scss';

const coms = [reCard, reButton, reInput];
const install = function () {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const VolcanoUI = { reCard, reButton, reInput, install };
export default VolcanoUI;
//按需加载
export { reCard, reButton, reInput, install };
