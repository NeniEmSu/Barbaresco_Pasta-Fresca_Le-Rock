<template>
  <div
    id="theFirsteCourse"
    class="container "
  >
    <div class="content">
      <productCard :products="extractedProductMainMeals" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'
export default {
  name: 'ThemainMeal',
  components: {
    productCard
  },

  apollo: {
    barbarescoCollection: {
      prefetch: true,
      query: barbarescoCollection
    }
  },

  computed: {
    extractedProductMainMeals () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-mainMeals')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
