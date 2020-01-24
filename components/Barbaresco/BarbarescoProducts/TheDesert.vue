<template>
  <div
    id="theDeserts"
    class="container "
  >
    <div class="content">
      <productCard :products="deserts" />
    </div>
  </div>
</template>

<script>
import deserts from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheDeserts',
  components: {
    productCard
  },

  apollo: {
    deserts: {
      prefetch: true,
      query: deserts
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
