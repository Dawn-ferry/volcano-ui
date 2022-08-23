<template>
  <div>
    <div>
      <re-button>默认按钮</re-button>
      <re-button type="primary">主要按钮</re-button>
      <re-button type="success">成功按钮</re-button>
      <re-button type="info" disabled>信息按钮</re-button>
      <re-button type="warning" disabled>警告按钮</re-button>
      <re-button type="danger" disabled>危险按钮</re-button>
    </div>
    <div>
      <re-button plain>朴素按钮</re-button>
      <re-button type="primary" plain>主要按钮</re-button>
      <re-button type="success" plain>成功按钮</re-button>
      <re-button type="info" plain disabled>信息按钮</re-button>
      <re-button type="warning" plain disabled>警告按钮</re-button>
      <re-button type="danger" plain disabled>危险按钮</re-button>
    </div>
    <div>
      <re-button round>圆角按钮</re-button>
      <re-button type="primary" round>主要按钮</re-button>
      <re-button type="success" round>成功按钮</re-button>
      <re-button type="info" round disabled>信息按钮</re-button>
      <re-button type="warning" round disabled>警告按钮</re-button>
      <re-button type="danger" round disabled>危险按钮</re-button>
    </div>

    <div>
      <re-button icon="re-icon-search" circle></re-button>
      <re-button type="primary" icon="re-icon-edit" circle></re-button>
      <re-button type="success" icon="re-icon-check" circle></re-button>
      <re-button type="info" icon="re-icon-message" circle></re-button>
      <re-button type="warning" icon="re-icon-star-off" circle></re-button>
      <re-button type="danger" icon="re-icon-delete" circle></re-button>
    </div>
    <div>
      <!-- <re-button type="text">文字按钮</re-button>
      <re-button type="text" disabled>文字按钮</re-button>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "useReButton",
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
