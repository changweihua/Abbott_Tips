<template>
  <transition name="el-zoom-in-top">
    <div id="app">
      <HelloWorld />
    </div>
  </transition>
</template>

<script>
import HelloWorld from "@/layout/Admin.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
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
