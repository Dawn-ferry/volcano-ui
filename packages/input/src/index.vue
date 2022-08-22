<template>
  <div class="re-input" :class="{'re-input--suffix': showSuffix}">
    <!-- 如果传了show-password, 判断是否需要切换 密码的显示 如果不传，不判断 -->
    <input
      class="re-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text':'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="re-input__suffix" v-if="showSuffix">
      <!-- 清空 -->
      <i class="re-input__icon re-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <!-- 显示密码框 -->
      <i class="re-input__icon re-icon-view" v-if="showPassword" @click="handlePassword" :class="{'re-icon-view-active':passwordVisible}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "reInput",
  data() {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      // 把内容清空
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/input.scss";
</style>
