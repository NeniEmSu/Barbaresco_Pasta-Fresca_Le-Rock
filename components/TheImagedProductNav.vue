<template>
  <div id="imageed-Products-Navigation">

    <section class="container text-center">
      <nuxt-link
        to="#"
        class="column text-center "
      >
        <div class="nav-image navOne text-center"></div>
        <div class="text-center nav-text">Піца</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        @click="currentStepNumber = 2"
        class="column nuxt-link-exact-active"
      >
        <div class="nav-image navTwo"></div>
        <div class="text-center nav-text">Бургери</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        class="column "
      >
        <div class="nav-image navThree"></div>
        <div class="text-center nav-text">Суші</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        class="column "
      >
        <div class="nav-image navFour"></div>
        <div class="text-center nav-text">Млинці</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        class="column "
      >
        <div class="nav-image navFive"></div>
        <div class="text-center nav-text">Десерти</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        class="column "
      >
        <div class="nav-image navSix"></div>
        <div class="text-center nav-text">Салати</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        class="column "
      >
        <div class="nav-image navSeven"></div>
        <div class="text-center nav-text">Перші
          страви</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        class="column "
      >
        <div class="nav-image navEight"></div>
        <div class="text-center nav-text">Хіти</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        @click.prevent="setNewProducts"
        class="column "
      >
        <div class="nav-image navNine"></div>
        <div class="text-center nav-text">Гарячі напої</div>

      </nuxt-link>

      <nuxt-link
        to="#"
        @click.prevent="currentStepNumber = 10"
        class="column "
      >
        <div class="nav-image navTen"></div>
        <div class="text-center nav-text">Алкоголь</div>

      </nuxt-link>

    </section>

  </div>
</template>

<script>
export default {

  data () {
    return {
      currentStepNumber: 2,

    }
  }
}
</script>

<style lang="scss" scoped>
#imageed-Products-Navigation {
  background-color: $darkColor;
}

#imageed-Products-Navigation a .nav-image {
  mix-blend-mode: luminosity;
  transition: 500ms ease-in-out;
  text-decoration: none;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.45);

  &:hover {
    mix-blend-mode: normal;
  }
}

#imageed-Products-Navigation a.nuxt-link-exact-active .nav-image {
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

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  margin: 22px auto 22px auto;
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
