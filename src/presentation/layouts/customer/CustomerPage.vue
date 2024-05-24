<script lang="ts" setup>
import {dependencyLocator} from "../../../core/dependicies/DependencyLocator.ts";
import {onMounted} from "vue";
import customerState from "../../bloc/customer/CustomerState.ts";

const state = customerState()
const customerPloc = dependencyLocator.provideCustomerPloc(state)

onMounted(() => {
  customerPloc.fetchCustomers()
})
</script>

<template>
  <div
      class="w-fit h-fit mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-10 mt-10 mb-5 bg-white shadow-md rounded-xl duration-500 hover:scale-1 hover:shadow-xl">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
      <tr>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre</th>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Apellido</th>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Teléfono</th>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Correo electrónico</th>
        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Acciones</th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="customer in state.customer" :key="customer.id">
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.customerName }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.lastname }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.phone }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ customer.email }}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <button
              class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
            Edit
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>