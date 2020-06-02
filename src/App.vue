<template>
  <div id="app">
    <router-view />
    <div v-if="$route.name == 'login' || $route.name == 'register'" class="bg-behind bg-thunder"></div>
  </div>
</template>

<script>
// import topHeader from "./components/top-header"
export default {
    components: {
      // topHeader
    }
}
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
