<template>
  <div
    class="container "
    id="theFirsteCourse"
  >

    <div class="content">

      <div class="row">
        <div
          class="card"
          v-for="firstCourse in extractedProductFirstCourse"
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
            >{{(firstCourse.summary).slice(0, 35)}}...<span class="card-text quantity">{{firstCourse.volume}}</span></p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{firstCourse.volume}}</span> {{firstCourse.price | currency}}</p>
              </div>
              <div class="col-sm-7 pl-0 text-center  my-auto">
                <button
                  class="btn my-auto mr-auto"
                  @click.prevent="addToCart(firstCourse.id)"
                >{{$t('order')}}</button></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import productData from "~/plugins/api/products.js"
export default {
  name: 'theFirstCourse',
  data () {
    return {

    }
  },

  computed: {
    extractedProductFirstCourse () {
      return productData.filter(el => el.category === "firstCourses")
    }
  },

  methods: {
    addToCart (id, append = false) {
      this.$store.dispatch("addToCart", id);
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: "b-toaster-bottom-right",
        appendToast: append
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
