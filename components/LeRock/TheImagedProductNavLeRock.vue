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
  <div id="imageed-Products-Navigation">
    <section class="container text-center ">
      <button
        class="column text-center "
        :class="{ active: currentProductsDisplayed === 1}"
        @click="Show1"
      >
        <div class="nav-image navOne text-center" />
        <div class="text-center nav-text">
          {{ $t('appetizer') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 3}"
        @click="Show3"
      >
        <div class="nav-image navThree" />
        <div class="text-center nav-text">
          {{ $t('meat') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 6}"
        @click="Show6"
      >
        <div class="nav-image navSix" />
        <div class="text-center nav-text">
          {{ $t('salads') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 11}"
        @click.prevent="Show11"
      >
        <div class="nav-image navEight" />
        <div class="text-center nav-text">
          {{ $t('mainMeal') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 2}"
        @click="Show2"
      >
        <div class="nav-image navTwo" />
        <div class="text-center nav-text">
          {{ $t('rock-dog') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 7}"
        @click="Show7"
      >
        <div class="nav-image navFirstCourse" />
        <div class="text-center nav-text">
          {{ $t('firstCourse') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 4}"
        @click="Show4"
      >
        <div class="nav-image navFour" />
        <div class="text-center nav-text">
          {{ $t('side-dishes') }}
        </div>
      </button>

      <button
        class="column "
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
        :class="{ active: currentProductsDisplayed === 9}"
        @click.prevent="Show9"
      >
        <div class="nav-image navNine " />
        <div class="text-center nav-text">
          {{ $t('drinks') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 10}"
        @click.prevent="Show10"
      >
        <div class="nav-image navTen" />
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
  display: block;
  flex-direction: column;

  @include easeInOut;
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
  margin: 10px auto auto auto;
  font-family: $robotoFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;

  color: $lightColor;
  margin-top: 10px;

  @include easeInOut;
}

.nav-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  width: 100%;
  min-width: 90px;
  max-width: 90px;
  height: 100%;
  min-height: 90px;
  max-height: 90px;

  border-radius: 50%;
  background-color: $darkColor;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.45);
  margin-bottom: 10px;

  @include easeInOut;
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
  background-image: url("~assets/img/barbarescoDesert.png");
}

.navSix {
  background-image: url("~assets/img/le-rock-salad.jpg");
}

.navSeven {
  background-image: url("~assets/img/barbarescoFirstCourse.png");
}

.navFirstCourse {
  background-image: url("~assets/img/le-rock-first-course.jpg");
}

.navEight {
  background-image: url("~assets/img/barbarescoHits.png");
}

.navNine {
  background-image: url("~assets/img/le-rock-hot-drinks.jpg");
}

.navTen {
  background-image: url("~assets/img/le-rock-alcohol.jpg");
}

@media (max-width: 995px) {
  #imageed-Products-Navigation {
    background-color: transparent;
  }

  section {
    border-bottom: 1px solid $lightColor;

    opacity: 1;
    overflow: hidden;
  }

  .column {
    background-color: transparent;
    width: calc(100% / 5);
    margin: auto;
    min-height: 110px;
    opacity: 1;

    .nav-text {
      color: $lightColor;
    }

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
    @include easeInOut;
  }
  section {
    padding: 5px;
  }

  .column .nav-image {
    margin: auto;
    mix-blend-mode: normal;
    opacity: 1;
    @include easeInOut;
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
