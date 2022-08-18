<script setup lang="ts">

</script>

<template>
  <h3><slot /></h3>
</template>

<style scoped>
h3{ 
    text-transform: uppercase;
    color: var(--color-text-gray);
    font-size: 0.75em;
    letter-spacing: 0.25em;
    font-weight: bold;
    padding-top:1em;
    padding-bottom:1em;
}
</style>
