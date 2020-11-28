<template>
  <v-container-fluid>
    <v-row class="settings-row ">

      <v-col
          cols="12"
          sm="12"
          md="6"
      >
        <v-select
            :items="rows"
            solo
            label="Rows Per Page"
            @change="addNewLimit()"
            v-model="newLimit"
            style="width: 150px"
        ></v-select>
      </v-col>

      <v-col
          align="right"
          cols="12"
          sm="12"
          md="6"
      >

        <v-btn
            class="mx-2"
            @click="firstPage()"
            :disabled=isDisabledFirstPrevious
        >
          First
        </v-btn>
        &nbsp;
        <v-btn
            @click="previousPage()"
            :disabled=isDisabledFirstPrevious
        >
          Previous
        </v-btn>
        &nbsp;
        <v-btn
            @click="nextPage()"
            :disabled=isDisabledNextLast
        >
          Next
        </v-btn>
        &nbsp;
        <v-btn
            @click="lastPage()"
            :disabled=isDisabledNextLast
        >
          Last
        </v-btn>

      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
import { mapState } from 'vuex'

export default {
name: "settings",
  data () {
    return {
      newLimit : this.limit,
      rows: ['10', '25', '50', '100'],
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
.settings-row {
  height: auto;
}
</style>
