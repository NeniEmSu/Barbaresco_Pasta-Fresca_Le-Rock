<template>
  <div
    id="theRockDogs"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.rockDog.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          v-cloak
          :products="rockDog"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import rockDog from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'
export default {
  name: 'TheRockDog',
  components: {
    productCard
  },

  apollo: {
    rockDog: {
      prefetch: true,
      query: rockDog
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
