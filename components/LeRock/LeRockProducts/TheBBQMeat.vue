<template>
  <div
    id="theTheBBQMeat"
    class="container "
  >
    <div class="content">
      <productCard
        v-cloak
        :products="meat"
      />
    </div>
  </div>
</template>

<script>
import meat from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheTheBBQMeat',
  components: {
    productCard
  },

  apollo: {
    meat: {
      prefetch: true,
      query: meat
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
