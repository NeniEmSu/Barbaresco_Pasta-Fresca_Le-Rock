<template>
  <div
    id="theAppetizers"
    class="container "
  >
    <div class="content">
      <productCard :products="extractedProductsAppetizers" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheAppetizers',

  components: {
    productCard
  },
  data () {
    return {

    }
  },

  apollo: {
    barbarescoCollection: {
      prefetch: true,
      query: barbarescoCollection
    }
  },

  computed: {
    extractedProductsAppetizers () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-appetizers')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
