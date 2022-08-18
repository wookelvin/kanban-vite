<script setup lang="ts">
import Heading from './Heading.vue';
import TicketBox from './TicketBox.vue';
// import { ref } from 'vue'
// 
const props = defineProps({ 
    title: { 
        type: String, 
        default: ''
    }, 
    color: { 
        type: String, 
        default: 'purple'
    }
})
// 
// const count = ref(0)
</script>

<template>
  <Heading>{{ props.title }}</Heading>
  <div>
    <TicketBox
      title="Build UI For Search"
      subtitle="0 of 3 subtasks"
    />
    <TicketBox
      title="Build UI For Search"
      subtitle="0 of 3 subtasks"
    />
    <TicketBox
      title="Build UI For Search"
      subtitle="0 of 3 subtasks"
    />
  </div>
</template>

<style scoped>
</style>
