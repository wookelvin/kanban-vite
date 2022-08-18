<script setup lang="ts">
import Button from './Button.vue';
// import { ref } from 'vue'
// 
// defineProps<{ msg: string }>()
// 
// const count = ref(0)
</script>

<template>
  <header>
    <h2>Board Name</h2>
    <div>
      <Button>
        <fa-icon
          icon="fa-solid fa-plus"
          class="mr-3"
        />Add New Task
      </Button>
      <Button plain>
        <fa-icon icon="fa-solid fa-ellipsis-vertical" />
      </Button>
    </div>
  </header>
</template>

<style scoped>
header{ 
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
}
h2 { 
    font-size: 1.5em;
    font-weight:500;
}
</style>
