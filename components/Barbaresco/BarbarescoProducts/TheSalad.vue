<template>
  <div
    id="theSalads"
    class="container "
  >
    <div class="content">
      <productCard :products="extractedProductSalads" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'
export default {
  name: 'TheSalads',

  components: {
    productCard
  },

  apollo: {
    barbarescoCollection: {
      prefetch: true,
      query: barbarescoCollection
    }
  },

  computed: {
    extractedProductSalads () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-salads')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
