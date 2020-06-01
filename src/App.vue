<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <top-header></top-header>
      </div>
    </div>
      <router-view/>
  </div>
</template>

<script>
import topHeader from "./components/top-header"
export default {
    components: {
      topHeader
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
