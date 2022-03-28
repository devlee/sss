<script setup lang="ts">
import p1 from './pages/p1/index.vue'
</script>

<template>
  <main class="main">
    <section class="nav">
      <router-link to="/" class="nav-item">sss</router-link>
      <router-link to="/xx" class="nav-item">xx</router-link>
    </section>
    <router-view></router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}

.main {
  width: 1080px;
  margin: 0 auto;
}

.nav {
  height: 64px;
  box-sizing: border-box;
  font-size: 28px;
  padding: 12px;
}

.nav-item {
  margin: 0 12px;
}
</style>
