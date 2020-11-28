<template>
  <div>
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
          justify="space-around"
      >

        <v-btn
            class="pb-2"
            @click="firstPage()"
            :disabled=isDisabledFirstPrevious
        >
          First
        </v-btn>
        <v-btn
            class="pb-2"
            @click="previousPage()"
            :disabled=isDisabledFirstPrevious
        >
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>

        <v-btn
            class="pb-2"
            @click="nextPage()"
            :disabled=isDisabledNextLast
        >
          <v-icon>
            mdi-arrow-right
          </v-icon>
        </v-btn>

        <v-btn
            class="pb-2"
            @click="lastPage()"
            :disabled=isDisabledNextLast
        >
          Last
        </v-btn>

      </v-col>
    </v-row>
  </div>
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
.pb-2 {
  margin: 3px;
}
</style>
