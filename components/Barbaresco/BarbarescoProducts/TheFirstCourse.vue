<template>
  <div
    id="theFirsteCourse"
    class="container "
  >
    <div class="content">
      <productCard :products="extractedProductFirstCourse" />
    </div>
  </div>
</template>

<script>
import barbarescoCollection from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

export default {
  name: 'TheFirstCourse',
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
    extractedProductFirstCourse () {
      return this.$apolloData.data.barbarescoCollection.filter(el => el.category === 'barbaresco-firstCourses')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px 0;
}
</style>
