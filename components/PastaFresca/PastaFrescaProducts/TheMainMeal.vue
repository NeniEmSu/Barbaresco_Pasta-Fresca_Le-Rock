<template>
  <div
    id="theFirsteCourse"
    class="container "
  >
    <div class="content">
      <productCard :products="mainMeals" />
    </div>
  </div>
</template>

<script>
import mainMeals from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'
export default {
  name: 'ThemainMeal',
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
