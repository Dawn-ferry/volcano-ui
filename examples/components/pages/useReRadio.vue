<template>
  <div>
    <re-radio v-model="radio" label="1">备选项</re-radio>
    <re-radio v-model="radio" label="2">备选项</re-radio>
    <hr />
    <re-radio v-model="radio2" label="禁用" disabled>备选项</re-radio>
    <re-radio disabled v-model="radio2" label="选中且禁用">备选项</re-radio>
  </div>
</template>
<script>
export default {
  name: "useReRadio",
  data() {
    return {
      radio: "1",
      radio2: "选中且禁用",
    };
  },
};
</script>
<style scoped>
</style>

