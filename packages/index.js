import Vue from "vue";
import reCard from "./card";
import reButton from "./button";
import reInput from "./input";
import reCheckbox from "./checkbox";
import reCheckboxGroup from "./checkbox-group";
import reRadio from "./radio";
import reSwitch from "./switch";
import reForm from "./form";
import reFormItem from "./form-item";
import reDialog from "./dialog";


import "./style/common.scss";
import './fonts/font.scss';

const coms = [reCard, reButton, reInput, reCheckbox, reCheckboxGroup, reRadio, reSwitch, reFormItem, reForm, reForm, reDialog];
const install = function () {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const VolcanoUI = { reCard, reButton, reInput, reCheckbox, reCheckboxGroup, reRadio, reSwitch, reFormItem, reForm, reDialog, install };
export default VolcanoUI;
//按需加载
export { reCard, reButton, reInput, reCheckbox, reCheckboxGroup, reRadio, reSwitch, reFormItem, reForm, reDialog, install };
