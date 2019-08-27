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
        :class="{ active: currentProductsDisplayed === 1}"
      >
        <div class="nav-image navOne text-center"></div>
        <div class="text-center nav-text">{{$t('pizza')}}</div>

      </button>

      <button
        @click="Show2"
        class="column"
        :class="{ active: currentProductsDisplayed === 2}"
      >
        <div class="nav-image navTwo"></div>
        <div class="text-center nav-text">{{$t('burgers')}}</div>

      </button>

      <button
        class="column "
        @click="Show3"
        :class="{ active: currentProductsDisplayed === 3}"
      >
        <div class="nav-image navThree"></div>
        <div class="text-center nav-text">{{$t('sushi')}}</div>

      </button>

      <button
        class="column "
        @click="Show4"
        :class="{ active: currentProductsDisplayed === 4}"
      >
        <div class="nav-image navFour"></div>
        <div class="text-center nav-text">{{$t('panCakes')}}</div>

      </button>

      <button
        class="column "
        @click="Show5"
        :class="{ active: currentProductsDisplayed === 5}"
      >
        <div class="nav-image navFive"></div>
        <div class="text-center nav-text">{{$t('deserts')}}</div>

      </button>

      <button
        class="column "
        @click="Show6"
        :class="{ active: currentProductsDisplayed === 6}"
      >
        <div class="nav-image navSix"></div>
        <div class="text-center nav-text">{{$t('salads')}}</div>

      </button>

      <button
        class="column "
        @click="Show7"
        :class="{ active: currentProductsDisplayed === 7}"
      >
        <div class="nav-image navSeven"></div>
        <div class="text-center nav-text">{{$t('firstCourse')}}</div>

      </button>

      <button
        class="column "
        @click="Show8"
        :class="{ active: currentProductsDisplayed === 8}"
      >
        <div class="nav-image navEight"></div>
        <div class="text-center nav-text">{{$t('hits')}}</div>

      </button>

      <button
        @click.prevent="Show9"
        class="column"
        :class="{ active: currentProductsDisplayed === 9}"
      >
        <div class="nav-image navNine "></div>
        <div class="text-center nav-text">{{$t('drinks')}}</div>

      </button>

      <button
        @click.prevent="Show10"
        class="column "
        :class="{ active: currentProductsDisplayed === 10}"
      >
        <div class="nav-image navTen"></div>
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
  border-bottom: 1px solid $blackColor;
  opacity: 1;
  overflow: hidden;
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

  @include easeOut;
  text-decoration: none;

  &:hover {
    .nav-text {
      font-weight: bold;
    }
    .nav-image {
      mix-blend-mode: normal;
    }
  }

  &.active {
    .nav-text {
      font-weight: bold;
    }
    .nav-image {
      mix-blend-mode: normal;
    }
  }
}

.column .nav-image {
  margin: auto;
  mix-blend-mode: luminosity;
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

  @include easeOut;
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
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.45);

  @include easeOut;
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
  background-image: url("~assets/img/barbarescoFirstCourse.png");
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

  section {
    border-bottom: 1px solid $blackColor;

    opacity: 1;
    overflow: hidden;
  }

  .column {
    background-color: transparent;
    width: calc(100% / 5);
    margin: auto;
    min-height: 110px;
    opacity: 1;

    &:hover {
      .nav-image {
        mix-blend-mode: normal;
        opacity: 1;
        border: 2px solid $goldColor;
        box-sizing: border-box;
      }

      .nav-text {
        font-weight: bold;
      }
    }

    &.active {
      .nav-image {
        mix-blend-mode: normal;
        opacity: 1;
        border: 2px solid $goldColor;
        box-sizing: border-box;
      }

      .nav-text {
        font-weight: bold;
      }
    }
  }

  .nav-text {
    color: $darkColor;
    font-size: 14px;
    line-height: 16px;
    @include easeOut;
  }
  section {
    padding: 5px;
  }

  .column .nav-image {
    margin: auto;
    mix-blend-mode: normal;
    opacity: 1;
    @include easeOut;
    box-sizing: border-box;
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
</style>
