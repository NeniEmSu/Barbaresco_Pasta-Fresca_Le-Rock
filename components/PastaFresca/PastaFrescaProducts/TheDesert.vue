<template>
  <div
    id="theDesertsPastaFresca"
    class="container "
  >
    <div class="content">
      <productCard :products="deserts" />
    </div>
  </div>
</template>

<script>
import deserts from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'TheDesertsPastaFresca',
  components: {
    productCard
  },

  apollo: {
    deserts: {
      prefetch: true,
      query: deserts
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
