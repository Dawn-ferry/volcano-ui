import reDialog from "./src/index.vue";

reDialog.install = function (Vue) {
  Vue.component(reDialog.name, reDialog);
};

export default reDialog;
