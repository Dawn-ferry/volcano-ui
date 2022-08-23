<template>
  <div class="re-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "reCheckboxGroup",
  props: {
    value: {
      type: Array,
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
};
</script>
