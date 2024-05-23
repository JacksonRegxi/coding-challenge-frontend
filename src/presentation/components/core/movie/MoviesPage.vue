<script>
import {dependencyLocator} from "@/core/dependicies/DependencyLocator.ts";
import {watch} from "vue";
import movieState from "@/presentation/bloc/movie/MovieState.ts";

const state = movieState()
const moviePloc = dependencyLocator.provideMoviePloc(state)

watch(() => state.movies, (val) => {
  if (val) {
    moviePloc.fetchMovies()
    console.log(val);
  }
});

export default {

}
</script>

<template>
  <div>
    <h1>Movies Page</h1>
  </div>
</template>

<style scoped>

</style>