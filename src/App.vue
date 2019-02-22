<template>
  <div id="app">
    <ms-main />
  </div>
</template>

<script>
import Main from "./components/Main.vue"

export default {
  name: "app",
  components: {
    "ms-main": Main
  }
}
</script>

<style lang="scss">
@import "./styles/global.scss";
#app {
  font-family: $--font-family;
}
</style>
