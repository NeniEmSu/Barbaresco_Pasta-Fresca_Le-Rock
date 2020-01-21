<template>
  <div
    id="theBurgers"
    class="container "
  >
    <div class="content">
      <productCard :products="extractedProductsBurgers" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheBurgers',

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
    extractedProductsBurgers () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-burgers')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
