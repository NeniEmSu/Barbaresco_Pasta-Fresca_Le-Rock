<i18n>
{
  "uk": {
    "pizza": "Піца",
    "burgers": "Бургери",
    "sushi": "Суші",
    "panCakes": "Млинці",
    "deserts": "Десерти",
    "salads": "Салати",
    "firstCourse": "Перші страви",
    "hits": "Хіти",
    "drinks": "Напої",
    "alcohol":"Алкоголь"
  },
  "en": {
   "pizza": "Pizzas",
   "burgers": "Burgers",
    "sushi": "Sushi",
    "panCakes": "PanCakes",
    "deserts": "Deserts",
    "salads": "Salads",
    "firstCourse": "First Course",
    "hits": "Hits",
    "drinks": "Drinks",
    "alcohol":"Alcohol"
  },
  "ru": {
    "pizza": "Пицца",
    "burgers": "Бургеры",
    "sushi": "Суши",
    "panCakes": "Блины",
    "deserts": "Десерты",
    "salads": "Салаты",
    "firstCourse": "Первые блюда",
    "hits": "Хиты",
    "drinks": "Напитки",
    "alcohol":"Алкоголь"
  }
}
</i18n>

<template>
  <div id="imageed-Products-Navigation">

    <section class="container text-center">
      <button
        class="column text-center "
        @click="Show1"
      >
        <div
          class="nav-image navOne text-center"
          :class="{ active: currentProductsDisplayed === 1}"
        ></div>
        <div class="text-center nav-text">{{$t('pizza')}}</div>

      </button>

      <button
        @click="Show2"
        class="column"
      >
        <div
          class="nav-image navTwo"
          :class="{ active: currentProductsDisplayed === 2}"
        ></div>
        <div class="text-center nav-text">{{$t('burgers')}}</div>

      </button>

      <button
        class="column "
        @click="Show3"
      >
        <div
          class="nav-image navThree"
          :class="{ active: currentProductsDisplayed === 3}"
        ></div>
        <div class="text-center nav-text">{{$t('sushi')}}</div>

      </button>

      <button
        class="column "
        @click="Show4"
      >
        <div
          class="nav-image navFour"
          :class="{ active: currentProductsDisplayed === 4}"
        ></div>
        <div class="text-center nav-text">{{$t('panCakes')}}</div>

      </button>

      <button
        class="column "
        @click="Show5"
      >
        <div
          class="nav-image navFive"
          :class="{ active: currentProductsDisplayed === 5}"
        ></div>
        <div class="text-center nav-text">{{$t('deserts')}}</div>

      </button>

      <button
        class="column "
        @click="Show6"
      >
        <div
          class="nav-image navSix"
          :class="{ active: currentProductsDisplayed === 6}"
        ></div>
        <div class="text-center nav-text">{{$t('salads')}}</div>

      </button>

      <button
        class="column "
        @click="Show7"
      >
        <div
          class="nav-image navSeven"
          :class="{ active: currentProductsDisplayed === 7}"
        ></div>
        <div class="text-center nav-text">{{$t('firstCourse')}}</div>

      </button>

      <button
        class="column "
        @click="Show8"
      >
        <div
          class="nav-image navEight"
          :class="{ active: currentProductsDisplayed === 8}"
        ></div>
        <div class="text-center nav-text">{{$t('hits')}}</div>

      </button>

      <button
        @click.prevent="Show9"
        class="column"
      >
        <div
          class="nav-image navNine "
          :class="{ active: currentProductsDisplayed === 9}"
        ></div>
        <div class="text-center nav-text">{{$t('drinks')}}</div>

      </button>

      <button
        @click.prevent="Show10"
        class="column "
      >
        <div
          class="nav-image navTen"
          :class="{ active: currentProductsDisplayed === 10}"
        ></div>
        <div class="text-center nav-text">{{$t('alcohol')}}</div>

      </button>

    </section>

  </div>
</template>

<script>
export default {
  props: {
    currentProductsDisplayed: {
      type: Number,
      default: 1,
      required: true
    }
  },

  data () {
    return {

    }
  },
  methods: {
    Show1 () {
      this.$emit('changedView', 1)
    },
    Show2 () {
      this.$emit('changedView', 2)
    },
    Show3 () {
      this.$emit('changedView', 3)
    },
    Show4 () {
      this.$emit('changedView', 4)
    },
    Show5 () {
      this.$emit('changedView', 5)
    },
    Show6 () {
      this.$emit('changedView', 6)
    },
    Show7 () {
      this.$emit('changedView', 7)
    },
    Show8 () {
      this.$emit('changedView', 8)
    },
    Show9 () {
      this.$emit('changedView', 9)
    },
    Show10 () {
      this.$emit('changedView', 10)
    }
  }
}
</script>

<style lang="scss" scoped>
#imageed-Products-Navigation {
  background-color: $darkColor;
}

.active {
  mix-blend-mode: normal;
}

section {
  overflow: hidden;
}

section {
  border-bottom: 1px solid #000000;
  opacity: 0.8;
}

.column {
  float: left;
  box-sizing: border-box;
  width: calc(100% / 10);
  height: 100%;
  min-height: 150px;
  border: 0;
  background-color: $darkColor;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  margin: 22px auto 22px auto;

  transition: 500ms ease-in-out;
  text-decoration: none;
}

.column .nav-image {
  margin: auto;
  mix-blend-mode: luminosity;

  &:hover {
    mix-blend-mode: normal;
  }

  &.active {
    mix-blend-mode: normal;
  }
}

.nav-text {
  margin: 10px auto 0 auto;
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

@media (max-width: 995px) {
  #imageed-Products-Navigation {
    background-color: transparent;
  }

  .column {
    background-color: transparent;
    width: calc(100% / 5);
    margin: auto;
    min-height: 110px;
  }

  .nav-text {
    color: $darkColor;
    font-size: 14px;
    line-height: 16px;
  }
  section {
    padding: 5px;
  }

  .column .nav-image {
    margin: auto;
    mix-blend-mode: luminosity;
    opacity: 0.8;

    &:hover {
      mix-blend-mode: normal;
      opacity: 1;
    }

    &.active {
      mix-blend-mode: normal;
      opacity: 1;
    }
  }

  .nav-image {
    width: 100%;
    min-width: 60px;
    max-width: 60px;
    height: 100%;
    min-height: 60px;
    max-height: 60px;
  }
}

// @media (max-width: 500px) {
//   .column {
//     width: calc(100% / 3);
//   }
// }

// @media (max-width: 375px) {
//   .column {
//     width: calc(100% / 2);
//   }
// }
</style>
