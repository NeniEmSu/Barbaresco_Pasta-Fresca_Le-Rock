<template>
  <div id="barbaresco">
    <button
      type="button"
      class=" btmRight"
    >
      My Contacts <span class="caret"></span>
    </button>
    <TheImageNavigation />
    <div id="imageed-Products-Navigation">

      <section class="container text-center">
        <button
          class="column text-center "
          @click="currentStepNumber = 1"
        >
          <div
            class="nav-image navOne text-center"
            :class="{ active: currentStepNumber === 1}"
          ></div>
          <div class="text-center nav-text">Піца</div>

        </button>

        <button
          @click="currentStepNumber = 2"
          class="column"
        >
          <div
            class="nav-image navTwo"
            :class="{ active: currentStepNumber === 2}"
          ></div>
          <div class="text-center nav-text">Бургери</div>

        </button>

        <button
          class="column "
          @click="currentStepNumber = 3"
        >
          <div
            class="nav-image navThree"
            :class="{ active: currentStepNumber === 3}"
          ></div>
          <div class="text-center nav-text">Суші</div>

        </button>

        <button
          class="column "
          @click="currentStepNumber = 4"
        >
          <div
            class="nav-image navFour"
            :class="{ active: currentStepNumber === 4}"
          ></div>
          <div class="text-center nav-text">Млинці</div>

        </button>

        <button
          class="column "
          @click="currentStepNumber = 5"
        >
          <div
            class="nav-image navFive"
            :class="{ active: currentStepNumber === 5}"
          ></div>
          <div class="text-center nav-text">Десерти</div>

        </button>

        <button
          class="column "
          @click="currentStepNumber = 6"
        >
          <div
            class="nav-image navSix"
            :class="{ active: currentStepNumber === 6}"
          ></div>
          <div class="text-center nav-text">Салати</div>

        </button>

        <button
          class="column "
          @click="currentStepNumber = 7"
        >
          <div
            class="nav-image navSeven"
            :class="{ active: currentStepNumber === 7}"
          ></div>
          <div class="text-center nav-text">Перші
            страви</div>

        </button>

        <button
          class="column "
          @click="currentStepNumber = 8"
        >
          <div
            class="nav-image navEight"
            :class="{ active: currentStepNumber === 8}"
          ></div>
          <div class="text-center nav-text">Хіти</div>

        </button>

        <button
          @click.prevent="currentStepNumber = 9"
          class="column"
        >
          <div
            class="nav-image navNine "
            :class="{ active: currentStepNumber === 9}"
          ></div>
          <div class="text-center nav-text">напої</div>

        </button>

        <button
          @click.prevent="currentStepNumber = 10"
          class="column "
        >
          <div class="nav-image navTen"></div>
          <div class="text-center nav-text">Алкоголь</div>

        </button>

      </section>

    </div>
    <vue-page-transition name="fade">
      <ThePizza v-if="currentStepNumber === 1" />
      <TheBugers v-if="currentStepNumber === 2" />
      <TheSushi v-if="currentStepNumber === 3" />
      <TheMlinty v-if="currentStepNumber === 4" />
      <TheDesert v-if="currentStepNumber === 5" />
      <TheSalad v-if="currentStepNumber === 6" />
      <TheFirstCourse v-if="currentStepNumber === 7" />
      <TheHits v-if="currentStepNumber === 8" />
      <TheDrinks v-if="currentStepNumber === 9" />
      <TheAlcohol v-if="currentStepNumber === 10" />
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
      title: "Barbaresco".slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Barbaresco.".slice(
            0,
            320
          )
        }
      ]
    }
  },

  data () {

    return {
      currentStepNumber: 1,
    }
  },

  methods: {
    show () {
      this.currentStepNumber--
    },
    goNext () {
      this.currentStepNumber++
    }
  }
}
</script>

<style lang="scss" scoped>
.btmRight {
  position: absolute;
  right: 20px;
  top: calc(100% - 600px);
}

#barbaresco {
  background-image: url("~assets/img/textureBeton.png");
  background-repeat: no-repeat;
  background-position: center;
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
