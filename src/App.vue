<template>
  <div id="app">
    <settings/>
    <coin-list />
  </div>
</template>

<script>
import CoinList from "@/components/CoinList";
import Settings from "@/components/settings";
export default {
  name: 'App',
  components: {
    Settings,
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
