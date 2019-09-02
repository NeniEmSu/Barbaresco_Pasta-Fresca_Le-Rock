<i18n>
{
  "uk": {
    "promotionTitle1": "Безкоштовна доставка від 301 грн",
    "promotionTitle2": "Безкоштовна доставка від 501 грн",
    "promotionTitle3": "Безкоштовна доставка від 1000 грн",
    "promotionDescription": "розрахунок лише готівкою!"
  },
  "en": {
   "promotionTitle1": "Free delivery from 301 UAH",
"promotionTitle2": "Free delivery from 500 UAH",
"promotionTitle3": "Free delivery from 1000 UAH",
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

    <client-only>
      <carousel
        :nav="true"
        :dots="true"
        :items="1"
        :loop="true"
        :mouseDrag="true"
        :touchDrag="true"
        :autoplay="true"
        :rewind="false"
      >
        <div
          v-for="n in 3"
          :key="n"
        >
          <b-card
            overlay
            img-src="~/assets/img/pizzaBaner.jpg"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-card-text class="p-lg-5 p-sm-2">
              <h4 class="card-title">
                {{ $t('promotionTitle1')}}
              </h4>
              {{ $t('promotionDescription') }}
            </b-card-text>
          </b-card>
        </div>

      </carousel>
    </client-only>
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
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false

    }
  }
}
</script>

<style lang="scss">
.owl-theme .owl-dots .owl-dot span {
  width: 15px;
  height: 15px;
  margin: 5px 7px;
  background: #545454;
  opacity: 0.8;
  display: block;
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
  transition: opacity 200ms ease;
  border-radius: 30px;
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.55);
  width: 20px;
  height: 20px;
}

@media screen and (min-width: 1246px) {
  .owl-carousel .owl-nav button.owl-prev,
  .owl-carousel .owl-nav button.owl-next {
    background: none;
    color: inherit;
    border: none;
    padding: 0 !important;
    font-size: 50px;
    position: absolute;
    top: 25%;
  }

  .owl-carousel .owl-nav button.owl-prev {
    left: -2rem;
  }

  .owl-carousel .owl-nav button.owl-next {
    right: -2rem;
  }
}

@media (max-width: 992px) {
  h4 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;

    color: #ffffff;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;

    margin-bottom: 0;
  }
}

@media (max-width: 500px) {
  .card {
    height: 120px;

    img {
      height: 120px;
      width: auto;
      object-fit: cover;
    }
  }

  h4 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;

    margin-bottom: 0;
  }

  .carousel-caption {
    padding: 0;
  }

  .carousel ol {
    margin-bottom: 0;
  }

  .owl-carousel .owl-nav button.owl-prev,
  .owl-carousel .owl-nav button.owl-next {
    background: none;
    color: inherit;
    border: none;
    padding: 0 !important;
    font-size: 50px;
    position: absolute;
    top: 10%;
  }

  .owl-carousel .owl-nav button.owl-prev {
    left: -1.3rem;
  }

  .owl-carousel .owl-nav button.owl-next {
    right: -1.3rem;
  }
}

@media (max-width: 375px) {
  h4 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;

    margin-bottom: -10px;
  }
}

@media (max-width: 320px) {
  h4 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;

    margin-bottom: 0;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;

    margin-bottom: -10px;
  }
}
</style>
