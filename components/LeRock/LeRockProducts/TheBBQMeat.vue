<template>
  <div
    id="theTheBBQMeat"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.meat.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          v-cloak
          :products="meat"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import meat from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheTheBBQMeat',
  components: {
    productCard
  },

  apollo: {
    meat: {
      prefetch: true,
      query: meat
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
