<template>
  <div
    id="theSalads"
    class="container "
  >
    <div class="content">
      <productCard :products="salads" />
    </div>
  </div>
</template>

<script>
import salads from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheSalads',
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
