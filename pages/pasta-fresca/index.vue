<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Меню",
    "tooltip": "Передзвонимо за 1 хв.",
    "description": "Відкриваємо суперздібності від смаку нашої пасти Приходьте та спробуйте самі"
  },
  "en": {
    "name": "Pasta Fresca",
   "title": "Menu",
   "tooltip": "Call back in 1 minute",
   "description": "Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!"

  },
  "ru": {
    "name": "Паста фреска",
    "title": "Меню",
    "tooltip": "Перезвоним за 1 мин.",
    "description": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
  }
}
</i18n>

<template>
  <div
    id="pasta-fresca"
    data-aos="fade-up"
    data-aos-easing="ease"
    data-aos-delay="250"
    data-aos-duration="500"
  >
    <TheImageNavigation />

    <TheImagedProductNav
      :current-products-displayed="currentProductsDisplayed"
      @changedView="updateView($event)"
    />

    <!-- <b-img-lazy
      class="feedBack d-none d-md-block"
      id="feedBack"
      src="~/assets/img/feedBack.png"
      alt="feedback Icon"
    >

    </b-img-lazy>
     <b-tooltip
      target="feedBack"
      placement="topleft"
      variant="light"
    >
      <strong>
        <h6> {{$t('tooltip')}}</h6>
      </strong>
    </b-tooltip> -->

    <vue-page-transition name="fade">
      <ThePasta v-if="currentProductsDisplayed === 1" />

      <TheAppetizers v-if="currentProductsDisplayed === 2" />

      <!-- <TheSushi v-if="currentProductsDisplayed === 3" /> -->

      <!-- <TheMlinty v-if="currentProductsDisplayed === 4" /> -->

      <TheDesert v-if="currentProductsDisplayed === 5" />

      <TheSalad v-if="currentProductsDisplayed === 6" />

      <TheFirstCourse v-if="currentProductsDisplayed === 7" />

      <TheGarnishes v-if="currentProductsDisplayed === 8" />

      <TheDrinks v-if="currentProductsDisplayed === 9" />

      <TheAlcohol v-if="currentProductsDisplayed === 10" />

      <TheMainMeal v-if="currentProductsDisplayed === 11" />
    </vue-page-transition>

    <TheBottomCarousel class="elaboraSpacing" />

    <TheMapComponent />
  </div>
</template>

<script>

import TheImageNavigation from '~/components/PastaFresca/TheImageNavigationPastaFresca'
import TheImagedProductNav from '~/components/PastaFresca/TheImagedProductNavPastaFresca'
import TheMapComponent from '~/components/PastaFresca/TheMapComponentPastaFresca'
import ThePasta from '~/components/PastaFresca/PastaFrescaProducts/ThePasta'
import TheSushi from '~/components/Barbaresco/BarbarescoProducts/TheSushi'
import TheDrinks from '~/components/PastaFresca/PastaFrescaProducts/TheDrinks'
import TheMlinty from '~/components/Barbaresco/BarbarescoProducts/TheMlinty'
import TheDesert from '~/components/PastaFresca/PastaFrescaProducts/TheDesert'
import TheSalad from '~/components/PastaFresca/PastaFrescaProducts/TheSalad'
import TheFirstCourse from '~/components/PastaFresca/PastaFrescaProducts/TheFirstCourse'
import TheGarnishes from '~/components/PastaFresca/PastaFrescaProducts/TheGarnishes'
import TheAppetizers from '~/components/PastaFresca/PastaFrescaProducts/TheAppetizers'
import TheAlcohol from '~/components/PastaFresca/PastaFrescaProducts/TheAlcohol'
import TheMainMeal from '~/components/PastaFresca/PastaFrescaProducts/TheMainMeal'
import TheBottomCarousel from '~/components/Barbaresco/TheBottomCarouselOwl'

export default {
  name: 'PastaFresca',
  layout: 'pasta-fresca',
  nuxtI18n: {
    paths: {
      en: '/pasta-fresca-menu',
      uk: '/Pasta-freska-menyu',
      ru: '/Pasta-freska-menyu'
    }
  },
  components: {
    TheImageNavigation,
    TheImagedProductNav,
    TheMapComponent,
    ThePasta,
    TheSushi,
    TheMlinty,
    TheDesert,
    TheSalad,
    TheFirstCourse,
    TheGarnishes,
    TheAppetizers,
    TheDrinks,
    TheAlcohol,
    TheMainMeal,
    TheBottomCarousel
  },

  meta: {
    animation: 'overlay-down-full'
  },

  data () {
    return {
      currentProductsDisplayed: // Math.floor((Math.random() * 10) + 1)
        1,
      loading: false

    }
  },

  created (append = false) {
    this.loading = true
    this.$store.dispatch('fetchProducts').then(() => (this.loading = false))
    this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
      title: 'Увага!',
      autoHideDelay: 5000,
      toaster: 'b-toaster-bottom-right',
      appendToast: append
    })
  },

  methods: {
    updateView (updatedView) {
      this.currentProductsDisplayed = updatedView
    }

  },
  head () {
    return {
      title: (this.$t('name') + ' - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (this.$t('name') + ' - ' + this.$t('description')).slice(
            0,
            320
          )
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
#pasta-fresca {
  background: url("~assets/img/pasta-fresca-background.jpg") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-color: #4c4240;
}

.feedBack {
  border: none;
  border-radius: 50%;
  background: none;
  position: absolute;
  bottom: 23.5%;
  right: 50px;
  cursor: pointer;
}

.elaboraSpacing {
  margin-top: 90px;
}
</style>
