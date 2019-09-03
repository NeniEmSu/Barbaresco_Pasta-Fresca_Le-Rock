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
              v-for="originalRoll in originalRoll.originalRoll"
              :key="originalRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${originalRoll.image + '.png'}`)"
                :alt="originalRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="originalRoll.name"
                >{{originalRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="originalRoll.summary"
                >{{(originalRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{originalRoll.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{originalRoll.quantity}}</span> {{originalRoll.price}}</p>
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
              v-for="californiaRoll in californiaRoll.californiaRoll"
              :key="californiaRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${californiaRoll.image + '.png'}`)"
                :alt="californiaRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="californiaRoll.name"
                >{{californiaRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="californiaRoll.summary"
                >{{(californiaRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{californiaRoll.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{californiaRoll.quantity}}</span> {{californiaRoll.price}}</p>
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
              v-for="PhiladelphiaRoll in PhiladelphiaRoll.PhiladelphiaRoll"
              :key="PhiladelphiaRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${PhiladelphiaRoll.image + '.png'}`)"
                :alt="PhiladelphiaRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="PhiladelphiaRoll.name"
                >{{PhiladelphiaRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="PhiladelphiaRoll.summary"
                >{{(PhiladelphiaRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{PhiladelphiaRoll.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{PhiladelphiaRoll.quantity}}</span> {{PhiladelphiaRoll.price}}</p>
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
              v-for="drakoniRoll in drakoniRoll.drakoniRoll"
              :key="drakoniRoll.id"
            >

              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${drakoniRoll.image + '.png'}`)"
                :alt="drakoniRoll.name"
              >
              <div class="card-body">
                <h5
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  v-b-tooltip.hover
                  :title="drakoniRoll.name"
                >{{drakoniRoll.name}}</h5>
                <p
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  v-b-tooltip.hover
                  :title="drakoniRoll.summary"
                >{{(drakoniRoll.summary).slice(0, 25)}}...<span class="card-text quantity">{{drakoniRoll.quantity}}</span></p>

                <div class="row">
                  <div class="col-sm-4 pr-0 my-auto">
                    <p class="card-text cost my-auto"><span class="card-text d-inline d-sm-none">{{drakoniRoll.quantity}}</span> {{drakoniRoll.price}}</p>
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
import alcoholicCocktail from "~/api/barbaresco.json"
import alcoholicSet from "~/api/barbaresco.json"
import originalRoll from "~/api/barbaresco.json"
import californiaRoll from "~/api/barbaresco.json"
import PhiladelphiaRoll from "~/api/barbaresco.json"
import drakoniRoll from "~/api/barbaresco.json"

export default {
  name: 'TheAlcohol',
  data () {
    return {
      alcoholicCocktail,
      alcoholicSet,
      originalRoll,
      californiaRoll,
      PhiladelphiaRoll,
      drakoniRoll

    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategories.scss";
</style>
