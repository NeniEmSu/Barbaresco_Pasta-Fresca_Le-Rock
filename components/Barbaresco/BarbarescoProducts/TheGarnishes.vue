<template>
  <div
    id="theGarnishes"
    class="container"
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.garnishes.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          :products="garnishes"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import garnishes from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'
export default {
  name: 'TheGarnishes',
  components: {
    productCard
  },

  apollo: {
    garnishes: {
      prefetch: true,
      query: garnishes
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
