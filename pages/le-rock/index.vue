<i18n>
{
  "uk": {
    "name": "Ле Рок",
    "title": "Меню",
    "tooltip": "Передзвонимо за 1 хв.",
    "description": "Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!"

  },
  "en": {
    "name": "Le Rock",
   "title": "Menu",
   "tooltip": "Call back in 1 minute",
   "description": "Company of friends, delicious menu and great atmosphere - only in Le Rock!"

  },
  "ru": {
    "name": "Ле Рок",
    "title": "Меню",
    "tooltip": "Перезвоним за 1 мин.",
    "description": "Компания друзей, вкусное меню и отличная атмосфера - только в Le Rock!"
  }
}
</i18n>

<template>
  <div
    id="le-rock"
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
      <TheAppetizers v-if="currentProductsDisplayed === 1" />

      <TheRockDogs v-if="currentProductsDisplayed === 2" />

      <TheTheBBQMeat v-if="currentProductsDisplayed === 3" />

      <TheGarnishes v-if="currentProductsDisplayed === 4" />

      <TheDesert v-if="currentProductsDisplayed === 5" />

      <TheSalad v-if="currentProductsDisplayed === 6" />

      <TheFirstCourse v-if="currentProductsDisplayed === 7" />

      <!-- <TheHits v-if="currentProductsDisplayed === 8" /> -->

      <TheDrinks v-if="currentProductsDisplayed === 9" />

      <TheAlcohol v-if="currentProductsDisplayed === 10" />

      <TheMainMeal v-if="currentProductsDisplayed === 11" />
    </vue-page-transition>

    <TheBottomCarousel class="elaboraSpacing" />

    <TheMapComponent />
  </div>
</template>

<script>

import TheImageNavigation from '~/components/LeRock/TheImageNavigationLeRock'
import TheImagedProductNav from '~/components/LeRock/TheImagedProductNavLeRock'
import TheMapComponent from '~/components/Barbaresco/TheMapComponent'
import TheRockDogs from '~/components/LeRock/LeRockProducts/TheRockDogs'
import TheAppetizers from '~/components/LeRock/LeRockProducts/TheAppetizers'
import TheTheBBQMeat from '~/components/LeRock/LeRockProducts/TheBBQMeat'
import TheDrinks from '~/components/Barbaresco/BarbarescoProducts/TheDrinks'
import TheGarnishes from '~/components/LeRock/LeRockProducts/TheGarnishes'
import TheDesert from '~/components/LeRock/LeRockProducts/TheDeserts'
import TheSalad from '~/components/LeRock/LeRockProducts/TheSalad'
import TheFirstCourse from '~/components/LeRock/LeRockProducts/TheFirstCourse'
// import TheHits from '~/components/Barbaresco/BarbarescoProducts/TheHits'
import TheAlcohol from '~/components/Barbaresco/BarbarescoProducts/TheAlcohol'
import TheMainMeal from '~/components/LeRock/LeRockProducts/TheMainMeal'
import TheBottomCarousel from '~/components/Barbaresco/TheBottomCarouselOwl'

export default {
  name: 'LeRock',
  layout: 'le-rock',
  components: {
    TheImageNavigation,
    TheImagedProductNav,
    TheMapComponent,
    TheRockDogs,
    TheAppetizers,
    TheTheBBQMeat,
    TheGarnishes,
    TheDesert,
    TheSalad,
    TheFirstCourse,
    // TheHits,
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
  },

  data () {
    return {
      currentProductsDisplayed: // Math.floor((Math.random() * 10) + 1)
        2,
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
#le-rock {
  background: url("~assets/img/le-rock-bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-color: $headingsFontColor;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: linear-gradient(to bottom right, #000000, #000000);
    opacity: 0.4;
  }
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
