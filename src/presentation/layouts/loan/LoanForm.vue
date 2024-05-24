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
          <label for="loan-date" class="mb-3 block text-base font-bold text-[#07074D]">
            Fecha de préstamo
          </label>
          <input type="date"  name="loan-date" id="loan-date"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="return-date" class="mb-3 block text-base font-bold text-[#07074D]">
            Fecha de devolución
          </label>
          <input type="date"  name="return-date" id="return-date"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
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