<script lang="ts" setup>

import { onMounted } from "vue";
import {dependencyLocator} from "../../../core/dependicies/DependencyLocator.ts";
import movieState from "../../bloc/movie/MovieState.ts";

const state = movieState()
const moviePloc = dependencyLocator.provideMoviePloc(state)

onMounted(() => {
  moviePloc.fetchMovies()
})
</script>

<template>
  <div class="w-fit h-fit mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5">
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" v-for="movie in state.movies" :key="movie.id">
      <a href="#">
        <img :src="(movie.image)" :alt="(movie.title)" class="h-80 w-72 object-cover rounded-t-xl">
        <div class="px-4 py-3 w-72">
          <div v-if="movie.available === '1'"
              class="flex px-2 py-1 font-san w-fit text-xs font-bold text-white bg-green-800 rounded-md select-none whitespace-nowrap align-middle items-center">
            <span class="">Disponible</span>
          </div>
          <div v-else
               class="flex px-2 py-1 font-san w-fit text-xs font-bold text-white bg-red-800 rounded-md select-none whitespace-nowrap align-middle items-center">
            <span class="">No disponible</span>
          </div>
          <span class="text-gray-400 mr-3 uppercase text-xs">{{movie.topic}}</span>
          <p class="text-xl font-bold text-black line-clamp-2 block capitalize">{{movie.title}}</p>
          <div class="flex items-center">
            <p class="text-xs font-semibold text-black cursor-auto my-1 line-clamp-3">{{movie.summary}}</p>
            <div class="ml-auto">{{movie.releaseYear}}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>