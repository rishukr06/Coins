<template>
  <div data-app id="app">
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
  width: 80%;
  margin: 30px auto auto;
  text-align: center;
}
</style>
