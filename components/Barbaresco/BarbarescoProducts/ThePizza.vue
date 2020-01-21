<template>
  <div
    id="thePizza"
    class="container "
  >
    <div class="content">
      <productCard :products="extractedProductsPizza" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'ThePizza',

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
    extractedProductsPizza () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-pizzas')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
