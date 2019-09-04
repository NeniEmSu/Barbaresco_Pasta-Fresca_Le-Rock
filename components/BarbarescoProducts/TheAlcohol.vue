<i18n>
{
  "uk": {
    "whilsky": "Віскі"
  },
  "en": {
   "whilsky": "Whilsky"
  },
  "ru": {
    "whilsky": "Виски"
  }
}
</i18n>

<template>
  <div
    class="container "
    id="theAlcohol"
  >

    <div class="content">

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block"> АЛКОГОЛЬНІ КОКТЕЙЛІ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="alcoholicCocktail in alcoholicCocktail.alcoholicCocktail"
              :key="alcoholicCocktail.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${alcoholicCocktail.image + '.png'}`)"
                :alt="alcoholicCocktail.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="alcoholicCocktail.name"
                >{{alcoholicCocktail.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="alcoholicCocktail.summary"
                >{{(alcoholicCocktail.summary).slice(0, 25)}}...<span class="card-text quantity">{{alcoholicCocktail.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{alcoholicCocktail.quantity}}</span> {{alcoholicCocktail.price}}</p>

                  </div>
                  <div class="col-sm-8 text-center  my-auto">
                    <button class="btn my-auto mr-auto">Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">

          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">АЛКОГОЛЬНІ СЕТИ</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>
        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="alcoholicSet in alcoholicSet.alcoholicSet"
              :key="alcoholicSet.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${alcoholicSet.image + '.png'}`)"
                :alt="alcoholicSet.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="alcoholicSet.name"
                >{{alcoholicSet.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="alcoholicSet.summary"
                >{{(alcoholicSet.summary).slice(0, 25)}}...<span class="card-text quantity">{{alcoholicSet.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{alcoholicSet.quantity}}</span> {{alcoholicSet.price}}</p>
                  </div>
                  <div class="col-sm-8 text-center  my-auto">
                    <button class="btn my-auto mr-auto">Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">ВИНА</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="wine in wine.wine"
              :key="wine.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${wine.image + '.png'}`)"
                :alt="wine.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="wine.name"
                >{{wine.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="wine.summary"
                >{{(wine.summary).slice(0, 25)}}...<span class="card-text quantity">{{wine.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{wine.quantity}}</span> {{wine.price}}</p>
                  </div>
                  <div class="col-sm-8 text-center  my-auto">
                    <button class="btn my-auto mr-auto">Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">

          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">ІГРИСТІ ВИНА</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="sparklingWine in sparklingWine.sparklingWine"
              :key="sparklingWine.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${sparklingWine.image + '.png'}`)"
                :alt="sparklingWine.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="sparklingWine.name"
                >{{sparklingWine.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="sparklingWine.summary"
                >{{(sparklingWine.summary).slice(0, 25)}}...<span class="card-text quantity">{{sparklingWine.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{sparklingWine.quantity}}</span> {{sparklingWine.price}}</p>
                  </div>
                  <div class="col-sm-8 text-center  my-auto">
                    <button class="btn my-auto mr-auto">Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">Алкогольні напої</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="alcoholicDrinks in alcoholicDrinks.alcoholicDrinks"
              :key="alcoholicDrinks.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${alcoholicDrinks.image + '.png'}`)"
                :alt="alcoholicDrinks.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="alcoholicDrinks.name"
                >{{alcoholicDrinks.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="alcoholicDrinks.summary"
                >{{(alcoholicDrinks.summary).slice(0, 25)}}...<span class="card-text quantity">{{alcoholicDrinks.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{alcoholicDrinks.quantity}}</span> {{alcoholicDrinks.price}}</p>
                  </div>
                  <div class="col-sm-8 text-center  my-auto">
                    <button class="btn my-auto mr-auto">Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="row">

        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">ПИВО</h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              ></b-img-lazy>
            </div>
          </div>

        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              class="card"
              v-for="bear in bear.bear"
              :key="bear.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${bear.image + '.png'}`)"
                :alt="bear.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="bear.name"
                >{{bear.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="bear.summary"
                >{{(bear.summary).slice(0, 25)}}...<span class="card-text quantity">{{bear.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{bear.quantity}}</span> {{bear.price}}</p>
                  </div>
                  <div class="col-sm-8 text-center  my-auto">
                    <button class="btn my-auto mr-auto">Замовити</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { alcoholicCocktail, alcoholicSet, wine, sparklingWine, alcoholicDrinks, bear } from '~/api/index.js';

export default {
  name: 'TheAlcohol',
  data () {
    return {
      alcoholicCocktail,
      alcoholicSet,
      wine,
      sparklingWine,
      alcoholicDrinks,
      bear

    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategories.scss";
</style>
