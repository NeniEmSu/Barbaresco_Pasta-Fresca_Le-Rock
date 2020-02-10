<template>
  <div
    id="theGarnishesPastaFresca"
    class="container "
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
import garnishes from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'TheGarnishesPastaFresca',
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
@import "~assets/scss/productCardsWhite.scss";
</style>
