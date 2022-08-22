<template>
  <button
    :disabled="disabled"
    class="re-button"
    :class="[`re-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何的内容 当我们没有传入插槽的时候 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "reButton",
  // 封装一个通用的组件，会对props做一个约束，props进行校验
  props: {
    type: {
      // 数据类型： 字符串
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log("round", this.round);
    console.log("circle", this.circle);
    console.log("disabled", this.disabled);
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/btn.scss";
</style>
