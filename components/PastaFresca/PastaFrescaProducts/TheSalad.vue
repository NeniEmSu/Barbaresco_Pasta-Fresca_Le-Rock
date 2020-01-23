<template>
  <div
    id="theSaladsPastaFresca"
    class="container "
  >
    <div class="content">
      <productCard :products="salads" />
    </div>
  </div>
</template>

<script>
import salads from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'TheSaladsPastaFresca',
  components: {
    productCard
  },

  apollo: {
    salads: {
      prefetch: true,
      query: salads
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
