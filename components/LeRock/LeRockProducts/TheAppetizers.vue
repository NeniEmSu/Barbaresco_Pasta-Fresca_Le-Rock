<template>
  <div
    id="theAppetizers"
    class="container "
  >
    <div class="content">
      <productCard :products="appetizers" />
    </div>
  </div>
</template>

<script>
import appetizers from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheAppetizers',
  components: {
    productCard
  },

  apollo: {
    appetizers: {
      prefetch: true,
      query: appetizers
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
