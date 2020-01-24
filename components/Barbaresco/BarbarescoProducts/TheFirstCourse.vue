<template>
  <div
    id="theFirsteCourse"
    class="container "
  >
    <div class="content">
      <productCard :products="firstCourses" />
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
