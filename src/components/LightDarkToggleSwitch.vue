<script setup lang="ts">
import { ref } from 'vue'

const enabled = ref(true)

function toggleEnable(){ 
  enabled.value = !enabled.value;
}

</script>

<template>
  <div class="wrapper" @click="toggleEnable()">
    <div class="label before"><fa-icon icon="fa-regular fa-sun" /></div>
    <div class="switch-wrapper" :class="{enabled: enabled}">
      <div class="switch" ></div>
    </div>
    <div class="label after"><fa-icon icon="fa-regular fa-moon" /></div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper{ 
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  background: var(--color-bg2);
  &:hover{ 
    @apply brightness-105 transition-all;
  }
}
.label{ 
  margin-left:1em;
  margin-right:1em;
}
.switch-wrapper{ 
  --switch-wrapper-size: 1em;
  --dot-size: 0.8em;
  --dot-margin: calc( ( var(--switch-wrapper-size) - var(--dot-size) ) / 2);
  background: var(--color-purple);
  width: calc( var(--switch-wrapper-size) * 2 );
  height: var(--switch-wrapper-size);
  border-radius: calc( var(--switch-wrapper-size) / 2 );
  display:flex;
  justify-content: flex-start;
  align-items: center;

  .switch { 
    
    height: var(--dot-size);
    width: var(--dot-size);
    background: var(--color-white);
    border-radius: 50%;
    margin-left: var(--dot-margin);
    margin-right: var(--dot-margin);
  }

  &.enabled { 
    justify-content: flex-end;
  }
}

</style>