<template>
  <div
    id="theFirsteCourseLeRock"
    class="container "
  >
    <div class="content">
      <productCard :products="firstCourses" />
    </div>
  </div>
</template>

<script>
import firstCourses from '~/gql/leRock'
import productCard from '~/components/LeRock/TheProductsCard'

export default {
  name: 'TheFirstCourse',
  components: {
    productCard
  },

  apollo: {
    firstCourses: {
      prefetch: true,
      query: firstCourses
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWhite.scss";
</style>
