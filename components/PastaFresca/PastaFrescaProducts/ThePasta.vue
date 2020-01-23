<template>
  <div
    id="thePastaPastaFresca"
    class="container "
  >
    <div class="content">
      <productCard :products="pasta" />
    </div>
  </div>
</template>

<script>
import pasta from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'ThePastaPastaFresca',
  components: {
    productCard
  },

  apollo: {
    pasta: {
      prefetch: true,
      query: pasta
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
