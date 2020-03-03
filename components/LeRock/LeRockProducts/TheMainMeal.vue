<template>
  <div
    id="theFirsteCourseLeRock"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.mainMeals.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          v-cloak
          :products="mainMeals"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import mainMeals from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'

export default {
  name: 'TheFirstCourse',
  components: {
    productCard
  },

  apollo: {
    mainMeals: {
      prefetch: true,
      query: mainMeals
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
