<template>
  <div class="row">
    <div
      v-for="product in products"
      :key="product._id"
      class="card"
    >
      <img
        v-if="product.imageUri.path !== null"
        loading="lazy"
        width="200"
        height="200"
        class="card-img-top mx-auto"
        :src="`https://barbaresco-admin.w-start.com.ua/api/cockpit/image?token=ffb42583d5425c6231d7655b44e497&w=200&h=200&f[brighten]=0&o=true&src=${product.imageUri.path}`"
        :alt="product.nameUk || product.nameRu || product.nameEn"
      >
      <img
        v-else
        loading="lazy"
        width="200"
        height="200"
        class="card-img-top mx-auto"
        :src="require(`~/assets/img/${product.image + '.jpg'}`)"
        :alt="product.nameUk || product.nameRu || product.nameEn"
      >
      <div class="card-body">
        <h5
          v-if="$i18n.locale === 'en'"
          v-b-tooltip.hover
          class="card-title mx-auto text-center crop"
          style="cursor:context-menu"
          :title="product.nameEn.length > 19 ? product.nameEn || product.nameUk || product.nameRu : ''"
        >
          {{ product.nameEn || product.nameUk || product.nameRu }}
        </h5>
        <h5
          v-else-if="$i18n.locale === 'uk'"
          v-b-tooltip.hover
          class="card-title mx-auto text-center crop"
          style="cursor:context-menu"
          :title="product.nameUk.length > 19 ? product.nameUk || product.nameRu || product.nameEn : ''"
        >
          {{ product.nameUk || product.nameRu || product.nameEn }}
        </h5>
        <h5
          v-else-if="$i18n.locale === 'ru'"
          v-b-tooltip.hover
          class="card-title mx-auto text-center crop"
          style="cursor:context-menu"
          :title="product.nameRu.length > 19 ? product.nameRu || product.nameUk || product.nameEn : ''"
        >
          {{ product.nameRu || product.nameUk || product.nameEn }}
        </h5>
        <p
          v-if="$i18n.locale === 'en'"
          v-b-tooltip.hover
          class="card-text text-left d-none d-sm-block ingredients"
          style="cursor: context-menu;"
          :title="product.summaryEn || product.summaryUk || product.summaryRu"
        >
          {{ (product.summaryEn || product.summaryUk || product.summaryRu).slice(0, 35) }}<span v-if="product.summaryEn.length > 30">...</span><span class="card-text quantity">{{ product.volumeEn || product.volumeUk || product.volumeRu }}</span>
        </p>

        <p
          v-else-if="$i18n.locale === 'ru'"
          v-b-tooltip.hover
          class="card-text text-left d-none d-sm-block ingredients"
          style="cursor: context-menu;"
          :title="product.summaryRu.length > 30 ? product.summaryRu || product.summaryUk || product.summaryEn : ''"
        >
          {{ (product.summaryRu || product.summaryUk || product.summaryEn).slice(0, 30) }}<span v-if="product.summaryRu.length > 30">...</span><span class="card-text quantity">{{ product.volumeRu || product.volumeUk || product.volumeEn }}</span>
        </p>

        <p
          v-else-if="$i18n.locale === 'uk'"
          v-b-tooltip.hover
          class="card-text text-left d-none d-sm-block ingredients"
          style="cursor: context-menu;"
          :title="product.summaryUk.length > 30 ? product.summaryUk || product.summaryRu || product.summaryUk : ''"
        >
          {{ (product.summaryUk || product.summaryRu || product.summaryEn).slice(0, 30) }}<span v-if="product.summaryUk.length > 30">...</span> <span class="card-text quantity">{{ product.volumeUk || product.volumeRu || product.volumeEn }}</span>
        </p>

        <div class="row">
          <div class="col-sm-5 pr-4 pr-md-0 my-auto">
            <p
              v-if="$i18n.locale === 'en'"
              class="card-text cost my-auto"
            >
              <span class="card-text d-inline d-sm-none">{{ product.volumeEn || product.volumeUk || product.volumeRu }}</span> {{ product.price | currency }}
            </p>
            <p
              v-else
              class="card-text cost my-auto"
            >
              <span class="card-text d-inline d-sm-none">{{ product.volumeUk || product.volumeRu || product.volumeEn }}</span> {{ product.price | currency }}
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
</template>

<script>
export default {
  name: 'ProductsCard',

  props: {
    // eslint-disable-next-line vue/require-default-prop
    products: {
      type: Array
    }
  },

  methods: {
    addToCart (id, append = false) {
      this.$store.dispatch('addToleRockCart', id)
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
@import "~assets/scss/productCardsWhite.scss";
</style>
