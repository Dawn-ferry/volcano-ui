import reRadio from "./src/index.vue";

reRadio.install = function (Vue) {
  Vue.component(reRadio.name, reRadio);
};

export default reRadio;