<template>
  <div
    id="thePastaPastaFresca"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.pasta.loading"
          class="mx-auto text-center"
        >
          <LoadingWhite />
        </div>
        <productCard
          v-else
          :products="pasta"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import pasta from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

export default {
  name: 'ThePastaPastaFresca',
  components: {
    productCard
  },

  apollo: {
    pasta: {
      prefetch: true,
      query: pasta
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
