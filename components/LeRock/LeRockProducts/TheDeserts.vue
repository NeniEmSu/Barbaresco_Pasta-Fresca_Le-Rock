<template>
  <div
    id="theDesertsLeRock"
    class="container "
  >
    <div class="content">
      <productCard :products="deserts" />
    </div>
  </div>
</template>

<script>
import deserts from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheDeserts',
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
