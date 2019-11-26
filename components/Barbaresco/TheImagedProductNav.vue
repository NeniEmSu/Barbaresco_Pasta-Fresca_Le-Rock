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
    "appetizers": "Закуски",
    "garnishes": "Гарніри",
    "drinks": "Напої",
    "alcohol":"Алкоголь",
    "mainMeal": "Основні страви"
  },
  "en": {
   "pizza": "Pizzas",
   "burgers": "Burgers",
    "sushi": "Sushi",
    "panCakes": "PanCakes",
    "deserts": "Deserts",
    "salads": "Salads",
    "firstCourse": "First Course",
    "appetizers": "Appetizers",
    "garnishes": "Garnishes",
    "drinks": "Drinks",
    "alcohol":"Alcohol",
    "mainMeal": "Main dishes"
  },
  "ru": {
    "pizza": "Пицца",
    "burgers": "Бургеры",
    "sushi": "Суши",
    "panCakes": "Блины",
    "deserts": "Десерты",
    "salads": "Салаты",
    "firstCourse": "Первые блюда",
    "appetizers": "Закуски",
    "garnishes": "гарниры",
    "drinks": "Напитки",
    "alcohol":"Алкоголь",
    "mainMeal": "Основні страви"
  }
}
</i18n>

<template>
  <div id="imageed-Products-Navigation">
    <section class="container text-center ">
      <button
        class="column text-center"
        :class="{ active: currentProductsDisplayed === 1}"
        @click="Show1"
      >
        <div class="nav-image navOne text-center" />
        <div class="text-center nav-text">
          {{ $t('pizza') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 2}"
        @click="Show2"
      >
        <div class="nav-image navTwo" />
        <div class="text-center nav-text">
          {{ $t('burgers') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 3}"
        @click="Show3"
      >
        <div class="nav-image navThree" />
        <div class="text-center nav-text">
          {{ $t('sushi') }}
        </div>
      </button>
      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 4}"
        @click="Show4"
      >
        <div class="nav-image navFour" />
        <div class="text-center nav-text">
          {{ $t('panCakes') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 5}"
        @click="Show5"
      >
        <div class="nav-image navFive" />
        <div class="text-center nav-text">
          {{ $t('deserts') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 6}"
        @click="Show6"
      >
        <div class="nav-image navSix" />
        <div class="text-center nav-text">
          {{ $t('salads') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 7}"
        @click="Show7"
      >
        <div class="nav-image navSeven" />
        <div class="text-center nav-text">
          {{ $t('firstCourse') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 8}"
        @click="Show8"
      >
        <div class="nav-image navEight" />
        <div class="text-center nav-text">
          {{ $t('appetizers') }}
        </div>
      </button>

      <button
        class="column
        :class="
        {
        active:
        currentProductsDisplayed="==9}&quot;"
        @click.prevent="Show9"
      >
        <div class="nav-image navNine " />
        <div class="text-center nav-text">
          {{ $t('drinks') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 10}"
        @click.prevent="Show10"
      >
        <div class="nav-image navTen" />
        <div class="text-center nav-text">
          {{ $t('alcohol') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 11}"
        @click.prevent="Show11"
      >
        <div class="nav-image navMainMeal" />
        <div class="text-center nav-text">
          {{ $t('mainMeal') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 12}"
        @click.prevent="Show12"
      >
        <div class="nav-image navGarnishes" />
        <div class="text-center nav-text">
          {{ $t('garnishes') }}
        </div>
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
    },
    Show11 () {
      this.$emit('changedView', 11)
    },
    Show12 () {
      this.$emit('changedView', 12)
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
  border-bottom: 1px solid $darkColor;
  opacity: 1;
  overflow: hidden;
}

.column {
  float: left;
  box-sizing: border-box;
  width: calc(100% / 12);
  height: 100%;
  min-height: 150px;
  border: 0;
  background-color: $darkColor;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  margin: 22px auto;
  text-transform: capitalize;
  display: block;
  flex-direction: column;

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
  // margin: auto;
  mix-blend-mode: luminosity;
}

.nav-text {
  margin: 10px auto auto auto;
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
  min-width: 80px;
  max-width: 80px;
  height: 100%;
  min-height: 80px;
  max-height: 80px;

  border-radius: 50%;
  background-color: $darkColor;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.45);
  margin: 0 0 10px 0;

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
  background-image: url("~assets/img/pasta-presca-appetizer.jpg");
}

.navNine {
  background-image: url("~assets/img/barbarescoHotDrinks.png");
}

.navTen {
  background-image: url("~assets/img/barbarescoAlcohol.png");
}

.navMainMeal {
  background-image: url("~assets/img/barbarescoHits.png");
}

.navGarnishes {
  background-image: url("~assets/img/le-rock-side-dishes.jpg");
}
@media (max-width: 995px) {
  #imageed-Products-Navigation {
    background-color: transparent;
  }

  section {
    border-bottom: 1px solid $darkColor;

    opacity: 1;
    overflow: hidden;
  }

  .column {
    background-color: transparent;
    width: calc(100% / 6);
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

@media (max-width: 370px) {
  .column {
    background-color: transparent;
    width: calc(100% / 4);
    margin: auto;
    min-height: 110px;
    opacity: 1;
  }
}
</style>
