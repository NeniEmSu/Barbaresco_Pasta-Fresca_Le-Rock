<i18n>
{
  "uk": {
    "title": "Меню",
    "tooltip": "Передзвонимо за 1 хв.",
    "description": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас",
    "call":{
      "name": "Ім’я",
      "phone": "Телефон",
      "send": "Зателефонуй мені!"
      }

  },
  "en": {
   "title": "Menu",
   "tooltip": "Call back in 1 minute",
   "description": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us",
   "call":{
      "name": "Name",
      "phone": "Phone",
      "send": "Call Me!"
      }

  },
  "ru": {
    "title": "Меню",
    "tooltip": "Перезвоним за 1 мин.",
    "description": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас",
    "call":{
      "name": "название",
      "phone": "Телефон",
      "send": "Позвоните мне!"
      }
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

    <b-img-lazy
      id="feedBack"
      v-b-modal.modal-center
      class="feedBack "
      src="~/assets/img/feedBack.png"
      alt="feedback Icon"
    />

    <div>
      <b-modal
        id="modal-center"
        centered
        :title="$t('tooltip')"
        hide-footer
      >
        <b-form>
          <b-form-group
            :label="$t('call.name')"
            size="lg"
            label-for="dropdown-form-name"
            @submit.stop.prevent
          >
            <b-form-input
              id="dropdown-form-name"
              size="sm"
              :placeholder="$t('call.name')"
            />
          </b-form-group>
          <b-form-group
            :label="$t('call.phone')"
            label-for="dropdown-form-phone"
            @submit.stop.prevent
          >
            <b-form-input
              id="dropdown-form-phone"
              size="sm"
              placeholder="+380 ## ### ####"
            />
          </b-form-group>
          <b-button
            variant="outline-dark"
            size="sm"
            class="feedback-btn"
          >
            {{ $t('call.send') }}
          </b-button>
        </b-form>
      </b-modal>
    </div>

    <b-tooltip
      target="feedBack"
      placement="topleft"
      variant="light"
    >
      <strong>
        <h6> {{ $t('tooltip') }}</h6>
      </strong>
    </b-tooltip>

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
    },
    onClick () {
      this.$refs.dropdown.hide(true)
    }
  },
  nuxtI18n: {
    paths: {
      en: '/barbaresco-menu',
      uk: '/barbaresko-menyu',
      ru: '/barbaresco-menyu'
    }
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
  position: fixed;
  bottom: 3%;
  right: 50px;
  z-index: 1;
  cursor: pointer;
}

.feedback-btn {
  background: $blackColor;
  border: 1px solid $blackColor;
  box-sizing: border-box;

  font-family: $robotoFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
  padding: 14px 48px;
}

input {
  background: transparent;
  border: 1px solid $blackColor;
  box-sizing: border-box;

  font-family: $robotoFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: $blackColor;
  padding: 14px 20px;
  margin: 10px auto;
}

.elaboraSpacing {
  margin-top: 90px;
}

@media only screen and (max-width: 1400px) {
  .feedBack {
    bottom: 0px;
    right: 0px;
  }
}

@media only screen and (max-width: 1200px) {
  .feedBack {
    bottom: -30px;
    right: -30px;
  }

  img.feedBack {
    width: 100px;
    height: 100px;
  }
}

@media only screen and (max-width: 425px) {
  .feedBack {
    position: fixed;
    bottom: -35px;
    right: -35px;
  }

  img.feedBack {
    width: 100px;
    height: 100px;
  }
}
</style>
