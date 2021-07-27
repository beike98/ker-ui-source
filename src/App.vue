<template>
  <div>
    导航栏 ｜ <router-link to="/">Baker</router-link> |
    <router-link to="/xxx">Baker2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
