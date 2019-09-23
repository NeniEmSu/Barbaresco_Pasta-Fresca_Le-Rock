<i18n>
{
  "uk": {
    "title": "Меню",
    "tooltip": "Передзвонимо за 1 хв.",
    "description": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"

  },
  "en": {
   "title": "Menu",
   "tooltip": "Call back in 1 minute",
   "description": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us"

  },
  "ru": {
    "title": "Меню",
    "tooltip": "Перезвоним за 1 мин.",
    "description": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас"
  }
}
</i18n>

<template>
  <div
    id="barbaresco"
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
      <ThePizza v-if="currentProductsDisplayed === 1" />

      <TheBugers v-if="currentProductsDisplayed === 2" />

      <TheSushi v-if="currentProductsDisplayed === 3" />

      <TheMlinty v-if="currentProductsDisplayed === 4" />

      <TheDesert v-if="currentProductsDisplayed === 5" />

      <TheSalad v-if="currentProductsDisplayed === 6" />

      <TheFirstCourse v-if="currentProductsDisplayed === 7" />

      <TheAppetizers v-if="currentProductsDisplayed === 8" />

      <TheDrinks v-if="currentProductsDisplayed === 9" />

      <TheAlcohol v-if="currentProductsDisplayed === 10" />

      <TheMainMeal v-if="currentProductsDisplayed === 11" />

      <TheGarnishes v-if="currentProductsDisplayed === 12" />
    </vue-page-transition>

    <TheBottomCarousel class="elaboraSpacing" />

    <TheMapComponent />
  </div>
</template>

<script>

import TheImageNavigation from '~/components/Barbaresco/TheImageNavigation'
import TheImagedProductNav from '~/components/Barbaresco/TheImagedProductNav'
import TheMapComponent from '~/components/Barbaresco/TheMapComponent'
import TheBugers from '~/components/Barbaresco/BarbarescoProducts/TheBugers'
import ThePizza from '~/components/Barbaresco/BarbarescoProducts/ThePizza'
import TheSushi from '~/components/Barbaresco/BarbarescoProducts/TheSushi'
import TheDrinks from '~/components/Barbaresco/BarbarescoProducts/TheDrinks'
import TheMlinty from '~/components/Barbaresco/BarbarescoProducts/TheMlinty'
import TheDesert from '~/components/Barbaresco/BarbarescoProducts/TheDesert'
import TheSalad from '~/components/Barbaresco/BarbarescoProducts/TheSalad'
import TheFirstCourse from '~/components/Barbaresco/BarbarescoProducts/TheFirstCourse'
import TheAppetizers from '~/components/Barbaresco/BarbarescoProducts/TheAppetizers'
import TheGarnishes from '~/components/Barbaresco/BarbarescoProducts/TheGarnishes'
import TheAlcohol from '~/components/Barbaresco/BarbarescoProducts/TheAlcohol'
import TheMainMeal from '~/components/Barbaresco/BarbarescoProducts/TheMainMeal'
import TheBottomCarousel from '~/components/Barbaresco/TheBottomCarouselOwl'

export default {
  name: 'Barbaresco',
  layout: 'barbaresco',
  components: {
    TheImageNavigation,
    TheImagedProductNav,
    TheMapComponent,
    TheBugers,
    ThePizza,
    TheSushi,
    TheMlinty,
    TheDesert,
    TheSalad,
    TheFirstCourse,
    TheAppetizers,
    TheGarnishes,
    TheDrinks,
    TheAlcohol,
    TheMainMeal,
    TheBottomCarousel
  },

  meta: {
    animation: 'overlay-down-full'
  },
  head () {
    return {
      title: ('Barbaresco - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ('Barbaresco -' + this.$t('description')).slice(
            0,
            320
          )
        }
      ]
    }
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

  }

}
</script>

<style lang="scss" scoped>
#barbaresco {
  background: url("~assets/img/textureBeton.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
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
  margin-top: 190px;
}
</style>
