<template>
  <div data-app id="app">
    <settings/>
    <coin-list/>
    <page-info/>
  </div>
</template>

<script>
import CoinList from "@/components/CoinList";
import Settings from "@/components/Settings";
import PageInfo from "@/components/PageInfo";
export default {
  name: 'App',
  components: {
    PageInfo,
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
