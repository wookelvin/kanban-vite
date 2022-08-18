<script setup lang="ts">
import Logo from './Logo.vue';
import LightDarkToggleSwitch from './LightDarkToggleSwitch.vue';
import ToggleSidebarButton from './ToggleSidebarButton.vue';
import BoardsMenu from './BoardsMenu.vue';
</script>

<template>
  <nav class="sidebar">
    <div>
      <Logo />
      <BoardsMenu />
    </div>
    <div>
      <LightDarkToggleSwitch />
      <ToggleSidebarButton />
    </div>
  </nav>
</template>

<style scoped>
.sidebar{ 
    padding: 0.5em 1.5em;
}

nav { 
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
    border-right: 2px solid var(--color-border);
    width:300px;
}
</style>
