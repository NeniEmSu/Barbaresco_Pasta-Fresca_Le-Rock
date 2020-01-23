<template>
  <div
    id="theFirsteCoursePastaFresca"
    class="container "
  >
    <div class="content">
      <productCard :products="firstCourses" />
    </div>
  </div>
</template>

<script>
import firstCourses from '~/gql/pastaFresca'
import productCard from '~/components/PastaFresca/TheProductsCard'

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
