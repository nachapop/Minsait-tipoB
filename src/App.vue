<template>
  <div id="app">
    <ms-main />
  </div>
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'app',
  components: {
    'ms-main': Main,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Roboto;
  padding: 40px;
}
</style>
