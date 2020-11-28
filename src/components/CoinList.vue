<template>
  <div>
    <div v-for="coin in coins" :key="coin.id">
      <p>{{ coin.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "CoinList",
  computed : {
    ...mapState('coins', ['coins'])
  },
  mounted() {
    this.$store.dispatch('coins/loadCoins')
  }
}
</script>

<style scoped>

</style>
