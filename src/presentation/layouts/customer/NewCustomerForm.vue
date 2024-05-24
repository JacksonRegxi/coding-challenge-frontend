<script lang="ts" setup>

import {ref, watch} from "vue";
import {dependencyLocator} from "../../../core/dependicies/DependencyLocator.ts";
import customerState from "../../bloc/customer/CustomerState.ts";
import SuccessDialog from "../../components/core/SuccessDialog.vue";

const state = customerState();
const customerPloc = dependencyLocator.provideCustomerPloc(state);
const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
  location.reload()
};

const submitHandler = ()=>{

}

watch(() => state.customerSaved, (val) => {
  if (val){
    openModal()
  }
})

watch(() => state.error, (val) => {
  if (val){

  }
})


</script>

<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <SuccessDialog :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" :title="'Tarea completada'" :content="'El cliente se ha guardado exitosamente'"/>
      <form  onsubmit="return false;" @submit="customerPloc.storeCustomer({
          customerName: state.customerName,
          lastname: state.lastname,
          phone: state.phone,
          email: state.email
      })">
        <div class="mb-5">
          <label for="customer-name" class="mb-3 block text-base font-bold text-[#07074D]">
            Nombre del cliente
          </label>
          <input type="text" name="customer-name" id="customer-name" placeholder="Nombre" v-model="(state.customerName)"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="lastname" class="mb-3 block text-base font-bold text-[#07074D]">
            Apellido
          </label>
          <input type="text" name="lastname" id="lastname" placeholder="Apellido" v-model="(state.lastname)"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="phone" class="mb-3 block text-base font-bold text-[#07074D]">
            Teléfono
          </label>
          <input type="number" value="phone" maxlength="10" name="phone" id="phone" placeholder="12345678" v-model="(state.phone)"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="email" class="mb-3 block text-base font-bold text-[#07074D]">
            Correo electrónico
          </label>
          <input type="email" name="email" id="email" placeholder="example@email.com" v-model="(state.email)"
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