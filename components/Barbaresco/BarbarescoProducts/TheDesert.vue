<template>
  <div
    id="theDeserts"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.deserts.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          :products="deserts"
        />
      </vue-page-transition>
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
