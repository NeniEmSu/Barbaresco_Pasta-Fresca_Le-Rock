<i18n>
{
  "uk": {
    "pasta": "Паста",
    "appetizer": "Закуски",
    "garnishes": "Гарніри",
    "deserts": "Десерти",
    "salads": "Салати",
    "alcohol":"Алкоголь",
    "firstCourse": "Супи",
    "drinks": "Напої",
    "tea":"Чай",
    "mainMeal": "Страви"
  },
  "en": {
   "pasta": "Pasta",
   "appetizer": "Appetizer",
    "garnishes": "Garnishes",
    "deserts": "Deserts",
    "salads": "Salads",
    "alcohol":"Alcohol",
    "firstCourse": "Soups",
    "drinks": "Drinks",
    "tea":"Tea",
    "mainMeal": "Dishes"
  },
  "ru": {
    "pasta": "Паста",
    "appetizer": "Закуски",
    "garnishes": "гарниры",
    "deserts": "Десерты",
    "salads": "Салаты",
    "alcohol":"Алкоголь",
    "firstCourse": "Супы",
    "drinks": "Напитки",
    "tea":"Чай",
    "mainMeal": "Страви"
  }
}
</i18n>

<template>
  <div id="imaged-Products-Navigation-pasta-fresca">
    <section class="container text-center ">
      <button
        class="column text-center "
        :class="{ active: currentProductsDisplayed === 1 || currentProductsDisplayed === 0}"
        @click.prevent="Show1"
      >
        <div class="nav-image  spin circle navOne text-center" />
        <div class="text-center nav-text">
          {{ $t('pasta') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 6 || currentProductsDisplayed === 0}"
        @click.prevent="Show6"
      >
        <div class="nav-image  spin circle navSix" />
        <div class="text-center nav-text">
          {{ $t('salads') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 8 || currentProductsDisplayed === 0}"
        @click.prevent="Show8"
      >
        <div class="nav-image  spin circle navEight" />
        <div class="text-center nav-text">
          {{ $t('garnishes') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 2 || currentProductsDisplayed === 0}"
        @click.prevent="Show2"
      >
        <div class="nav-image  spin circle navTwo" />
        <div class="text-center nav-text">
          {{ $t('appetizer') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 7 || currentProductsDisplayed === 0}"
        @click.prevent="Show7"
      >
        <div class="nav-image  spin circle navFirstCourse" />
        <div class="text-center nav-text">
          {{ $t('firstCourse') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 11 || currentProductsDisplayed === 0}"
        @click.prevent="Show11"
      >
        <div class="nav-image  spin circle navSeven" />
        <div class="text-center nav-text">
          {{ $t('mainMeal') }}
        </div>
      </button>

      <button
        class="column "
        :class="{ active: currentProductsDisplayed === 5 || currentProductsDisplayed === 0}"
        @click.prevent="Show5"
      >
        <div class="nav-image  spin circle navFive" />
        <div class="text-center nav-text">
          {{ $t('deserts') }}
        </div>
      </button>

      <button
        class="column"
        :class="{ active: currentProductsDisplayed === 9 || currentProductsDisplayed === 0}"
        @click.prevent="Show9"
      >
        <div class="nav-image  spin circle navNine " />
        <div class="text-center nav-text">
          {{ $t('drinks') }}
        </div>
      </button>

      <!-- <button
        class="column "
        :class="{ active: currentProductsDisplayed === 10 || currentProductsDisplayed === 0}"
        @click.prevent="Show10"
      >
        <div class="nav-image  spin circle navTen" />
        <div class="text-center nav-text">
          {{ $t('alcohol') }}
        </div>
      </button> -->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    currentProductsDisplayed: {
      type: Number,
      default: 0,
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
  width: calc(100% / 8);

  @media (max-width: 1200px) {
    width: calc(100% / 4);

    .nav-text {
      color: $lightColor;
    }
  }

  @media (max-width: 375px) {
    width: calc(100% / 4);
  }
}

.navOne {
  background-image: url("~assets/img/pasta-fresca-pasta.jpg");
}

.navTwo {
  background-image: url("~assets/img/pasta-presca-appetizer.jpg");
}

.navFive {
  background-image: url("~assets/img/pasta-fresca-Desert.jpg");
}

.navSix {
  background-image: url("~assets/img/pasta-fresca-salad.jpg");
}

.navFirstCourse {
  background-image: url("~assets/img/pasta-fresca-firstCourse.jpg");
}

.navSeven {
  background-image: url("~assets/img/pasta-fresca-main-meal.jpg");
}
.navEight {
  background-image: url("~assets/img/pasta-fresca-side-dishes.jpg");
}

.navNine {
  background-image: url("~assets/img/pasta-fresca-coffee.jpg");
}

.navTen {
  background-image: url("~assets/img/barbarescoAlcohol.jpg");
}
</style>
