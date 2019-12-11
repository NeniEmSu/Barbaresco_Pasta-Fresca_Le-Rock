<template>
  <div
    id="theBurgers"
    class="container "
  >
    <div class="content">
      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
        <div
          v-for="product in extractedProductsBurgersEn"
          :key="product.id"
          class="card"
        >
          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop d-block d-md-none"
              style="cursor:context-menu"
              :title="product.name.length > 8 ? product.name : ''"
            >
              {{ product.name }}
            </h5>
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop d-none d-md-block"
              style="cursor:context-menu"
              :title="product.name.length > 19 ? product.name : ''"
            >
              {{ product.name }}
            </h5>
            <p
              v-b-tooltip.hover
              class="card-text d-none d-sm-block text-left ingredients"
              style="cursor: context-menu;"
              :title="product.summary.length > 39 ? product.summary : ''"
            >
              {{ (product.summary).slice(0, 39) }}<span v-if="product.summary.length > 39">...</span><span class="card-text quantity">{{ product.volume }}</span>
            </p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto">
                  <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                </p>
              </div>
              <div class="col-sm-7 p-0 text-center  my-auto">
                <button
                  class="btn my-auto mr-auto center"
                  @click.prevent="addToCart(product.id)"
                >
                  {{ $t('order') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
        <div
          v-for="product in extractedProductsBurgersRu"
          :key="product.id"
          class="card"
        >
          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop d-block d-md-none"
              style="cursor:context-menu"
              :title="product.name.length > 8 ? product.name : ''"
            >
              {{ product.name }}
            </h5>
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop d-none d-md-block"
              style="cursor:context-menu"
              :title="product.name.length > 19 ? product.name : ''"
            >
              {{ product.name }}
            </h5>
            <p
              v-b-tooltip.hover
              class="card-text d-none d-sm-block text-left ingredients"
              style="cursor: context-menu;"
              :title="product.summary.length > 39 ? product.summary : ''"
            >
              {{ (product.summary).slice(0, 39) }}<span v-if="product.summary.length > 39">...</span><span class="card-text quantity">{{ product.volume }}</span>
            </p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto">
                  <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                </p>
              </div>
              <div class="col-sm-7 p-0 text-center  my-auto">
                <button
                  class="btn my-auto mr-auto center"
                  @click.prevent="addToCart(product.id)"
                >
                  {{ $t('order') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
        <div
          v-for="product in extractedProductsBurgers"
          :key="product.id"
          class="card"
        >
          <img
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop d-block d-md-none"
              style="cursor:context-menu"
              :title="product.name.length > 8 ? product.name : ''"
            >
              {{ product.name }}
            </h5>
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop d-none d-md-block"
              style="cursor:context-menu"
              :title="product.name.length > 19 ? product.name : ''"
            >
              {{ product.name }}
            </h5>
            <p
              v-b-tooltip.hover
              class="card-text d-none d-sm-block text-left ingredients"
              style="cursor: context-menu;"
              :title="product.summary.length > 39 ? product.summary : ''"
            >
              {{ (product.summary).slice(0, 39) }}<span v-if="product.summary.length > 39">...</span><span class="card-text quantity">{{ product.volume }}</span>
            </p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto">
                  <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                </p>
              </div>
              <div class="col-sm-7 p-0 text-center  my-auto">
                <button
                  class="btn my-auto mr-auto center"
                  @click.prevent="addToCart(product.id)"
                >
                  {{ $t('order') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productData, productDataEn, productDataRu } from '~/plugins/api/index'

export default {
  name: 'TheBurgers',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsBurgers () {
      return productData.filter(el => el.category === 'barbaresco-burgers')
    },
    extractedProductsBurgersEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-burgers')
    },
    extractedProductsBurgersRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-burgers')
    }
  },

  methods: {
    addToCart (id, append = false) {
      this.$store.dispatch('addToCart', id)
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: 'b-toaster-bottom-right',
        appendToast: append
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
