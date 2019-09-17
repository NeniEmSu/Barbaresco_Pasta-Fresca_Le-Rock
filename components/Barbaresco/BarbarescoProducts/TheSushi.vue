<template>
  <div
    class="container "
    id="theSushi"
  >

    <div class="content">

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block"> РОЛИ МАКІ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="makiRoll in extractedProductsMakiRolls"
              :key="makiRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${makiRoll.image + '.png'}`)"
                :alt="makiRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="makiRoll.name"
                >{{makiRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="makiRoll.summary"
                >{{(makiRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{makiRoll.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{makiRoll.volume}}</span> {{makiRoll.price | currency}}</p>

                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(makiRoll.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">

          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">РОЛИ ФУТОМАКІ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>
        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="photoMakiRoll in extractedProductsPhotoMakiRolls"
              :key="photoMakiRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${photoMakiRoll.image + '.png'}`)"
                :alt="photoMakiRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="photoMakiRoll.name"
                >{{photoMakiRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="photoMakiRoll.summary"
                >{{(photoMakiRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{photoMakiRoll.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{photoMakiRoll.volume}}</span> {{photoMakiRoll.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(photoMakiRoll.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">ОРИГІНАЛЬНІ РОЛИ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="originalRoll in extractedProductsOriginalRoll"
              :key="originalRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${originalRoll.image + '.png'}`)"
                :alt="originalRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="originalRoll.name"
                >{{originalRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="originalRoll.summary"
                >{{(originalRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{originalRoll.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{originalRoll.volume}}</span> {{originalRoll.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(originalRoll.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">

          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">РОЛИ КАЛІФОРНІЯ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="californiaRoll in extractedProductsCaliforniaRoll"
              :key="californiaRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${californiaRoll.image + '.png'}`)"
                :alt="californiaRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="californiaRoll.name"
                >{{californiaRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="californiaRoll.summary"
                >{{(californiaRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{californiaRoll.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{californiaRoll.volume}}</span> {{californiaRoll.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(californiaRoll.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">РОЛИ ФІЛАДЕЛЬФІЯ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="PhiladelphiaRoll in extractedProductsPhiladelphiaRoll"
              :key="PhiladelphiaRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${PhiladelphiaRoll.image + '.png'}`)"
                :alt="PhiladelphiaRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="PhiladelphiaRoll.name"
                >{{PhiladelphiaRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="PhiladelphiaRoll.summary"
                >{{(PhiladelphiaRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{PhiladelphiaRoll.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{PhiladelphiaRoll.volume}}</span> {{PhiladelphiaRoll.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(PhiladelphiaRoll.id)"
                    >Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">РОЛИ ДРАКОНИ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoSushiIcon.svg"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="drakoniRoll in extractedProductsDrakoniRoll"
              :key="drakoniRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${drakoniRoll.image + '.png'}`)"
                :alt="drakoniRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="drakoniRoll.name"
                >{{drakoniRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="drakoniRoll.summary"
                >{{(drakoniRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{drakoniRoll.volume}}</span></p>

                <div class="row">
                  <div class="col-sm-5 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{drakoniRoll.volume}}</span> {{drakoniRoll.price | currency}}</p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(drakoniRoll.id)"
                    >Замовити</button></div>
                </div>

              </div>

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
  name: 'TheSushi',
  data () {
    return {


    }
  },

  computed: {
    extractedProductsMakiRolls () {
      return productData.filter(el => el.category === "makiRoll")
    },
    extractedProductsPhotoMakiRolls () {
      return productData.filter(el => el.category === "photoMakiRoll")
    },
    extractedProductsOriginalRoll () {
      return productData.filter(el => el.category === "originalRoll")
    },
    extractedProductsCaliforniaRoll () {
      return productData.filter(el => el.category === "californiaRoll")
    },
    extractedProductsPhiladelphiaRoll () {
      return productData.filter(el => el.category === "PhiladelphiaRoll")
    },
    extractedProductsDrakoniRoll () {
      return productData.filter(el => el.category === "drakoniRoll")
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
@import "~assets/scss/productCardsWithCategories.scss";
</style>
