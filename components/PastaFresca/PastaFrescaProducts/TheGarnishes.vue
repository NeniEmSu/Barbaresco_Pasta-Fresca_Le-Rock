<template>
  <div
    id="theGarnishesPastaFresca"
    class="container "
  >
    <div class="content">
      <productCard :products="garnishes" />
    </div>
  </div>
</template>

<script>
import garnishes from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'TheGarnishesPastaFresca',
  components: {
    productCard
  },

  apollo: {
    garnishes: {
      prefetch: true,
      query: garnishes
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
