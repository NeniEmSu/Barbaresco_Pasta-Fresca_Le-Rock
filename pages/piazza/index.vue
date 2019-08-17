<template>
  <div id="barbaresco">

    <TheImageNavigation />

    <TheImagedProductNav
      v-on:changedView="updateView($event)"
      :currentProductsDisplayed="currentProductsDisplayed"
    />

    <div v-if="$route.path === '/barbaresco'"> barbaresco route true</div>

    <vue-page-transition name="fade">

      <ThePizza v-if="currentProductsDisplayed === 1" />

      <TheBugers v-if="currentProductsDisplayed === 2" />

      <TheSushi v-if="currentProductsDisplayed === 3" />

      <TheMlinty v-if="currentProductsDisplayed === 4" />

      <TheDesert v-if="currentProductsDisplayed === 5" />

      <TheSalad v-if="currentProductsDisplayed === 6" />

      <TheFirstCourse v-if="currentProductsDisplayed === 7" />

      <TheHits v-if="currentProductsDisplayed === 8" />

      <TheDrinks v-if="currentProductsDisplayed === 9" />

      <TheAlcohol v-if="currentProductsDisplayed === 10" />

    </vue-page-transition>

    <TheBottomCarousel />

    <TheMapComponent />

  </div>
</template>

<script>

import TheImageNavigation from '~/components/TheImageNavigation'
import TheImagedProductNav from '~/components/TheImagedProductNav'
import TheMapComponent from '~/components/TheMapComponent'
import TheBugers from '~/components/BarbarescoProducts/TheBugers'
import ThePizza from '~/components/BarbarescoProducts/ThePizza'
import TheSushi from '~/components/BarbarescoProducts/TheSushi'
import TheDrinks from '~/components/BarbarescoProducts/TheDrinks'
import TheMlinty from '~/components/BarbarescoProducts/TheMlinty'
import TheDesert from '~/components/BarbarescoProducts/TheDesert'
import TheSalad from '~/components/BarbarescoProducts/TheSalad'
import TheFirstCourse from '~/components/BarbarescoProducts/TheFirstCourse'
import TheHits from '~/components/BarbarescoProducts/TheHits'
import TheAlcohol from '~/components/BarbarescoProducts/TheAlcohol'
import TheBottomCarousel from '~/components/TheBottomCarousel'

export default {
  name: 'barbaresco',
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
    TheHits,
    TheDrinks,
    TheAlcohol,
    TheBottomCarousel
  },

  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: "Piazza White".slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Piazza White.".slice(
            0,
            320
          )
        }
      ]
    }
  },

  data () {

    return {
      currentProductsDisplayed: 1,
    }
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
  background: url("~assets/img/textureBeton.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#imageed-Products-Navigation {
  background-color: $darkColor;
}

.active {
  mix-blend-mode: normal;
}

section {
  overflow: hidden;
}

.column {
  float: left;
  box-sizing: border-box;
  width: calc(100% / 10);
  height: 100%;
  min-height: 150px;
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  margin: 22px auto 22px auto;

  transition: 500ms ease-in-out;
  text-decoration: none;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.45);
}

.column .nav-image {
  mix-blend-mode: luminosity;

  &:hover {
    mix-blend-mode: normal;
  }

  &.active {
    mix-blend-mode: normal;
  }
}

.nav-text {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;

  color: $lightColor;
  margin-top: 10px;
}

.nav-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  width: 100%;
  min-width: 100px;
  max-width: 100px;
  height: 100%;
  min-height: 100px;
  max-height: 100px;

  border-radius: 50%;
  background-color: $darkColor;
}

.navOne {
  background-image: url("~assets/img/barbarescoPizza.png");
}

.navTwo {
  background-image: url("~assets/img/barbarescoBurger.png");
}

.navThree {
  background-image: url("~assets/img/barbarescoSushi.png");
}

.navFour {
  background-image: url("~assets/img/barbarescoMlinty.png");
}

.navFive {
  background-image: url("~assets/img/barbarescoDesert.png");
}

.navSix {
  background-image: url("~assets/img/barbarescoSalad.png");
}

.navSeven {
  background-image: url("~assets/img/barbarescoFirstCorse.png");
}

.navEight {
  background-image: url("~assets/img/barbarescoHits.png");
}

.navNine {
  background-image: url("~assets/img/barbarescoHotDrinks.png");
}

.navTen {
  background-image: url("~assets/img/barbarescoAlcohol.png");
}

@media (max-width: 750px) {
  .column {
    width: calc(100% / 5);
  }
}

@media (max-width: 400px) {
  .column {
    width: calc(100% / 3);
  }
}

@media (max-width: 375px) {
  .column {
    width: calc(100% / 2);
  }
}
</style>
