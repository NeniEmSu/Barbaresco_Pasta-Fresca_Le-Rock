<template>
  <div
    id="theAppetizersPastaFresca"
    class="container"
  >
    <div class="content">
      <productCard :products="appetizers" />
    </div>
  </div>
</template>

<script>
import appetizers from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

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
