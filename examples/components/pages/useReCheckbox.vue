<template>
  <div>
    <re-checkbox v-model="checked">备选项</re-checkbox>
    <hr />
    <re-checkbox v-model="checked1" disabled>备选项1</re-checkbox>
    <re-checkbox v-model="checked2" disabled>备选项</re-checkbox>
    <hr />
    <re-checkbox-group v-model="checkList">
      <re-checkbox label="复选框 A"></re-checkbox>
      <re-checkbox label="复选框 B"></re-checkbox>
      <re-checkbox label="复选框 C"></re-checkbox>
      <re-checkbox label="禁用" disabled></re-checkbox>
      <re-checkbox label="选中且禁用" disabled></re-checkbox>
    </re-checkbox-group>
  </div>
</template>
<script>
export default {
  name: "useReCheckbox",
  data() {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ["选中且禁用", "复选框 A"],
    };
  },
};
</script>
<style scoped>
</style>
