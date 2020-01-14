<i18n>
{
  "uk": {
    "cocktail": "АЛКОГОЛЬНІ КОКТЕЙЛІ",
    "sets": "АЛКОГОЛЬНІ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "ІГРИСТІ ВИНА",
    "alcoholicDrinks": "Алкогольні напої",
    "whisky": "віскі",
    "rom": "Ром",
    "gin": "ДжиH",
    "vodka": "Горілка",
    "aperitifs": "аперетиви",
    "brandy": "коньяк і бренді",
    "diva": "діджестиви",
    "takila": "текіла",
    "order": "Замовити"
  },
  "en": {
   "cocktail": "ALCOHOLIC COCKTAILS",
   "sets": "ALCOHOLIC SETS",
   "wine": "Wine",
   "sparklingWine": "SPARKLING WINES",
   "alcoholicDrinks": "Alcoholic Drinks",
    "whisky": "Whiskey",
    "rom": "Rum",
    "gin": "Gin",
    "vodka": "Vodka",
    "aperitifs": "aperitifs",
    "brandy": "brandy",
    "diva": "Diva",
    "takila": "tequila",
    "order": "Order"
  },
  "ru": {
    "cocktail": "Алкогольные Коктейли",
    "sets": "АЛКОГОЛЬНЫЕ СЕТИ",
    "wine": "ВИНА",
    "sparklingWine": "игристые вина",
    "alcoholicDrinks": "Алкогольные напитки",
    "whisky": "виски",
    "rom": "Ром",
    "gin": "ДжиH",
    "vodka": "водка",
    "aperitifs": "Аперитивы",
    "brandy": "коньяк и бренди",
    "diva": "диджестивы",
    "takila": "текила",
    "order": "Заказать"
  }
}
</i18n>

