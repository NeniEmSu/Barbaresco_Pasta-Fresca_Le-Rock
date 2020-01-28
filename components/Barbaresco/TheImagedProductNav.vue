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
        <div class="nav-image navOne spin circle" />
        <div class="text-center nav-text">
          {{ $t('pizza') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 2}"
        @click="Show2"
      >
        <div class="nav-image navTwo spin circle" />
        <div class="text-center nav-text">
          {{ $t('burgers') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 3}"
        @click="Show3"
      >
        <div class="nav-image navThree spin circle" />
        <div class="text-center nav-text">
          {{ $t('sushi') }}
        </div>
      </button>
      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 4}"
        @click="Show4"
      >
        <div class="nav-image navFour spin circle" />
        <div class="text-center nav-text">
          {{ $t('panCakes') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 5}"
        @click="Show5"
      >
        <div class="nav-image navFive spin circle" />
        <div class="text-center nav-text">
          {{ $t('deserts') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 6}"
        @click="Show6"
      >
        <div class="nav-image navSix spin circle" />
        <div class="text-center nav-text">
          {{ $t('salads') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 7}"
        @click="Show7"
      >
        <div class="nav-image navSeven spin circle" />
        <div class="text-center nav-text">
          {{ $t('firstCourse') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 8}"
        @click="Show8"
      >
        <div class="nav-image navEight spin circle" />
        <div class="text-center nav-text">
          {{ $t('appetizers') }}
        </div>
      </button>

      <button
        class="column"
        :class="{active: currentProductsDisplayed === 9}"
        @click.prevent="Show9"
      >
        <div class="nav-image navNine spin circle" />
        <div class="text-center nav-text">
          {{ $t('drinks') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 10}"
        @click.prevent="Show10"
      >
        <div class="nav-image navTen spin circle" />
        <div class="text-center nav-text">
          {{ $t('alcohol') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 11}"
        @click.prevent="Show11"
      >
        <div class="nav-image navMainMeal spin circle" />
        <div class="text-center nav-text">
          {{ $t('mainMeal') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 12}"
        @click.prevent="Show12"
      >
        <div class="nav-image navGarnishes spin circle" />
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
@import "~assets/scss/TheImagedProductNav.scss";

.column {
  width: calc(100% / 12);

  @media (max-width: 1200px) {
    width: calc(100% / 6);
  }

  @media (max-width: 375px) {
    width: calc(100% / 4);
  }
}

.navOne {
  background-image: url("~assets/img/barbarescoPizza.jpg");
}

.navTwo {
  background-image: url("~assets/img/barbarescoBurger.jpg");
}

.navThree {
  background-image: url("~assets/img/barbarescoSushi.jpg");
}

.navFour {
  background-image: url("~assets/img/barbarescoMlinty.jpg");
}

.navFive {
  background-image: url("~assets/img/barbarescoDesert.jpg");
}

.navSix {
  background-image: url("~assets/img/barbarescoSalad.jpg");
}

.navSeven {
  background-image: url("~assets/img/barbarescoFirstCourse.jpg");
}

.navEight {
  background-image: url("~assets/img/pasta-presca-appetizer.jpg");
}

.navNine {
  background-image: url("~assets/img/barbarescoHotDrinks.jpg");
}

.navTen {
  background-image: url("~assets/img/barbarescoAlcohol.jpg");
}

.navMainMeal {
  background-image: url("~assets/img/barbarescoHits.jpg");
}

.navGarnishes {
  background-image: url("~assets/img/le-rock-side-dishes.jpg");
}
</style>
