<template>
  <div>
    <re-form :inline="true" :model="formInline" class="demo-form-inline">
      <re-form-item label="审批人">
        <re-input v-model="formInline.user" placeholder="审批人"></re-input>
      </re-form-item>
      <re-form-item label="活动区域">
        <re-input v-model="formInline.region" placeholder="活动区域"></re-input>
      </re-form-item>
      <re-form-item>
        <re-button type="primary" @click="onSubmit">查询</re-button>
      </re-form-item>
    </re-form>
  </div>
</template>
<script>
export default {
  name: "UseReForm",
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
</style>
