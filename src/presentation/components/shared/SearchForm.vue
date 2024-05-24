<script setup lang="ts">

const emit = defineEmits(['search'])

const search = (e: any) => {
  emit("search", e.target.value)
}
</script>

<template>
  <form class="py-3 px-4 flex items-center">
    <label class="sr-only">Buscar</label>
    <div class="relative w-full">
      <input type="text" @input="search" placeholder="Buscar" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
    </div>
  </form>
</template>

<style scoped>

</style>