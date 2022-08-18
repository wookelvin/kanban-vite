<script setup lang="ts">
// import { ref } from 'vue'

import { computed } from 'vue';

// 
const props = defineProps({
  plain: { 
    type: Boolean,
    default: false
  }, 
  to: { 
    type: String, 
    default: ''
  }
})

const plain = computed(() => props.plain);

</script>

<template>
  <button
    v-if="!to"
    :class="{plain}"
  >
    <slot />
  </button>
  <router-link
    v-else
    :to="to"
    class="button"
    :class="{plain}"
  >
    <slot />
  </router-link>
</template>

<style scoped lang="postcss">
button,.button{ 
  margin: 1em 0.25em;
  padding: 0.5em 1.5em;
  display:inline-block;
  
  &:not(.plain){ 
    background: var(--color-purple);
    color: var(--color-text-light);
    padding: 0.5em 1.5em;
    border-radius: 1.5em;
  }

  &.plain { 
    padding: 0.5em 0.5em;
    color: var(--color-purple);
  }
}

</style>
