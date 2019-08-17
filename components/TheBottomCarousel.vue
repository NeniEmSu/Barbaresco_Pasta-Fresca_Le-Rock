<i18n>
{
  "uk": {
    "promotionTitle1": "Безкоштовна доставка від 301 грн",
    "promotionTitle2": "Безкоштовна доставка від 501 грн",
    "promotionTitle3": "Безкоштовна доставка від 1000 грн",
    "promotionDescription": "розрахунок лише готівкою!"
  },
  "en": {
   "promotionTitle1": "Free shipping from 301 UAH",
"promotionTitle2": "Free shipping from 500 UAH",
"promotionTitle3": "Free shipping from 1000 UAH",
   "promotionDescription": "cash only!"
  },
  "ru": {
    "promotionTitle1": "Бесплатная доставка от 301 грн",
    "promotionTitle2": "Бесплатная доставка от 500 грн",
    "promotionTitle3": "Бесплатная доставка от 1000 грн",
    "promotionDescription": "расчет только наличными!"
  }
}
</i18n>

<template>
  <div class="container ">
    <b-carousel
      class="mb-5"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="250"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
        class="img-fluid w-100 d-block"
        img-src="~/assets/img/pizzaBaner.png"
      >
        <h2 class="text-left col-6 p-0">{{ $t('promotionTitle1') }}</h2>
        <p class="text-left">
          {{ $t('promotionDescription') }}
        </p>
      </b-carousel-slide>

      <b-carousel-slide
        class="img-fluid w-100 d-block"
        img-src="~/assets/img/pizzaBaner.png"
      >
        <h2 class="text-left col-6 p-0">{{ $t('promotionTitle2') }}</h2>
        <p class="text-left">
          {{ $t('promotionDescription') }}
        </p>
      </b-carousel-slide>

      <b-carousel-slide
        class="img-fluid w-100 d-block"
        img-src="~/assets/img/pizzaBaner.png"
      >
        <h2 class="text-left col-6 p-0">{{ $t('promotionTitle3') }}</h2>
        <p class="text-left">
          {{ $t('promotionDescription') }}
        </p>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
export default {
  name: 'TheBottomCarousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
.carousel-control-prev {
  margin-left: -100px;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-control-next {
  margin-right: -100px;
}
</style>
