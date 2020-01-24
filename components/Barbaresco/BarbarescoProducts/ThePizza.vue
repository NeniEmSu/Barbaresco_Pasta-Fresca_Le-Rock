<template>
  <div
    id="thePizza"
    class="container "
  >
    <div class="content">
      <productCard :products="pizzas" />
    </div>
  </div>
</template>

<script>
import pizzas from '~/gql/barbaresco'
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
    pizzas: {
      prefetch: true,
      query: pizzas
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
