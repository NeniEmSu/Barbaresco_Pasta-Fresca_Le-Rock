<i18n>
{
  "uk": {
    "appetizer": "Закуски",
    "rock-dog": "Rock Dog",
    "meat": "М’ясо BBQ",
    "side-dishes": "Гарніри",
    "deserts": "Десерти",
    "salads": "Салати",
    "firstCourse": "Перші страви",
    "hits": "Хіти",
    "drinks": "Гарячі напої",
    "alcohol":"Алкоголь",
    "mainMeal": "Основні страви"
  },
  "en": {
   "appetizer": "Appetizer",
   "rock-dog": "Rock Dog",
    "meat": "BBQ meat",
    "side-dishes": "Side dishes",
    "deserts": "Deserts",
    "salads": "Salads",
    "firstCourse": "First Course",
    "hits": "Hits",
    "drinks": "Hot Drinks",
    "alcohol":"Alcohol",
    "mainMeal": "Main dishes"
  },
  "ru": {
    "appetizer": "Закуски",
    "rock-dog": "Rock Dog",
    "meat": "Мясо BBQ",
    "side-dishes": "Гарниры",
    "deserts": "Десерты",
    "salads": "Салаты",
    "firstCourse": "Первые блюда",
    "hits": "Хиты",
    "drinks": "Горячие Напитки",
    "alcohol":"Алкоголь",
    "mainMeal": "Основні страви"
  }
}
</i18n>

<template>
  <div id="imaged-Products-Navigation-le-rock">
    <section class="container text-center ">
      <button
        class="column text-center "
        :class="{ active: currentProductsDisplayed === 1}"
        @click="Show1"
      >
        <div class="nav-image spin circle navOne text-center" />
        <div class="text-center nav-text">
          {{ $t('appetizer') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 3}"
        @click="Show3"
      >
        <div class="nav-image spin circle navThree" />
        <div class="text-center nav-text">
          {{ $t('meat') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 6}"
        @click="Show6"
      >
        <div class="nav-image spin circle navSix" />
        <div class="text-center nav-text">
          {{ $t('salads') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 11}"
        @click.prevent="Show11"
      >
        <div class="nav-image spin circle navEight" />
        <div class="text-center nav-text">
          {{ $t('mainMeal') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 2}"
        @click="Show2"
      >
        <div class="nav-image spin circle navTwo" />
        <div class="text-center nav-text">
          {{ $t('rock-dog') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 7}"
        @click="Show7"
      >
        <div class="nav-image spin circle navFirstCourse" />
        <div class="text-center nav-text">
          {{ $t('firstCourse') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 4}"
        @click="Show4"
      >
        <div class="nav-image spin circle navFour" />
        <div class="text-center nav-text">
          {{ $t('side-dishes') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 5}"
        @click="Show5"
      >
        <div class="nav-image spin circle navFive" />
        <div class="text-center nav-text">
          {{ $t('deserts') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 9}"
        @click.prevent="Show9"
      >
        <div class="nav-image spin circle navNine " />
        <div class="text-center nav-text">
          {{ $t('drinks') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 10}"
        @click.prevent="Show10"
      >
        <div class="nav-image spin circle navTen" />
        <div class="text-center nav-text">
          {{ $t('alcohol') }}
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/TheImagedProductNav.scss";

.column {
  width: calc(100% / 10);

  @media (max-width: 1200px) {
    width: calc(100% / 5);

    .nav-text {
      color: $lightColor;
    }
  }

  @media (max-width: 375px) {
    width: calc(100% / 4);
  }
}

.navOne {
  background-image: url("~assets/img/le-rock-appetizer.jpg");
}

.navTwo {
  background-image: url("~assets/img/le-rock-rock-dogs.jpg");
}

.navThree {
  background-image: url("~assets/img/le-rock-meat.jpg");
}

.navFour {
  background-image: url("~assets/img/le-rock-side-dishes.jpg");
}

.navFive {
  background-image: url("~assets/img/barbarescoDesert.jpg");
}

.navSix {
  background-image: url("~assets/img/le-rock-salad.jpg");
}

.navSeven {
  background-image: url("~assets/img/barbarescoFirstCourse.jpg");
}

.navFirstCourse {
  background-image: url("~assets/img/le-rock-first-course.jpg");
}

.navEight {
  background-image: url("~assets/img/barbarescoHits.jpg");
}

.navNine {
  background-image: url("~assets/img/le-rock-hot-drinks.jpg");
}

.navTen {
  background-image: url("~assets/img/le-rock-alcohol.jpg");
}
</style>
