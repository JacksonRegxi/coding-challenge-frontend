<script lang="ts" setup>

import customerState from "../../bloc/customer/CustomerState.ts";
import loanState from "../../bloc/loan/LoanState.ts";
import {dependencyLocator} from "../../../core/dependicies/DependencyLocator.ts";
import {onMounted, ref, watch} from "vue";
import SuccessDialog from "../../components/core/SuccessDialog.vue";

const _customerState = customerState()
const state = loanState()

const customerPloc = dependencyLocator.provideCustomerPloc(_customerState)
const loanPloc = dependencyLocator.provideLoanPloc(state)

const isModalOpened = ref(false);

const checkboxValue = ref(1)

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
  location.reload()
};

const submitHandler = () => {

}

watch(() => state.returnSuccess, (val) => {
  if (val) {
    openModal()
  }
})

watch(() => state.error, (val) => {
  if (val) {

  }
})

onMounted(() => {
  customerPloc.fetchCustomers()
  loanPloc.fetchAvailableMovies(0)
})

</script>

<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <SuccessDialog :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler"
                     :title="'Tarea completada'" :content="'La devolucion se ha realizado exitosamente'"/>
      <form onsubmit="return false;" @submit="loanPloc.storeMovieReturn({
      movie_id: state.movieId,
      customer_id: state.customerId,
      available: checkboxValue

      })">
        <div class="mb-5">
          <label for="movie" class="mb-3 block text-base font-bold text-[#07074D]">
            Selecciona el título
          </label>
          <select v-model="(state.movieId)" name="movie" id="movie"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option disabled class="font-semibold text-slate-300">Selecciona el titulo</option>
            <option v-for="movie in state.movies" :value="(movie.id)" class="font-semibold text-slate-950">
              {{ movie.title }}
            </option>
          </select>
        </div>
        <div class="mb-5">
          <label for="customer" class="mb-3 block text-base font-bold text-[#07074D]">
            Cliente
          </label>

          <select v-model="(state.customerId)" name="customer" id="customer"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option disabled class="font-semibold text-slate-300">Selecciona el cliente</option>
            <option v-for="customer in _customerState.customer" :value="(customer.id)"
                    class="font-semibold text-slate-950">{{ customer.customerName }}
            </option>
          </select>

        </div>
        <div class="mb-5">
          <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
            <input type="checkbox" :true-value="1" :false-value="0" v-model="checkboxValue" id="available"
                   name="available"
                   class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"/>
            <label for="available" class="flex w-full space-x-2 text-sm">¿Está disponible?</label>
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