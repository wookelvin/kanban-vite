<script setup lang="ts">
// import { ref } from 'vue'
// 
// defineProps<{ msg: string }>()
// 
// const count = ref(0)
</script>

<template>
<button><slot></slot></button>
</template>

<style scoped>
button{ 
    margin: 1em 0.25em;
}
</style>
