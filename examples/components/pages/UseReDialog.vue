<template>
  <div>
    <re-button type="text" @click="dialogVisible = true">点击打开 Dialog</re-button>
    <re-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <re-button @click="dialogVisible = false">取 消</re-button>
        <re-button type="primary" @click="dialogVisible = false">确 定</re-button>
      </span>
    </re-dialog>
  </div>
</template>
<script>
export default {
  name: "UseReDialog",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
</style>
