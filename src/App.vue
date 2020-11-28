<template>
  <div id="app">
    <coin-list />
  </div>
</template>

<script>
import CoinList from "@/components/CoinList";
export default {
  name: 'App',
  components: {
    CoinList,
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
