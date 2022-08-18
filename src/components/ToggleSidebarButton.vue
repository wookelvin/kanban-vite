<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from '@/components/Button.vue';
// import { ref } from 'vue'
// 
// defineProps<{ msg: string }>()
// 
// const count = ref(0)

const hideSidebar = ref(false);

const icon = computed(() => hideSidebar.value ? 'fa-eye': 'fa-eye-slash');
const label = computed(() => hideSidebar.value ? 'Show': 'Hide');

function toggle() { 
  hideSidebar.value = !hideSidebar.value;
}
</script>

<template>
  <div class="active">
    <Button @click="toggle">
      <fa-icon
        :icon="`fa-regular ${icon}`"
        class="mr-2"
        fixed-width
      />
      {{ label }} Sidebar
    </Button>
  </div>
</template>

<style scoped>

</style>
