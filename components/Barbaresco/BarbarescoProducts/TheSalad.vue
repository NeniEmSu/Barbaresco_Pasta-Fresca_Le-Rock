<template>
  <div
    id="theSalads"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.salads.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          :products="salads"
        />
      </vue-page-transition>
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
