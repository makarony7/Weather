<template>
  <div>
    <div class="bg-behind bg-bridge"></div>
    <router-link to="/login" class="home-a">
      <b-container>
        <div class="home-a-title p-absolute text-center">
          <p>The weather</p>
          <p>is almost here!</p>
        </div>
      </b-container>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style lang="less" scoped>

</style>
