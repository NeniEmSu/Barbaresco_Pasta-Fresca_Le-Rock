<template>
  <div
    id="theAppetizers"
    class="container "
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
import appetizers from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheAppetizers',

  components: {
    productCard
  },
  data () {
    return {

    }
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
.content {
  margin: 20px 0;
}
</style>
