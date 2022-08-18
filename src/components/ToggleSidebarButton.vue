<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from '@/components/Button.vue';
import { useAppSettings } from '@/composables/AppSettings';
// import { ref } from 'vue'
// 
// defineProps<{ msg: string }>()
// 
// const count = ref(0)

const appSettings = useAppSettings();
const hideSidebar = computed(() => appSettings.hideSidebar.value);

const icon = computed(() => hideSidebar.value ? 'fa-eye': 'fa-eye-slash');
const label = computed(() => hideSidebar.value ? 'Show': 'Hide');

function toggle() { 
  appSettings.toggleSidebar();
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
