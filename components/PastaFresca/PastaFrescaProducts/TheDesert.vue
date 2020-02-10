<template>
  <div
    id="theDesertsPastaFresca"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.deserts.loading"
          class="mx-auto text-center"
        >
          <LoadingWhite />
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
import deserts from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'TheDesertsPastaFresca',
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
@import "~assets/scss/productCardsWhite.scss";
</style>
