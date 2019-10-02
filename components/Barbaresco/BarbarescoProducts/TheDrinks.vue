<i18n>
{
  "uk": {
    "coffee": "КАВА",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНІ НАПОЇ",
    "lemonade": "ЛИМОНАДИ",
    "smoothy": "СМУЗІ",
    "milkShake": "МІЛКШЕЙКИ",
    "noneAlcoholicDrinks": "БЕЗАЛКОГОЛЬНІ НАПОЇ",
    "order": "Замовити"
  },
  "en": {
   "coffee": "COFFEE",
   "tea": "Tea",
   "coldDrinks": "Cold Drinks",
   "lemonade": "Lemonade",
   "smoothy": "Smoothies",
    "milkShake": "MILKSHAKES",
    "noneAlcoholicDrinks": "NON-ALCOHOLIC BEVERAGES",
    "order": "Order"
  },
  "ru": {
    "coffee": "КОФЕ",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНЫЕ НАПИТКИ",
    "lemonade": "ЛИМОНАД",
    "smoothy": "ПОЛОСЕ",
    "milkShake": "Милкшейк",
    "noneAlcoholicDrinks": "безалкогольные напитки",
    "order": "Заказать"
  }
}
</i18n>

<template>
  <div
    id="drinks"
    class="container "
  >
    <div class="content">
      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coffee') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="coffee in extractedProductsCoffeeEn"
              :key="coffee.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${coffee.image + '.jpg'}`)"
                :alt="coffee.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="coffee.name"
                >
                  {{ coffee.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  :title="coffee.summary"
                >
                  {{ (coffee.summary).slice(0, 30) }}...<span class="card-text quantity">{{ coffee.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ coffee.volume }}</span> {{ coffee.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(coffee.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coffee') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="coffee in extractedProductsCoffeeRu"
              :key="coffee.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${coffee.image + '.jpg'}`)"
                :alt="coffee.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="coffee.name"
                >
                  {{ coffee.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  :title="coffee.summary"
                >
                  {{ (coffee.summary).slice(0, 30) }}...<span class="card-text quantity">{{ coffee.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ coffee.volume }}</span> {{ coffee.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(coffee.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coffee') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksCoffeIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="coffee in extractedProductsCoffee"
              :key="coffee.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${coffee.image + '.jpg'}`)"
                :alt="coffee.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="coffee.name"
                >
                  {{ coffee.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  :title="coffee.summary"
                >
                  {{ (coffee.summary).slice(0, 30) }}...<span class="card-text quantity">{{ coffee.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ coffee.volume }}</span> {{ coffee.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(coffee.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('tea') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsTeaEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('tea') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsTeaRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
        <div class="col-sm-3">
          <div class="card card-cat mx-auto">
            <div class="m-auto text-center">
              <img
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('tea') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksTeaLeafIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsTea"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coldDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="fresh in extractedProductsFreshEn"
              :key="fresh.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${fresh.image + '.jpg'}`)"
                :alt="fresh.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="fresh.name"
                >
                  {{ fresh.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="fresh.summary"
                >
                  {{ (fresh.summary).slice(0, 30) }}...<span class="card-text quantity">{{ fresh.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ fresh.volume }}</span> {{ fresh.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(fresh.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coldDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="fresh in extractedProductsFresh"
              :key="fresh.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${fresh.image + '.jpg'}`)"
                :alt="fresh.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="fresh.name"
                >
                  {{ fresh.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="fresh.summary"
                >
                  {{ (fresh.summary).slice(0, 30) }}...<span class="card-text quantity">{{ fresh.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ fresh.volume }}</span> {{ fresh.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(fresh.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('coldDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="fresh in extractedProductsFresh"
              :key="fresh.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${fresh.image + '.jpg'}`)"
                :alt="fresh.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="fresh.name"
                >
                  {{ fresh.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="fresh.summary"
                >
                  {{ (fresh.summary).slice(0, 30) }}...<span class="card-text quantity">{{ fresh.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ fresh.volume }}</span> {{ fresh.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(fresh.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('lemonade') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="lemonade in extractedProductsLemonadeEn"
              :key="lemonade.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${lemonade.image + '.jpg'}`)"
                :alt="lemonade.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="lemonade.name"
                >
                  {{ lemonade.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="lemonade.summary"
                >
                  {{ (lemonade.summary).slice(0, 30) }}...<span class="card-text quantity">{{ lemonade.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ lemonade.volume }}</span> {{ lemonade.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(lemonade.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('lemonade') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="lemonade in extractedProductsLemonadeRu"
              :key="lemonade.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${lemonade.image + '.jpg'}`)"
                :alt="lemonade.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="lemonade.name"
                >
                  {{ lemonade.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="lemonade.summary"
                >
                  {{ (lemonade.summary).slice(0, 30) }}...<span class="card-text quantity">{{ lemonade.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ lemonade.volume }}</span> {{ lemonade.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(lemonade.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('lemonade') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="lemonade in extractedProductsLemonade"
              :key="lemonade.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${lemonade.image + '.jpg'}`)"
                :alt="lemonade.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="lemonade.name"
                >
                  {{ lemonade.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="lemonade.summary"
                >
                  {{ (lemonade.summary).slice(0, 30) }}...<span class="card-text quantity">{{ lemonade.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ lemonade.volume }}</span> {{ lemonade.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(lemonade.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('smoothy') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="smoothy in extractedProductsSmoothyEn"
              :key="smoothy.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${smoothy.image + '.jpg'}`)"
                :alt="smoothy.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="smoothy.name"
                >
                  {{ smoothy.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="smoothy.summary"
                >
                  {{ (smoothy.summary).slice(0, 30) }}...<span class="card-text quantity">{{ smoothy.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ smoothy.volume }}</span> {{ smoothy.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(smoothy.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('smoothy') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="smoothy in extractedProductsSmoothyRu"
              :key="smoothy.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${smoothy.image + '.jpg'}`)"
                :alt="smoothy.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="smoothy.name"
                >
                  {{ smoothy.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="smoothy.summary"
                >
                  {{ (smoothy.summary).slice(0, 30) }}...<span class="card-text quantity">{{ smoothy.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ smoothy.volume }}</span> {{ smoothy.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(smoothy.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('smoothy') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="smoothy in extractedProductsSmoothy"
              :key="smoothy.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${smoothy.image + '.jpg'}`)"
                :alt="smoothy.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="smoothy.name"
                >
                  {{ smoothy.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="smoothy.summary"
                >
                  {{ (smoothy.summary).slice(0, 30) }}...<span class="card-text quantity">{{ smoothy.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ smoothy.volume }}</span> {{ smoothy.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(smoothy.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('milkShake') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="milkshake in extractedProductsMilkshakeEn"
              :key="milkshake.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${milkshake.image + '.jpg'}`)"
                :alt="milkshake.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="milkshake.name"
                >
                  {{ milkshake.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="milkshake.summary"
                >
                  {{ (milkshake.summary).slice(0, 30) }}...<span class="card-text quantity">{{ milkshake.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ milkshake.volume }}</span> {{ milkshake.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(milkshake.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('milkShake') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="milkshake in extractedProductsMilkshakeRu"
              :key="milkshake.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${milkshake.image + '.jpg'}`)"
                :alt="milkshake.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="milkshake.name"
                >
                  {{ milkshake.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="milkshake.summary"
                >
                  {{ (milkshake.summary).slice(0, 30) }}...<span class="card-text quantity">{{ milkshake.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ milkshake.volume }}</span> {{ milkshake.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(milkshake.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('milkShake') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="milkshake in extractedProductsMilkshake"
              :key="milkshake.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${milkshake.image + '.jpg'}`)"
                :alt="milkshake.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="milkshake.name"
                >
                  {{ milkshake.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="milkshake.summary"
                >
                  {{ (milkshake.summary).slice(0, 30) }}...<span class="card-text quantity">{{ milkshake.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ milkshake.volume }}</span> {{ milkshake.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(milkshake.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div
        v-if="$i18n.locale === 'en'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('noneAlcoholicDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsNonAlcoholicDrinksEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="$i18n.locale === 'ru'"
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('noneAlcoholicDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsNonAlcoholicDrinksRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
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
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('noneAlcoholicDrinks') }}
              </h2>
              <b-img-lazy
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="m-auto d-none d-sm-block"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-9">
          <div class="row">
            <div
              v-for="product in extractedProductsNonAlcoholicDrinks"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`)"
                :alt="product.name"
              >
              <div class="card-body">
                <h5
                  v-b-tooltip.hover
                  class="card-title mx-auto text-center crop"
                  style="cursor:context-menu"
                  :title="product.name"
                >
                  {{ product.name }}
                </h5>
                <p
                  v-b-tooltip.hover
                  class="card-text text-left ingredients d-none d-md-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 30) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 pl-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto"
                      @click.prevent="addToCart(product.id)"
                    >
                      {{ $t('order') }}
                    </button>
                  </div>
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
import { productData, productDataEn, productDataRu } from '~/plugins/api/index'
export default {
  name: 'TheDrinks',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsCoffee () {
      return productData.filter(el => el.category === 'barbaresco-coffee')
    },
    extractedProductsCoffeeEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-coffee')
    },
    extractedProductsCoffeeRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-coffee')
    },
    extractedProductsTea () {
      return productData.filter(el => el.category === 'barbaresco-tea')
    },
    extractedProductsTeaEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-tea')
    },
    extractedProductsTeaRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-tea')
    },
    extractedProductsFresh () {
      return productData.filter(el => el.category === 'barbaresco-fresh')
    },
    extractedProductsFreshEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-fresh')
    },
    extractedProductsFreshRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-fresh')
    },
    extractedProductsLemonade () {
      return productData.filter(el => el.category === 'barbaresco-lemonade')
    },
    extractedProductsLemonadeEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-lemonade')
    },
    extractedProductsLemonadeRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-lemonade')
    },
    extractedProductsSmoothy () {
      return productData.filter(el => el.category === 'barbaresco-smoothy')
    },
    extractedProductsSmoothyEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-smoothy')
    },
    extractedProductsSmoothyRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-smoothy')
    },
    extractedProductsMilkshake () {
      return productData.filter(el => el.category === 'barbaresco-milkshake')
    },
    extractedProductsMilkshakeEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-milkshake')
    },
    extractedProductsMilkshakeRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-milkshake')
    },
    extractedProductsNonAlcoholicDrinks () {
      return productData.filter(el => el.category === 'barbaresco-nonAlcoholicDrinks')
    },
    extractedProductsNonAlcoholicDrinksEn () {
      return productDataEn.filter(el => el.category === 'barbaresco-nonAlcoholicDrinks')
    },
    extractedProductsNonAlcoholicDrinksRu () {
      return productDataRu.filter(el => el.category === 'barbaresco-nonAlcoholicDrinks')
    }
  },

  methods: {
    addToCart (id, append = false) {
      this.$store.dispatch('addToCart', id)
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: 'b-toaster-bottom-right',
        appendToast: append
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategories.scss";
</style>
