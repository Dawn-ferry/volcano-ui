<template>
  <div>
    <re-input></re-input>
    <re-input placeholder="请输入密码" v-model="input" show-password></re-input>
    <re-input placeholder="请输入内容" v-model="input" :disabled="true" />
    <re-input placeholder="请输入内容" v-model="input" clearable />
    <re-input placeholder="请输入内容1" prefix-icon="re-icon-search" v-model="input2" />
    <!--
    缺少文本域
    <re-input type="textarea" :rows="2" placeholder="textarea" v-model="textarea" />-->
  </div>
</template>
<script>
export default {
  name: "useReInput",
  data() {
    return {
      input: "",
      textarea: "",
      input2: "",
    };
  },
};
</script>
<style scoped>
</style>
