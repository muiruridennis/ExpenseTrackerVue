<script setup>
import Navbar from './components/Navbar.vue';
</script>


<template>
  <div id="app">
    <Navbar /> <!-- Navbar at the top -->
    <router-view /> <!-- Main content of the app -->
  </div>
</template>



<style scoped>
/* Global Styles (Optional) */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
