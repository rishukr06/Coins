<template>
  <div>
    <p class="page-info-para">
      <v-progress-circular
          :indeterminate = "isLoading"
          :size="20"
         v-show="isLoading"
      ></v-progress-circular>
      Page {{page - 1 }} of {{totalPages - 1}}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: "PageInfo",
  computed : {
    ...mapState('coins', ['totalPages', 'page','isLoading']),
  },
}
</script>

<style scoped>
.page-info-para {
  margin: auto;
  padding: 10px;
  text-align: end;
}
</style>
