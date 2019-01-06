<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { values } from "@/apis/account";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    values().then(res => {
      console.log(res);
    })
  }
};
</script>
