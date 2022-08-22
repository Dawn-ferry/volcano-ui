<template>
  <div class="Layout">
    <div class="introductionArea">
      <div class="logo"></div>
      <div class="introduction"></div>
    </div>
    <div class="nav nav-tabs">
      <ul class="tablist">
        <li v-for="(item,index) of tablist" :key="index" :class="{'nav-link':true,'active':flag===item.id}" @click="clickFn(index,item)">
          <a>{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 判断展示 -->
    <div class="main-container">
      <div class="github">
        <div class="btn btn-secondary">
          View code
          <i class="iconfont icon-github1"></i>
        </div>
      </div>
      <div class="container">
        <UseCard v-if="name==='card'" />
        <UseButton v-else-if="name==='button'" />
        <UseInput v-else-if="name==='input'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {
    // 使用组件懒加载
    UseCard: () => import("./pages/useReCard.vue"),
    UseButton: () => import("./pages/useReButton.vue"),
    UseInput: () => import("./pages/useReInput.vue"),
  },
  data() {
    return {
      flag: 1,
      name: "",
      tablist: [
        { name: "simple", id: 1 },
        { name: "button", id: 2 },
        { name: "input", id: 3 },
        { name: "card", id: 4 },
        // { name: "table", id: 3 },
      ],
    };
  },

  methods: {
    clickFn(val, { name }) {
      console.log(name);
      this.flag = val + 1;
      this.name = name;
    },
  },
};
</script>
<style lang="scss" scoped>
$bgc: #e9ecef;
.Layout {
  margin: 0 150px;
  .introductionArea {
    padding: 32px 28px 16px 28px;
    margin-bottom: 28px;
    background-color: $bgc;
  }
  .nav {
    height: 109px;
    .tablist {
      display: flex;
      .nav-link {
        line-height: 21px;
        font-size: 14px;
        font-weight: 400;
        padding: 10px;
        color: rgb(0, 123, 255);
      }
      .nav-link:hover {
        color: #495057;
        border: 1px solid #dee2e6;
        transition: 1s;
      }
      .active {
        color: #495057;
        border: 1px solid #dee2e6;
      }
    }
  }
  .main-container {
    background-color: $bgc;
    // height: 350px;
    padding: 40px 28px 56px 28px;
    .github {
      float: right;
      .btn-secondary {
        width: 130px;
        height: 44px;
        padding: 10px;
        display: inline-block;
        cursor: pointer;
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
      }
      .btn-secondary:hover {
        color: #fff;
        background-color: #5a6268;
        border-color: #545b62;
      }
    }
  }
}
</style>


