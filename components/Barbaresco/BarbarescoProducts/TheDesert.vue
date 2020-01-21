<template>
  <div
    id="theDeserts"
    class="container "
  >
    <div class="content">
      <productCard :products="extractedProductDesert" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheDeserts',
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
    extractedProductDesert () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-deserts')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
