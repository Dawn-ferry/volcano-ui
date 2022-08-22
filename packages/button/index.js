import reButton from "./src/index.vue";

reButton.install = function (Vue) {
  Vue.component(reButton.name, reButton);
};

export default reButton;
