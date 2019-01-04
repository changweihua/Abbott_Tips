<template>
  <div id="app">
    <transition name="el-zoom-in-center">
      <!-- <blankLayout v-if="isLogined" />
      <adminLayout v-else /> -->
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isLogined: false
    };
  }
  // components: {
  //   adminLayout: () => import("@/layout/Admin.vue"),
  //   blankLayout: () => import("@/layout/Blank.vue")
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
