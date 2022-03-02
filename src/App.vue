<script setup lang="ts">
import p1 from './pages/p1/index.vue'
</script>

<template>
  <main class="main">
    <section>
      <p1></p1>
    </section>
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
</style>
