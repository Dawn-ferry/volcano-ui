import reSwitch from "./src/index.vue";

reSwitch.install = function (Vue) {
  Vue.component(reSwitch.name, reSwitch);
};

export default reSwitch;