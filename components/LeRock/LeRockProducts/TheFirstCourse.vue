<template>
  <div
    id="theFirsteCourseLeRock"
    class="container "
  >
    <div class="content">
      <vue-page-transition name="fade">
        <div
          v-if="$apollo.queries.firstCourses.loading"
          class="mx-auto text-center"
        >
          <Loading />
        </div>
        <productCard
          v-else
          v-cloak
          :products="firstCourses"
        />
      </vue-page-transition>
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
