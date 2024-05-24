<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import movieState from "../../bloc/movie/MovieState.ts";
import customerState from "../../bloc/customer/CustomerState.ts";
import {dependencyLocator} from "../../../core/dependicies/DependencyLocator.ts";
import loanState from "../../bloc/loan/LoanState.ts";
import SuccessDialog from "../../components/core/SuccessDialog.vue";

const _movieState = movieState();
const _customerState = customerState()
const state = loanState()

const customerPloc = dependencyLocator.provideCustomerPloc(_customerState)
const moviePloc = dependencyLocator.provideMoviePloc(_movieState)
const loanPloc = dependencyLocator.provideLoanPloc(state)

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

watch(() => state.loanSaved, (val) => {
  if (val){
    openModal()
  }
})

watch(() => state.error, (val) => {
  if (val){

  }
})

onMounted(() => {
  customerPloc.fetchCustomers()
  moviePloc.fetchMovies()
})

</script>

<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <SuccessDialog :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" :title="'Tarea completada'" :content="'El préstamo se ha realizado'"/>
      <form onsubmit="return false;"  @submit="loanPloc.storeCustomersMovies({
          movie_id: state.movieId,
          customer_id: state.customerId,
          loanDate: state.loanDate,
          returnDate: state.returnDate
      })">
        <div class="mb-5">
          <label for="movie" class="mb-3 block text-base font-bold text-[#07074D]">
            Selecciona el título
          </label>
          <select v-model="(state.movieId)" name="movie" id="movie" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option disabled class="font-semibold text-slate-300">Selecciona el titulo</option>
            <option v-for="movie in _movieState.movies" :value="(movie.id)" class="font-semibold text-slate-300">{{movie.title}}</option>
          </select>
        </div>
        <div class="mb-5">
          <label for="customer" class="mb-3 block text-base font-bold text-[#07074D]">
            Cliente
          </label>

          <select v-model="(state.customerId)" name="customer" id="customer" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option disabled class="font-semibold text-slate-300">Selecciona el cliente</option>
            <option v-for="customer in _customerState.customer" :value="(customer.id)" class="font-semibold text-slate-300">{{customer.customerName}}</option>
          </select>

        </div>
        <div class="mb-5">
          <label for="loan-date" class="mb-3 block text-base font-bold text-[#07074D]">
            Fecha de préstamo
          </label>
          <input type="date"  name="loan-date" id="loan-date" v-model="(state.loanDate)"
                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="return-date" class="mb-3 block text-base font-bold text-[#07074D]">
            Fecha de devolución
          </label>
          <input type="date"  name="return-date" id="return-date" v-model="(state.returnDate)"
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