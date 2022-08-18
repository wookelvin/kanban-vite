<script setup lang="ts">
import { computed, ref } from 'vue';
import Heading from './Heading.vue';
import MenuItem from './MenuItem.vue';
// import { ref } from 'vue'
// 
// defineProps<{ msg: string }>()
// 
// const count = ref(0)

const boards = ref([
    { label: 'Platform Launch', url: '/platform-launch' },
    { label: 'Marketing', url: '/marketing' },
    { label: 'Roadmap', url: '/roadmap' },
])
const count = computed(() => boards.value.length)

</script>

<template>
  <Heading>All Boards ({{ count }})</Heading>
  <MenuItem
    v-for="(b,i) of boards"
    :key="i"
    :to="b.url"
  >
    {{ b.label }}
  </MenuItem>
  <MenuItem
    to="new"
    secondary
  >
    <fa-icon icon="fa-solid fa-plus" /> Create New Board
  </MenuItem>
</template>

<style scoped>
</style>