<template>
  <div
    id="theAlcohol"
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
                src="~/assets/img/barbarescoDrinksFreshIcon.png"
                alt="icon"
                class="d-inline-block d-sm-none m-auto text-center"
                align="left"
                style="height:25px;"
              >
              <h2 class="text-center m-auto d-inline-block">
                {{ $t('cocktail') }}
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
              v-for="product in extractedProductsAlcoholicCocktailEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('cocktail') }}
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
              v-for="product in extractedProductsAlcoholicCocktailRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('cocktail') }}
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
              v-for="product in extractedProductsAlcoholicCocktail"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  class="card-text text-left ingredients d-none d-sm-block"
                  style="cursor: context-menu;"
                  :title="product.summary"
                >
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('sets') }}
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
              v-for="product in extractedProductsAlcoholicSetEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('sets') }}
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
              v-for="product in extractedProductsAlcoholicSetRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('sets') }}
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
              v-for="product in extractedProductsAlcoholicSet"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('wine') }}
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
              v-for="product in extractedProductsWineEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('wine') }}
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
              v-for="product in extractedProductsWineRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('wine') }}
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
              v-for="product in extractedProductsWine"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('sparklingWine') }}
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
              v-for="product in extractedProductsSparklingWineEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('sparklingWine') }}
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
              v-for="product in extractedProductsSparklingWineRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('sparklingWine') }}
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
              v-for="product in extractedProductsSparklingWine"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('alcoholicDrinks') }}
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
              v-for="product in extractedProductsAlcoholicDrinksEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('alcoholicDrinks') }}
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
              v-for="product in extractedProductsAlcoholicDrinksRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('alcoholicDrinks') }}
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
              v-for="product in extractedProductsAlcoholicDrinks"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('rom') }}
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
              v-for="product in extractedProductsRomEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('rom') }}
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
              v-for="product in extractedProductsRomRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('rom') }}
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
              v-for="product in extractedProductsRom"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('vodka') }}
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
              v-for="product in extractedProductsVodkaEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('vodka') }}
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
              v-for="product in extractedProductsVodkaRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('vodka') }}
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
              v-for="product in extractedProductsVodka"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('gin') }}
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
              v-for="product in extractedProductsGinEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('gin') }}
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
              v-for="product in extractedProductsGinRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('gin') }}
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
              v-for="product in extractedProductsGin"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('whisky') }}
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
              v-for="product in extractedProductsWhiskyEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('whisky') }}
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
              v-for="product in extractedProductsWhiskyRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('whisky') }}
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
              v-for="product in extractedProductsWhisky"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('takila') }}
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
              v-for="product in extractedProductsTakilaEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('takila') }}
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
              v-for="product in extractedProductsTakilaRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('takila') }}
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
              v-for="product in extractedProductsTakila"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('diva') }}
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
              v-for="product in extractedProductsDivaEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('diva') }}
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
              v-for="product in extractedProductsDivaRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('diva') }}
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
              v-for="product in extractedProductsDiva"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('brandy') }}
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
              v-for="product in extractedProductsKonbrandEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('brandy') }}
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
              v-for="product in extractedProductsKonbrandRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('brandy') }}
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
              v-for="product in extractedProductsKonbrand"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('aperitifs') }}
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
              v-for="product in extractedProductsAperitifsEn"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('aperitifs') }}
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
              v-for="product in extractedProductsAperitifsRu"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
                {{ $t('aperitifs') }}
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
              v-for="product in extractedProductsAperitifs"
              :key="product.id"
              class="card"
            >
              <img
                class="card-img-top mx-auto"
                :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
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
                  {{ (product.summary).slice(0, 25) }}...<span class="card-text quantity">{{ product.volume }}</span>
                </p>

                <div class="row">
                  <div class="col-sm-5 pr-4 pr-md-0 my-auto">
                    <p class="card-text cost my-auto">
                      <span class="card-text d-inline d-sm-none">{{ product.volume }}</span> {{ product.price | currency }}
                    </p>
                  </div>
                  <div class="col-sm-7 p-0 text-center  my-auto">
                    <button
                      class="btn my-auto mr-auto center"
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
  name: 'TheAlcohol',
  data () {
    return {

    }
  },

  computed: {
    extractedProductsAlcoholicCocktail () {
      return productData.filter(el => el.category === 'le-rock-alcoholicCocktail')
    },
    extractedProductsAlcoholicCocktailEn () {
      return productDataEn.filter(el => el.category === 'le-rock-alcoholicCocktail')
    },
    extractedProductsAlcoholicCocktailRu () {
      return productDataRu.filter(el => el.category === 'le-rock-alcoholicCocktail')
    },
    extractedProductsAlcoholicSet () {
      return productData.filter(el => el.category === 'le-rock-alcoholicSet')
    },
    extractedProductsAlcoholicSetEn () {
      return productDataEn.filter(el => el.category === 'le-rock-alcoholicSet')
    },
    extractedProductsAlcoholicSetRu () {
      return productDataRu.filter(el => el.category === 'le-rock-alcoholicSet')
    },
    extractedProductsWine () {
      return productData.filter(el => el.category === 'le-rock-wine')
    },
    extractedProductsWineEn () {
      return productDataEn.filter(el => el.category === 'le-rock-wine')
    },
    extractedProductsWineRu () {
      return productDataRu.filter(el => el.category === 'le-rock-wine')
    },
    extractedProductsSparklingWine () {
      return productData.filter(el => el.category === 'le-rock-sparklingWine')
    },
    extractedProductsSparklingWineEn () {
      return productDataEn.filter(el => el.category === 'le-rock-sparklingWine')
    },
    extractedProductsSparklingWineRu () {
      return productDataRu.filter(el => el.category === 'le-rock-sparklingWine')
    },
    extractedProductsAlcoholicDrinks () {
      return productData.filter(el => el.category === 'le-rock-drinks')
    },
    extractedProductsAlcoholicDrinksEn () {
      return productDataEn.filter(el => el.category === 'le-rock-drinks')
    },
    extractedProductsAlcoholicDrinksRu () {
      return productDataRu.filter(el => el.category === 'le-rock-drinks')
    },
    extractedProductsRom () {
      return productData.filter(el => el.category === 'le-rock-rom')
    },
    extractedProductsRomEn () {
      return productDataEn.filter(el => el.category === 'le-rock-rom')
    },
    extractedProductsRomRu () {
      return productDataRu.filter(el => el.category === 'le-rock-rom')
    },
    extractedProductsVodka () {
      return productData.filter(el => el.category === 'le-rock-vodka')
    },
    extractedProductsVodkaEn () {
      return productDataEn.filter(el => el.category === 'le-rock-vodka')
    },
    extractedProductsVodkaRu () {
      return productDataRu.filter(el => el.category === 'le-rock-vodka')
    },
    extractedProductsGin () {
      return productData.filter(el => el.category === 'le-rock-gin')
    },
    extractedProductsGinEn () {
      return productDataEn.filter(el => el.category === 'le-rock-gin')
    },
    extractedProductsGinRu () {
      return productDataRu.filter(el => el.category === 'le-rock-gin')
    },
    extractedProductsWhisky () {
      return productData.filter(el => el.category === 'le-rock-whisky')
    },
    extractedProductsWhiskyEn () {
      return productDataEn.filter(el => el.category === 'le-rock-whisky')
    },
    extractedProductsWhiskyRu () {
      return productDataRu.filter(el => el.category === 'le-rock-whisky')
    },
    extractedProductsTakila () {
      return productData.filter(el => el.category === 'le-rock-takila')
    },
    extractedProductsTakilaEn () {
      return productDataEn.filter(el => el.category === 'le-rock-takila')
    },
    extractedProductsTakilaRu () {
      return productDataRu.filter(el => el.category === 'le-rock-takila')
    },
    extractedProductsDiva () {
      return productData.filter(el => el.category === 'le-rock-diva')
    },
    extractedProductsDivaEn () {
      return productDataEn.filter(el => el.category === 'le-rock-diva')
    },
    extractedProductsDivaRu () {
      return productDataRu.filter(el => el.category === 'le-rock-diva')
    },
    extractedProductsKonbrand () {
      return productData.filter(el => el.category === 'le-rock-konbrand')
    },
    extractedProductsKonbrandEn () {
      return productDataEn.filter(el => el.category === 'le-rock-konbrand')
    },
    extractedProductsKonbrandRu () {
      return productDataRu.filter(el => el.category === 'le-rock-konbrand')
    },
    extractedProductsAperitifs () {
      return productData.filter(el => el.category === 'le-rock-aperitifs')
    },
    extractedProductsAperitifsEn () {
      return productDataEn.filter(el => el.category === 'le-rock-aperitifs')
    },
    extractedProductsAperitifsRu () {
      return productDataRu.filter(el => el.category === 'le-rock-aperitifs')
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
@import "~assets/scss/productCardsWithCategoriesWhite.scss";
</style>
