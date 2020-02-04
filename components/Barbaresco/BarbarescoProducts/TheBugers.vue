<template>
  <div
    id="theBurgers"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.burgers.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          :products="burgers"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import burgers from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheBurgers',

  components: {
    productCard
  },

  apollo: {
    burgers: {
      prefetch: true,
      query: burgers
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
