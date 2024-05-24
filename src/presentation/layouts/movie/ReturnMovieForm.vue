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
          <label for="movie" class="mb-3 block text-base font-bold text-[#07074D]">
            Título
          </label>
          <select-component name="movie" id="movie" :options="(selectOption)" placeholder="Selecciona la película"/>
        </div>
        <div class="mb-5">
          <label for="customer" class="mb-3 block text-base font-bold text-[#07074D]">
            Cliente
          </label>

          <select-component name="customer" id="customer" :options="(selectOption)" placeholder="Selecciona el cliente"/>

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