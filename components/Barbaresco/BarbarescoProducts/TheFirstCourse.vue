<template>
  <div
    id="theFirsteCourse"
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
          :products="firstCourses"
        />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import firstCourses from '~/gql/barbaresco'
import productCard from '~/components/Barbaresco/TheProductsCard'

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
.content {
  margin: 20px 0;
}
</style>
