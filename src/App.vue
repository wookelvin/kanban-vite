<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<template>
<div class="wrapper">
  <Sidebar/>
  <main>
    <router-view />
  </main>
</div>


</template>

<style scoped>

.wrapper{ 
  height:100vh;
  display:flex;
}
</style>
