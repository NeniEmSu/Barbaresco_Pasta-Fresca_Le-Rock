<template>
  <div
    id="theGarnishes"
    class="container"
  >
    <div class="content">
      <productCard :products="extractedProductsGarnishes" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'
export default {
  name: 'TheGarnishes',
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
    extractedProductsGarnishes () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-garnishes')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
