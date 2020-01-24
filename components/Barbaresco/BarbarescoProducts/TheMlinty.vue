<template>
  <div
    id="theMlinty"
    class="container "
  >
    <div class="content">
      <productCard :products="pancakes" />
    </div>
  </div>
</template>

<script>
import pancakes from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheMlinty',

  components: {
    productCard
  },

  apollo: {
    pancakes: {
      prefetch: true,
      query: pancakes
    }
  },

  computed: {
    extractedProductPancakes () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-pancakes')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
