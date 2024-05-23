<template>
  <HeaderPage/>
  <router-view/>
  <Footer/>
</template>

<script>
import HeaderPage from "@/presentation/components/core/Header.vue";
import Footer from "@/presentation/components/core/Footer.vue";

export default {
  name: 'App',
  components: {
    Footer,
    HeaderPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
