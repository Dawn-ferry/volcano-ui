<template>
  <div>
    <re-input></re-input>
    <re-input placeholder="请输入密码" v-model="input" show-password></re-input>
  </div>
</template>
<script>
export default {
  name: "useReInput",
  data() {
    return {
      input: "",
    };
  },
};
</script>
<style scoped>
</style>
