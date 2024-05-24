<script setup lang="ts">

const emit = defineEmits(['filter'])

const filter = (e: any) => {
  emit('filter', e.target.value)
}

</script>

<template>
  <label class="flex mr-4 items-center flex-nowrap">
    <input type="radio" name="show" checked value="all" @change="filter">
    <span class="whitespace-nowrap ml-1">Todos</span>
  </label>

  <label class="flex mr-4 items-center flex-nowrap">
    <input type="radio" name="show" value="available" @change="filter">
    <span class="whitespace-nowrap ml-1">Disponible</span>
  </label>

  <label class="flex mr-4 items-center flex-nowrap">
    <input type="radio" name="show" value="unavailable" @change="filter">
    <span class="whitespace-nowrap ml-1">No disponible</span>
  </label>
</template>

<style scoped>

</style>