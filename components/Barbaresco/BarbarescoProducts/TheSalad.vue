<template>
  <div
    id="theSalads"
    class="container "
  >
    <div class="content">
      <productCard :products="salads" />
    </div>
  </div>
</template>

<script>
import salads from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'
export default {
  name: 'TheSalads',

  components: {
    productCard
  },

  apollo: {
    salads: {
      prefetch: true,
      query: salads
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
