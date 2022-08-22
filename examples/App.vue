<template>
  <div id="app">
    <div class="container">
      <Layout />
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import Layout from "./components/Layout";
export default {
  components: {
    Layout,
  },
};
</script>

<style>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 100%;
  flex: 1 1 100%;
  margin: auto;
  padding: 24px;
  width: 100%;
}
</style>
