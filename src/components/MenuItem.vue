<script setup lang="ts">
// import { ref } from 'vue'

import { computed } from 'vue';

const props = defineProps({
    to: { 
        type: String, 
        default: ''
    },
    secondary: { 
        type: Boolean, 
        default: false
    }
})
const to = computed(() => props.to);


</script>

<template>
  <router-link
    :to="to"
    active-class="active"
    :class="{secondary}"
  >
    <fa-icon icon="fa-solid fa-table-columns" /><slot />
  </router-link>
</template>

<style scoped lang="postcss">
a{ 
    display:block;
    color: var(--color-text-gray);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-bottom: 0.25em;
    svg{ 
        margin-right:1em;
    }
    &.secondary{ 
        color: var(--color-purple)
    }

    &.active{ 
        position: relative;
        color: var(--color-text-light);
        &::before { 
            content: '';
            display:block;
            position: absolute;  
            left:-2em;
            width:100%;
            top: 0em;
            height: 100%;
            border-top-right-radius: 2em;
            border-bottom-right-radius: 2em;
            background: var(--color-purple);
            z-index:-1;
        }
    }
}
</style>
