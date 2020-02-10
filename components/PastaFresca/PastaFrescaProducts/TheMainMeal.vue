<template>
  <div
    id="theFirsteCourse"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.mainMeals.loading"
          class="mx-auto text-center"
        >
          <LoadingWhite />
        </div>
        <productCard
          v-else
          :products="mainMeals"
        />
      </vue-page-transition>
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
