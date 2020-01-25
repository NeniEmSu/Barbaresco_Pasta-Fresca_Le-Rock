<template>
  <div
    id="theGarnishes"
    class="container "
  >
    <div class="content">
      <productCard :products="garnishes" />
    </div>
  </div>
</template>

<script>
import garnishes from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheGarnishes',
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
