<template>
  <div>
    <re-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></re-switch>
    <hr />
    <re-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></re-switch>
    <re-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    ></re-switch>
  </div>
</template>
<script>
export default {
  name: "UseReSwitch",
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
    };
  },
};
</script>
<style scoped>
</style>
