<template>
  <v-simple-table
      fixed-header
      height="60vh"
      class="data-box"
    >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Icon
          </th>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Symbol
          </th>
          <th class="text-center">
            Currency Price
          </th>
          <th class="text-center">
            Currency Price Change
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <td> <img :src="coin.iconUrl" height="20" /> </td>
          <td> {{coin.name}} </td>
          <td> {{coin.symbol}} </td>
          <td> {{coin.price}} </td>
          <td> {{coin.change}} </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
.data-box {
  box-shadow: 3px 3px 8px #ccc;
  padding: 5px;
}
</style>
