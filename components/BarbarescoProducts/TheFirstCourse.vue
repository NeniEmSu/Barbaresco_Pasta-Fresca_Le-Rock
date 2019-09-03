<template>
  <div
    class="container "
    id="theFirsteCourse"
  >

    <div class="content">

      <div class="row">
        <div
          class="card"
          v-for="firstCourse in firstCourses.firstCourses"
          :key="firstCourse.id"
        >

          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${firstCourse.image + '.png'}`)"
            :alt="firstCourse.name"
          >
          <div class="card-body">
            <h5
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              v-b-tooltip.hover
              :title="firstCourse.name"
            >{{firstCourse.name}}</h5>
            <p
              class="card-text text-left d-none d-sm-block ingredients"
              style="cursor: context-menu;"
              v-b-tooltip.hover
              :title="firstCourse.summary"
            >{{(firstCourse.summary).slice(0, 35)}}...<span class="card-text quantity">{{firstCourse.quantity}}</span></p>

            <div class="row">
              <div class="col-sm-4 pr-0 my-auto">
                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{firstCourse.quantity}}</span> {{firstCourse.price}}</p>
              </div>
              <div class="col-sm-8 text-center  my-auto">
                <button class="btn my-auto mr-auto">Замовити</button></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import firstCourses from "~/api/barbaresco.json"
export default {
  name: 'theFirstCourse',
  data () {
    return {
      firstCourses
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
