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
  <div
    id="botttom-carousel"
    class="container "
  >
    <client-only>
      <style>
      #botttom-carousel .owl-carousel .owl-item img {
        display: block;
        width: 100%;
        height: 100%;
      }

      #botttom-carousel .owl-theme .owl-dots .owl-dot.active,
      #botttom-carousel .owl-theme .owl-dots .owl-dot:hover {
        height: 29.6px !important;
      }

      #botttom-carousel .owl-theme .owl-dots .owl-dot span {
        width: 15px !important;
        height: 15px !important;
        background: #DADADA !important;
        opacity: 0.7 !important;
        display: block;
        backface-visibility: visible;
        -webkit-backface-visibility: visible;
        transition: opacity 200ms ease;
        border-radius: 30px !important;
      }

      #botttom-carousel .owl-theme .owl-dots .owl-dot.active span,
      #botttom-carousel .owl-theme .owl-dots .owl-dot:hover span {
        background: #ffffff !important;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.55) !important;
        width: 20px !important;
        height: 20px !important;
      }

      @media screen and (min-width: 1246px) {

        #botttom-carousel .owl-carousel .owl-nav button.owl-prev,
        #botttom-carousel .owl-carousel .owl-nav button.owl-next {
          background: none;
          color: #ffffff;
          border: none;
          padding: 0 !important;
          font-size: 80px !important;
          font-weight: 100;
          position: absolute;
          top: 18%;

        }

        #botttom-carousel .owl-carousel .owl-nav button.owl-prev {
          left: -3rem;
        }

        #botttom-carousel .owl-carousel .owl-nav button.owl-next {
          right: -3rem;
        }
      }

      @media (max-width: 992px) {
        #botttom-carousel h4 {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 22px;

          color: #ffffff !important;
        }

        #botttom-carousel p {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;

          color: #ffffff;

          margin-bottom: 0;
        }
      }

      @media (max-width: 500px) {
        #botttom-carousel .card {
          height: 120px;

          img {
            height: 120px;
            width: auto;
            object-fit: cover;
          }
        }

        #botttom-carousel h4 {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;

          color: #ffffff;
        }

        #botttom-carousel p {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;

          color: #ffffff;

          margin-bottom: 0;
        }

        #botttom-carousel .carousel-caption {
          padding: 0;
        }

        #botttom-carousel .carousel ol {
          margin-bottom: 0;
        }

        #botttom-carousel .owl-carousel .owl-nav button.owl-prev,
        #botttom-carousel .owl-carousel .owl-nav button.owl-next {
          background: none;
          color: inherit;
          border: none;
          padding: 0 !important;
          font-size: 50px !important;
          position: absolute;
          top: 10%;
        }

        #botttom-carousel .owl-carousel .owl-nav button.owl-prev {
          left: -1.3rem;
        }

        #botttom-carousel .owl-carousel .owl-nav button.owl-next {
          right: -1.3rem;
        }

        .owl-theme .owl-nav.disabled+.owl-dots {
          margin-top: -10px;
        }
      }

      @media (max-width: 375px) {
        #botttom-carousel h4 {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;

          color: #ffffff;
        }

        #botttom-carousel p {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;

          color: #ffffff;

          margin-bottom: -10px;
        }
      }

      @media (max-width: 320px) {
        #botttom-carousel h4 {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;

          color: #ffffff;

          margin-bottom: 0;
        }

        #botttom-carousel p {
          font-family: 'Roboto', sans-serif;

          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;

          color: #ffffff;

          margin-bottom: -10px;
        }
      }
      </style>
      <carousel
        :nav="true"
        :dots="true"
        :items="1"
        :loop="true"
        :mouse-drag="true"
        :touch-drag="true"
        :autoplay="true"
        :rewind="false"
        :autoplay-hover-pause="true"
        :responsive="{
          0: { nav: false },
          1025: { nav: true }
        }"
      >
        <div>
          <b-card
            overlay
            img-src="~/assets/img/pizzaBaner.jpg"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-card-text class="card-img-overlay h-100 d-flex flex-column justify-content-center text-left">
              <h4 class="card-title">
                {{ $t('promotionTitle1') }}
              </h4>
              {{ $t('promotionDescription') }}
            </b-card-text>
          </b-card>
        </div>
        <div>
          <b-card
            overlay
            img-src="~/assets/img/pizzaBaner.jpg"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-card-text class="card-img-overlay h-100 d-flex flex-column justify-content-center text-left">
              <h4 class="card-title">
                {{ $t('promotionTitle2') }}
              </h4>
              {{ $t('promotionDescription') }}
            </b-card-text>
          </b-card>
        </div>
        <div>
          <b-card
            overlay
            img-src="~/assets/img/pizzaBaner.jpg"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-card-text class="card-img-overlay h-100 d-flex flex-column justify-content-center text-left">
              <h4 class="card-title">
                {{ $t('promotionTitle3') }}
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

<style lang="scss" scoped>
.card {
  background-color: transparent;
  border: none;
  img {
    object-fit: scale-down;
  }
}
</style>
