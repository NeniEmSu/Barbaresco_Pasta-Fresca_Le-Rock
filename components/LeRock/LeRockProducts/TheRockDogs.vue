<template>
  <div
    id="theRockDogs"
    class="container "
  >
    <div class="content">
      <productCard :products="rockDog" />
    </div>
  </div>
</template>

<script>
import rockDog from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheRockDog',
  components: {
    productCard
  },

  apollo: {
    rockDog: {
      prefetch: true,
      query: rockDog
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
