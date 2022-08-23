import reForm from "./src/index.vue";

reForm.install = function (Vue) {
  Vue.component(reForm.name, reForm);
};

export default reForm;
