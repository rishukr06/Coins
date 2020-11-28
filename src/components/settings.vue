<template>
  <div>
    <select @change="addNewLimit()" v-model="newLimit">
      <option value="10"> 10 </option>
      <option value="25"> 25 </option>
      <option value="50"> 50 </option>
      <option value="100"> 100 </option>
    </select>
    <br/>
    <button @click="firstPage()" :disabled=isDisabledFirstPrevious>First</button>&nbsp;
    <button @click="previousPage()" :disabled=isDisabledFirstPrevious> ← Previous </button>&nbsp;
    <button @click="nextPage()" :disabled=isDisabledNextLast> Next → </button>&nbsp;
    <button @click="lastPage()" :disabled=isDisabledNextLast> Last </button>
  </div>
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
    ...mapState('coins', ['limit','offset','totalPages','page']),

    isDisabledFirstPrevious(){
      if(this.offset === 0 ) {
        return true
      } else {
        return false
      }
    },

    isDisabledNextLast(){
      if(this.page === this.totalPages) {
        return true
      } else {
        return false
      }
    },
  },

  methods: {
    addNewLimit() {
      this.$store.dispatch('coins/setLimit', this.newLimit)
    },
    firstPage(){
      this.$store.dispatch('coins/firstPage')
    },
    previousPage(){
      this.$store.dispatch('coins/previousPage')
    },
    nextPage(){
      this.$store.dispatch('coins/nextPage')
    },
    lastPage(){
      this.$store.dispatch('coins/lastPage')
    },
  },

}
</script>

<style scoped>

</style>
