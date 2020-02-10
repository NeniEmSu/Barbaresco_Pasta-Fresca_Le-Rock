<template>
  <div
    id="theAppetizersPastaFresca"
    class="container"
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.appetizers.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          :products="appetizers"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import appetizers from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'TheAppetizers',

  components: {
    productCard
  },

  apollo: {
    appetizers: {
      prefetch: true,
      query: appetizers
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
