<script setup lang="ts">
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import KanbanBoard from '../components/KanbanBoard.vue';
import NewColumn from '@/components/NewColumn.vue';
import Column from '@/components/Column.vue';
</script>

<template>
  <div id="main">
    <Header>
      <Button><fa-icon icon="fa-solid fa-plus" />Add New Task</Button>
    </Header>
    <KanbanBoard>
      <Column
        label="Todo"
        color="blue"
      />
      <Column
        label="Doing"
        color="purple"
      />
      <Column
        label="Done"
        color="green"
      />
      <NewColumn />
    </KanbanBoard>
  </div>
</template>

<style scoped>
#main{ 
    display:flex;
    flex-direction: column;
    height:100vh;
}
</style>
