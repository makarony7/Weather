<template>
  <div>
    <div class="bg-behind bg-bridge"></div>
    <router-link to="/login" class="home-a">
      <b-container>
        <p>Login just now to check the weather!</p>
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
.bg-bridge {
  animation-name: scale;
  animation-duration: 180s;
  @keyframes scale {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      -o-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
