<template>
  <div id="app">
    <Header />
    <main>
      <Chart />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Chart from './components/Chart.vue';

export default {
  components: {
    Header,
    Chart
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  padding: 2rem;
}
</style>
