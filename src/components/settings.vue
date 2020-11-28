<template>
  <select @change="addNewLimit()" v-model="newLimit">
    <option value="10"> 10 </option>
    <option value="25"> 25 </option>
    <option value="50"> 50 </option>
    <option value="100"> 100 </option>
  </select>
</template>

<script>
import { mapState } from 'vuex'

export default {
name: "settings",
  data () {
    return {
      newLimit : this.limit
    }
  },
  computed : {
    ...mapState('coins', ['limit'])
  },
  methods: {
    addNewLimit() {
      this.$store.dispatch('coins/setLimit', this.newLimit)
    }
  },
}
</script>

<style scoped>

</style>
