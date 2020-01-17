<template>
  <div
    id="thePizza"
    class="container "
  >
    <div class="content">
      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
        <div
          v-for="product in extractedProductsPizzaEn"
          :key="product._id"
          class="card"
        >
          <img
            loading="lazy"
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              :title="product.name"
            >
              {{ product.name }}
            </h5>
            <p
              v-b-tooltip.hover
              class="card-text text-left d-none d-sm-block ingredients"
              style="cursor: context-menu;"
              :title="product.summary"
            >
              {{ (product.summary).slice(0, 35) }}... <span class="card-text quantity">{{ product.volume }}</span>
            </p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto">
                  <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                </p>
              </div>
              <div class="col-sm-7 p-0 text-center my-auto">
                <button
                  class="btn my-auto mr-auto center"
                  @click.prevent="addToCart(product._id)"
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
          v-for="product in extractedProductsPizzaRu"
          :key="product._id"
          class="card"
        >
          <img
            loading="lazy"
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              :title="product.name"
            >
              {{ product.name }}
            </h5>
            <p
              v-b-tooltip.hover
              class="card-text text-left d-none d-sm-block"
              style="cursor: context-menu;"
              :title="product.summary"
            >
              {{ (product.summary).slice(0, 35) }}... <span class="card-text quantity">{{ product.volume }}</span>
            </p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto">
                  <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                </p>
              </div>
              <div class="col-sm-7 p-0 text-center my-auto">
                <button
                  class="btn my-auto mr-auto center"
                  @click.prevent="addToCart(product._id)"
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
          v-for="product in extractedProductsPizza"
          :key="product._id"
          class="card"
        >
          <img
            loading="lazy"
            class="card-img-top mx-auto"
            :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
            :alt="product.name"
          >
          <div class="card-body">
            <h5
              v-b-tooltip.hover
              class="card-title mx-auto text-center crop"
              style="cursor:context-menu"
              :title="product.name"
            >
              {{ product.name }}
            </h5>
            <p
              v-b-tooltip.hover
              class="card-text text-left d-none d-sm-block"
              style="cursor: context-menu;"
              :title="product.summary"
            >
              {{ (product.summary).slice(0, 35) }}... <span class="card-text quantity">{{ product.volume }}</span>
            </p>

            <div class="row">
              <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                <p class="card-text cost my-auto">
                  <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                </p>
              </div>
              <div class="col-sm-7 p-0 text-center my-auto">
                <button
                  class="btn my-auto mr-auto center"
                  @click.prevent="addToCart(product._id)"
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
import { mapState } from 'vuex'
import barbarescoEnCollection from '~/gql/barbarescoEn'
import barbarescoUkCollection from '~/gql/barbarescoUk'
import barbarescoRuCollection from '~/gql/barbarescoRu'
// import { productData, productDataEn, productDataRu } from '~/plugins/api/index'

export default {
  name: 'ThePizza',
  data () {
    return {

    }
  },

  apollo: {
    barbarescoEnCollection: {
      prefetch: true,
      query: barbarescoEnCollection
    },
    barbarescoUkCollection: {
      prefetch: true,
      query: barbarescoUkCollection
    },
    barbarescoRuCollection: {
      prefetch: true,
      query: barbarescoRuCollection
    }
  },

  computed: {
    ...mapState([
      'products'
    ]),
    extractedProductsPizza () {
      return this.$apolloData.data.barbarescoUkCollection.filter(el => el.category === 'barbaresco-pizzas')
    },
    extractedProductsPizzaEn () {
      return this.$apolloData.data.barbarescoEnCollection.filter(el => el.category === 'barbaresco-pizzas')
    },
    extractedProductsPizzaRu () {
      return this.$apolloData.data.barbarescoRuCollection.filter(el => el.category === 'barbaresco-pizzas')
    }
  },
  methods: {
    addToCart (id, toaster, append = false) {
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
