<template>
  <div
    id="theFirsteCourseLeRock"
    class="container "
  >
    <productCard :products="mainMeals" />
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
