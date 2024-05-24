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
          <label for="customer-name" class="mb-3 block text-base font-bold text-[#07074D]">
            Nombre del cliente
          </label>
          <input type="text" name="customer-name" id="customer-name" placeholder="Nombre"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="lastname" class="mb-3 block text-base font-bold text-[#07074D]">
            Apellido
          </label>
          <input type="text" name="lastname" id="lastname" placeholder="Apellido"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="phone" class="mb-3 block text-base font-bold text-[#07074D]">
            Teléfono
          </label>
          <input type="number" value="phone" maxlength="10" name="phone" id="phone" placeholder="12345678"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="email" class="mb-3 block text-base font-bold text-[#07074D]">
            Correo electrónico
          </label>
          <input type="email" name="email" id="email" placeholder="example@email.com"
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
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>