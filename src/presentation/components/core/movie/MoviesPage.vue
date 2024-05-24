<script lang="ts" setup>
import movieState from "../../../bloc/movie/MovieState.ts";
import {dependencyLocator} from "../../../../core/dependicies/DependencyLocator.ts";
import { onMounted } from "vue";

const state = movieState()
const moviePloc = dependencyLocator.provideMoviePloc(state)

onMounted(() => {
  moviePloc.fetchMovies()
})
</script>

<template>
  <div class="w-fit mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" v-for="movie in state.movies" :key="movie.id">
      <a href="#">
        <img :src="(movie.imageMovie)" :alt="(movie.title)" class="h-80 w-72 object-cover rounded-t-xl" />
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">{{movie.topic}}</span>
          <p class="text-lg font-bold text-black truncate block capitalize">{{movie.title}}</p>
          <div class="flex items-center">
            <p class="text-xs font-semibold text-black cursor-auto my-3 line-clamp-3">{{movie.summary}}</p>
            <div class="ml-auto">{{movie.releaseYear}}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>