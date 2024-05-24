<script>
import SelectComponent from "../../components/shared/SelectComponent.vue";
import CheckBox from "../../components/shared/CheckBox.vue";

export default {
  components: {CheckBox, SelectComponent},
  data() {
    const selectOption = [
      {value: 'Terror', label: 'Terror'},
      {value: 'Accion', label: 'Accion'},
      {value: 'Comedia', label: 'Comedia'}
    ]
    return {selectOption}
  }
}

</script>

<template>
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5">
          <label for="title" class="mb-3 block text-base font-bold text-[#07074D]">
            Título
          </label>
          <input type="text" name="title" id="title" placeholder="Avengers"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="topic" class="mb-3 block text-base font-bold text-[#07074D]">
            Topic
          </label>

          <select-component name="topic" id="topic" :options="(selectOption)" placeholder="Selecciona el topic"/>

        </div>
        <div class="mb-5">
          <label for="releaseYear" class="mb-3 block text-base font-bold text-[#07074D]">
            Año de estreno
          </label>
          <input type="number" value="2023" max="2025" min="1000" name="releaseYear" id="releaseYear" placeholder="2020"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="name" class="mb-3 block text-base font-bold text-[#07074D]">
            Imagen
          </label>
          <input type="text" name="name" id="name" placeholder="Escribe una dirección del poster (imagen)"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="summary" class="mb-3 block text-base font-bold text-[#07074D]">
            Resumen
          </label>
          <textarea rows="4" name="summary" id="summary" placeholder="Escribe un resumen"
                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
        </div>
        <div class="mb-5">
          <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
            <input type="checkbox" id="available" name="available" class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
            <label for="available" class="flex w-full space-x-2 text-sm"> ¿Está disponible? </label>
          </div>
        </div>
        <div>
          <button
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>