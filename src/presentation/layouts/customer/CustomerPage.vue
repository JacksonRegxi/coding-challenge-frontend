<script lang="ts" setup>
import {dependencyLocator} from "../../../core/dependicies/DependencyLocator.ts";
import {computed, onMounted, ref} from "vue";
import customerState from "../../bloc/customer/CustomerState.ts";
import SearchForm from "../../components/shared/SearchForm.vue";

const state = customerState()
const customerPloc = dependencyLocator.provideCustomerPloc(state)
const searchFilter = ref('')

const filteredItems = computed(() => {
  if (searchFilter.value != '') {
    return state.customer.filter(item => item.customerName.includes(searchFilter.value) || item.phone.includes(searchFilter.value) || item.email.includes(searchFilter.value) || item.lastname.includes(searchFilter.value))
  }
  return state.customer
})

const handleSearch = (searchTerm: string) => {
  searchFilter.value = searchTerm
}

onMounted(() => {
  customerPloc.fetchCustomers()
})
</script>

<template>
  <div
      class="w-fit h-fit mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-10 mt-10 mb-5 bg-white shadow-md rounded-xl duration-500 hover:scale-1 hover:shadow-xl">
    <SearchForm @search="handleSearch"/>
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
      <tr>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre</th>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Apellido</th>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Teléfono</th>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Correo electrónico</th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="customer in filteredItems" :key="customer.id">
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.customerName }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.lastname }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.phone }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.email }}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <button
              class="px-4 py-0.5 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
            Editar
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>