<i18n>
{
  "uk": {
    "language": "Укр",
    "vacancyNotice": "Наразі вакансій у нас немає!",
    "reservation":{
      "heading": "Оберіть час та кількість осіб",
      "time": "Час",
      "noOfPeople": "Кількість осіб",
      "dateTitle": "Обрати дату",
      "name": "Ім’я",
      "phone": "Телефон",
      "order": "Замовити"
      },
    "cart":{
      "heading": "Замовлення",
      "emptyCart": "Ви ще нічого не додали до замовлення",
      "total": "Сума",
      "order": "Замовити",
      "clear": "Очистити все",
      "currencyValue": "грн"
      },
      "links": {
        "home": "Головна",
        "menu": "Меню",
        "delivery": "Доставка їжі",
        "reserveAPlace": "Резервація місця",
        "reservation": "Резервація",
        "aboutUs": "Про нас",
        "atmosphere": "Атмосфера",
        "vacancy": "Ваканції",
        "contact": "Контакти",
        "kitchen": "Кухня"
      },
      "form":{
      "name": "Ваше ім’я",
      "phone": "Ваш телефон",
      "city": "Місто/село",
      "street": "Вулиця",
      "house": "Буд",
      "code": "Код",
      "apartment": "Кв./офіс",
      "comment": "Коментар до замовлення",
      "modeOfPayment": "Бажаний спосіб оплати",
      "pay-carrier": "Оплата кур’єру готівкою",
      "pay-card": "Оплата на карту"
      },
      "toast":{
      "title": "Дякуємо за замовлення",
      "info": "Очікуйте на дзвінок нашого менеджера",
      "btn": "Повернутися на головну"
      },
      "ukrainian": "Українська",
      "english": "English",
      "russian": "Русский"
  },
  "en": {
    "language": "Eng",
   "vacancyNotice": "We don't have any vacancies right now!",
   "reservation":{
      "heading": "Choose the time and number of people",
      "time": "Time",
      "noOfPeople": "Number of people",
      "dateTitle": "Choose a date",
      "name": "Name",
      "phone": "Phone",
      "order": "Order"
      },
    "cart":{
      "heading": "Order",
      "emptyCart": "You haven't added anything to your order yet",
      "total": "Sum",
      "order": "Order",
      "clear": "Clear everything",
      "currencyValue": "Uah"
      },
      "links": {
        "home": "Home",
        "menu": "Menu",
        "delivery": "Food delivery",
        "reserveAPlace": "Reservation of place",
        "reservation": "Reservation",
        "aboutUs": "About us",
        "atmosphere": "Atmosphere",
        "vacancy": "Vacancies",
        "contact": "Contacts",
        "kitchen": "Kitchen"
      },
      "form":{
      "name": "Your name",
      "phone": "Your phone",
      "city": "City/Village",
      "street": "Street",
      "house": "Building",
      "code": "Code",
      "apartment": "Apt./Office",
      "comment": "Order comment",
      "modeOfPayment": "Preferred mode of payment",
      "pay-carrier": "Payment by courier in cash",
      "pay-card": "Payment on card"
      },
      "toast":{
      "title": "Thank you for your order",
      "info": "Expect a call from our manager",
      "btn": "Back to home"
      },
      "ukrainian": "Українська",
      "english": "English",
      "russian": "Русский"

  },
  "ru": {
    "language": "Рус",
    "vacancyNotice": "Сейчас вакансий у нас нет!",
    "reservation":{
      "heading": "Выберите время и количество человек",
      "time": "Время",
      "noOfPeople": "Количество человек",
      "dateTitle": "Выбрать дату",
      "name": "Имя",
      "phone": "Телефон",
      "order": "Заказать"
      },
    "cart":{
      "heading": "Заказ",
      "emptyCart": "Вы еще ничего не добавили к заказу",
      "total": "Сумма",
      "order": "Заказать",
      "clear": "Очистить все",
      "currencyValue": "грн"
      },
      "links": {
        "home": "Главная",
        "menu": "Меню",
        "delivery": "Доставка еды",
        "reserveAPlace": "Резервация места",
        "reservation": "Резервация",
        "aboutUs": "О нас",
        "atmosphere": "Атмосфера",
        "vacancy": "Вакансии",
        "contact": "Контакты",
        "kitchen": "Кухня"
      },
      "form":{
      "name": "Ваше имя",
      "phone": "Ваш телефон",
      "city": "Город/село",
      "street": "Улица",
      "house": "Буд",
      "code": "Код",
      "apartment": "Кв./Офис",
      "comment": "Комментарий к заказу",
      "modeOfPayment": "Предпочтительный способ оплаты",
      "pay-carrier": "Оплата курьеру наличными",
      "pay-card": "Оплата на карту"
      },
      "toast":{
      "title": "Спасибо за заказ",
      "info": "Ожидайте звонок нашего менеджера",
      "btn": "Вернуться на главную"
      },
      "ukrainian": "Українська",
      "english": "English",
      "russian": "Русский"
  }
}
</i18n>

<template>
  <div id="theHeader">
    <header
      id="header"
      v-click-outside="closeMobileNavbar"
      v-handle-scroll="closeMobileNavbar"
      class="header"
    >
      <div class="row">
        <div
          class="btn-hamburger"
          @click="mobileNavOpen = !mobileNavOpen"
        >
          <img
            src="~/assets/img/menu.svg"
            alt="menu Icon"
          >
        </div>

        <b-navbar-brand
          class=" theHeader-nav-brand mx-auto"
          :to="localePath({name:'barbaresco'},$i18n.locale)"
        >
          <b-img-lazy
            class=""
            src="~/assets/img/barbaresco-logo.svg"
            alt="logo barbaresco"
          />
        </b-navbar-brand>

        <div
          target="nav-collapse-2"
          class="border-0 theHead-nav-toggle d-none d-sm-none d-md-none d-lg-inline my-auto reservation"
        >
          <button
            class="btn reservation-btn d-none"
            variant="outline-primary"
            @click="reservationOpen = !reservationOpen"
          >
            {{ $t('links.reservation') }}
          </button>
        </div>

        <div
          class="border-0 theHead-nav-toggle cart"
          style="cursor: pointer;"
          @click="cartOpen = !cartOpen"
        >
          <b-img-lazy
            src="~/assets/img/Корзина.png"
            alt="Cart Icon"
          />

          <div
            id="show-total"
            class="text-center mt-n3 ml-n3"
          >
            <span
              id="item-count"
              style="text-decoration: none;"
              class="text-center"
            >{{ cartSize }}</span>
          </div>
        </div>

        <nav
          class="navbar"
          :class="{'navbar-open': mobileNavOpen}"
        >
          <div
            class="close-navbar-hamburger text-left text-black "
            @click.stop="hide"
          >
            <img
              src="~/assets/img/exit.svg"
              alt="close icon"
            >
          </div>
          <b-navbar-nav>
            <b-nav-item :to="localePath({name: 'index'},$i18n.locale)">
              {{ $t('links.home') }}
            </b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco'},$i18n.locale)">
              {{ $t('links.menu') }}
            </b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco-delivery'},$i18n.locale)">
              {{ $t('links.delivery') }}
            </b-nav-item>
            <b-nav-item
              tag="button"
              @click.stop="reservationOpen = !reservationOpen"
            >
              {{ $t('links.reserveAPlace') }}
            </b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco-kitchen'},$i18n.locale)">
              {{ $t('links.kitchen') }}
            </b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco-about-us'},$i18n.locale)">
              {{ $t('links.aboutUs') }}
            </b-nav-item>
            <b-nav-item
              v-b-modal.modal-1
              tag="button"
            >
              {{ $t('links.vacancy') }}
            </b-nav-item>
            <b-modal
              id="modal-1"
              hide-footer
              :title="$t('links.vacancy')"
            >
              <b>{{ $t('vacancyNotice') }}</b>
            </b-modal>
            <b-nav-item :to="localePath({name: 'barbaresco-contacts'},$i18n.locale)">
              {{ $t('links.contact') }}
            </b-nav-item>

            <div class="mx-auto language-nav">
              <b-dropdown
                id="dropdown-1"
                :text="$t('language')"
                class="m-md-2 "
                variant="outline-dark"
              >
                <b-dropdown-item
                  v-if="$i18n.locale !== 'en'"
                  :to="switchLocalePath('en')"
                >
                  English
                </b-dropdown-item>
                <b-dropdown-item
                  v-if="$i18n.locale !== 'uk'"
                  :to="switchLocalePath('uk')"
                >
                  Українська
                </b-dropdown-item>
                <b-dropdown-item
                  v-if="$i18n.locale !== 'ru'"
                  :to="switchLocalePath('ru')"
                >
                  Русский
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </b-navbar-nav>
        </nav>

        <div
          class="navbar-right cart-body"
          :class="{'navbar-right-open': cartOpen}"
        >
          <div
            class="close-hamburger text-right "
            @click.stop="hideCart"
          >
            <img
              src="~/assets/img/exit.svg"
              alt="close icon"
            >
          </div>
          <section v-if="cartForm === false && success === false">
            <div class="text-center">
              <font v-if="!cartSize">
                {{ $t('cart.emptyCart') }}
              </font>
            </div>

            <div>
              <h3 v-if="cartSize">
                {{ $t('cart.heading') }}
              </h3>
              <div
                v-for="product in cart"
                :key="product.id"
                class="cart-item"
              >
                <div class="row my-auto">
                  <img
                    style="border-radius: 50%;   "
                    :src="require(`~/assets/img/${product.image + '.jpg'}`) || require(`~/assets/img/barbarescoBurger.png`)"
                    alt=""
                    class="col-2 m-auto"
                  >
                  <div class="col-6 p-0">
                    <div class="col-12 p-0 m-auto">
                      <div class="row m-auto">
                        <h6
                          id="cart-item-title"
                          class="col-12 m-auto text-center py-2 crop"
                        >
                          {{ product.name }}
                        </h6>
                        <div class="toggle-quantity col-12 m-auto ">
                          <button
                            :disabled="product.quantity === 1"
                            @click="removeFromCart(product.id)"
                          >
                            &minus;
                          </button>
                          <p>{{ product.quantity }}</p>
                          <button
                            :disabled="product.quantity === product.stock"
                            @click="addToCart(product.id)"
                          >
                            &plus;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 p-0">
                    <div class="col-12 m-auto p-0">
                      <div class="row m-auto">
                        <div class="remove-from-chart col-12 m-auto text-right">
                          <span
                            class="close text-right"
                            @click="deleteFromCart(product.id)"
                          >&times;
                          </span>
                        </div>

                        <div class="cost col-12 m-auto ">
                          <p
                            id="cart-item-price"
                            class="cart-item-price text-right py-2 card-text"
                          >
                            {{ product.quantity* product.price | currency }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr>
              </div>

              <div>
                <hr
                  v-if="!cartSize"
                  class="mt-5"
                >
                <div class="row">
                  <div class="col-4">
                    <small class="col-12">{{ $t('cart.total') }}:</small>
                    <strong class="col-12">{{ cartTotalAmount | currency }}</strong>
                  </div>
                  <div class="col-8 mx-auto text-right">
                    <b-button
                      :to="localePath({name: 'barbaresco-cart'},$i18n.locale)"
                      class="order d-none d-lg-block"
                    >
                      {{ $t('cart.order') }}
                    </b-button>
                    <b-button
                      class="order d-block d-lg-none"
                      @click="showCartForm()"
                    >
                      {{ $t('cart.order') }}
                    </b-button>
                  </div>
                </div>
              </div>

              <div class="seeAll mt-5 mx-auto text-center">
                <button @click="emptycart()">
                  {{ $t('cart.clear') }}
                </button>
              </div>
            </div>
          </section>

          <section v-if="cartForm === true && success === false">
            <div class="form-total text-center">
              <small class="col-12 p-0 small-sum">{{ $t('cart.total') }}:</small>
              <strong class="col-12 p-0 cart-total">{{ cartTotalAmount | currency }}</strong>
              <small class="col-12 p-0 small-value">{{ $t('cart.currencyValue') }}</small>
            </div>
            <hr>

            <div class=" cart-form">
              <form>
                <div class="row">
                  <div class="col-6">
                    <label for="name">{{ $t('form.name') }}
                      <input
                        v-model="name"
                        class="form-control"
                        type="text"
                        name="name"
                        placeholder="..."
                      >
                    </label>
                  </div>
                  <div class="col-6">
                    <label for="phone">{{ $t('form.phone') }}
                      <input
                        v-model.number="phone"
                        class="form-control"
                        type="text"
                        name="phone"
                        placeholder="+380..."
                      > </label>
                  </div>
                </div>

                <div class="row">
                  <div class="col-6">
                    <label for="city">{{ $t('form.city') }}
                      <input
                        v-model="city"
                        class="form-control"
                        type="text"
                        name="city"
                        placeholder="..."
                      ></label>
                  </div>
                  <div class="col-6">
                    <label for="street">{{ $t('form.street') }}
                      <input
                        v-model="street"
                        class="form-control"
                        type="text"
                        name="streeet"
                        placeholder="..."
                      ></label>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <label for="house">{{ $t('form.house') }}
                      <input
                        v-model="house"
                        class="form-control"
                        type="text"
                        name="house"
                        placeholder="..."
                      > </label>
                  </div>
                  <div class="col-4">
                    <label for="code">{{ $t('form.code') }} <input
                      v-model="code"
                      class="form-control"
                      type="text"
                      name="code"
                      placeholder="..."
                    > </label>
                  </div>
                  <div class="col-4">
                    <label for="appartment">{{ $t('form.apartment') }} <input
                      v-model="apartment"
                      class="form-control"
                      type="text"
                      name="appartment"
                      placeholder="..."
                    > </label>
                  </div>
                </div>

                <label for="comment">{{ $t('form.comment') }}</label>
                <textarea
                  id="comment"
                  v-model="comment"
                  class="form-control"
                  name="comment"
                />
                <div class="send-order text-center">
                  <b-button
                    class="order"
                    @click.prevent="sendOrder"
                  >
                    {{ $t('cart.order') }}
                  </b-button>
                </div>
              </form>
            </div>
          </section>

          <div v-if="success === true" class="success">
            <div class="text-center m-auto">
              <div class="animation-ctn">
                <div class="icon icon--order-success svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
                    <g fill="none" stroke="none" stroke-width="0">
                      <polyline
                        class="st0"
                        stroke="#0A0A0A"
                        stroke-width="12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="43.5,77.8 63.7,97.9 112.2,49.4 "
                        style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <h5>{{ $t('toast.title') }}</h5>
              <p>{{ $t('toast.info') }}</p>
              <b-button class="backToHome" :to="localePath({name: 'barbaresco'},$i18n.locale)" @click="success = false">
                {{ $t('toast.btn') }}
              </b-button>
            </div>
          </div>
        </div>

        <div
          class="navbar-right reservation-body"
          :class="{'navbar-right-open': reservationOpen}"
        >
          <div
            class="close-hamburger text-right "
            @click.stop="hideReservation"
          >
            <img
              src="~/assets/img/exit.svg"
              alt="close icon"
            >
          </div>

          <div>
            <h5>{{ $t('reservation.heading') }}</h5>
            <form @submit.prevent="sendMessage">
              <select
                id="time"
                v-model="time"
                name="time"
                class="w-100"
              >
                <option value="null">
                  {{ $t('reservation.time') }}
                </option>
                <option value="morning">
                  Ранок
                </option>
                <option value="breakfast">
                  Сніданок
                </option>
                <option value="afternoon">
                  Вдень
                </option>
                <option value="lunch">
                  Обід
                </option>
                <option value="night">
                  Ніч
                </option>
                <option value="dinner">
                  Вечеря
                </option>
              </select>

              <select
                id="number-of-people"
                v-model="noOfPeople"
                name="number-of-people"
                class="w-100"
              >
                <option value="null">
                  {{ $t('reservation.noOfPeople') }}
                </option>
                <option value="1">
                  1
                </option>
                <option value="2">
                  2
                </option>
                <option value="4">
                  4
                </option>
                <option value="6">
                  6
                </option>
                <option value="8">
                  8
                </option>
                <option value="10">
                  10
                </option>
                <option value="20">
                  20
                </option>
              </select>

              <h5>{{ $t('reservation.dateTitle') }}</h5>

              <div>
                <client-only>
                  <datepicker
                    v-if="$i18n.locale === 'en'"
                    v-model="date"
                    :value="date"
                    :language="en"
                    format="YYYY-MM-dd"
                    name="date"
                    :inline="true"
                    :disabled-dates="disabledDates"
                  />
                  <datepicker
                    v-if="$i18n.locale === 'uk'"
                    v-model="date"
                    :value="date"
                    :language="uk"
                    format="YYYY-MM-dd"
                    name="date"
                    :inline="true"
                    :disabled-dates="disabledDates"
                  />
                  <datepicker
                    v-if="$i18n.locale === 'ru'"
                    v-model="date"
                    :value="date"
                    :language="ru"
                    format="YYYY-MM-dd"
                    name="date"
                    :inline="true"
                    :disabled-dates="disabledDates"
                  />
                </client-only>
              </div>

              <input
                v-model="name"
                type="text"
                :placeholder="$t('reservation.name')"
                class="w-100"
              >

              <input
                v-model="phone"
                type="text"
                :placeholder="$t('reservation.phone')"
                class="w-100"
              >
              <div class="form-group mx-auto text-center">
                <button
                  id="submit"
                  class="order mt-2"
                  type="submit"
                  name="submit"
                >
                  {{ $t('reservation.order') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapState } from 'vuex'
import { en, uk, ru } from 'vuejs-datepicker/dist/locale'
import clickOutside from '@/directives/click-outside'
import handleScroll from '@/directives/handle-scroll'

let today = new Date()
const dd = String(today.getDate()).padStart(2, '0')
const mm = String(today.getMonth() + 1).padStart(2, '0')
const yyyy = today.getFullYear()

today = mm + '/' + dd + '/' + yyyy

const currentDate = new Date()
const state = {
  disabledDates: {
    to: new Date(currentDate.setDate(currentDate.getDate() - 1)), // Disable all dates up to specific date
    // days: [6, 0], // Disable Saturday's and Sunday's
    // daysOfMonth: [29, 30, 31], // Disable 29th, 30th and 31st of each month
    dates: [ // Disable an array of dates
      new Date(2019, 9, 16),
      new Date(2019, 8, 17),
      new Date(2019, 8, 18)
    ],

    ranges: [{ // Disable dates in given ranges (exclusive).
      from: new Date(2019, 0, 0),
      to: new Date(currentDate.setDate(currentDate.getDate() - 1))
    }]

  }
}
export default {
  components: {

  },
  directives: {
    clickOutside,
    handleScroll

  },
  data () {
    return {
      success: false,
      cartForm: false,
      userDropdownOpen: false,
      mobileNavOpen: false,
      cartOpen: false,
      reservationOpen: false,
      showHeader: true,
      lastScrollPosition: 0,

      date: today,
      phone: null,
      name: null,
      time: null,
      noOfPeople: null,
      city: null,
      street: null,
      house: null,
      code: null,
      apartment: null,
      comment: null,
      disabledDates: state.disabledDates,
      format: 'd MMMM yyyy',
      en,
      uk,
      ru

    }
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'cartSize',
      'cartTotalAmount'
    ])
  },
  watch: {
    $route () {
      this.mobileNavOpen = false
      this.cartOpen = false
      this.reservationOpen = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
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
    },

    removeFromCart (id, append = false) {
      this.$store.dispatch('removeFromCart', id)
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: 'b-toaster-bottom-right',
        appendToast: append
      })
    },

    deleteFromCart (id, append = false) {
      this.$store.dispatch('deleteFromCart', id)
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: 'b-toaster-bottom-right',
        appendToast: append
      })
    },

    emptycart (append = false) {
      this.$store.commit('emptyCart')
      this.$bvToast.toast(`${this.$store.getters.toast.text}`, {
        title: 'Увага!',
        autoHideDelay: 500,
        toaster: 'b-toaster-bottom-right',
        appendToast: append
      })
    },

    showCartForm () {
      this.cartForm = true
    },

    closeUserDropdown () {
      this.userDropdownOpen = false
    },
    closeMobileNavbar () {
      this.mobileNavOpen = false
    },
    hide () {
      this.mobileNavOpen = false
    },

    hideReservation () {
      this.reservationOpen = false
    },

    closecart () {
      this.cartOpen = false
    },
    hideCart () {
      this.cartOpen = false
    },
    onScroll () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
        return
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },

    sendOrder (append = false) {
      const orderedProducts = JSON.stringify(this.cart)

      axios
        .post(`https://api.telegram.org/bot1029393497:AAH-v0VHLmNK6cURI38Ro5-Bvxb2ba73xRU/sendMessage?chat_id=-1001498927317&text= замовлення %0A${this.$t('form.name')}: ${this.name}, %0A${this.$t('form.phone')}: ${this.phone}, %0A${this.$t('form.city')}: ${this.city}, %0A${this.$t('form.street')}: ${this.street}, %0A${this.$t('form.house')}: ${this.house}, %0A${this.$t('form.code')}: ${this.code}, %0A${this.$t('form.apartment')}: ${this.apartment}, %0A${this.$t('form.comment')}: ${this.comment}, %0AcartTotalAmount: ${this.cartTotalAmount}, %0A${this.$t('cart.heading')}: ${orderedProducts}, `)
      this.name = this.phone = this.city = this.code = this.apartment = this.comment = this.house = this.street = this.house = null
      this.$store.commit('emptyCart')
      this.success = true
      if (process.client) {
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
      this.$bvToast.toast(`${this.$t('toast.info')}`, {
        title: `${this.$t('toast.title')}`,
        autoHideDelay: 10000,
        variant: 'success',
        toaster: 'b-toaster-top-center',
        appendToast: append
      })
      const self = this
      setTimeout(function () {
        self.cartForm = self.success = false
      }, 10000)
    },

    sendMessage (append = false) {
      axios
        .post(`https://api.telegram.org/bot1029393497:AAH-v0VHLmNK6cURI38Ro5-Bvxb2ba73xRU/sendMessage?chat_id=-1001498927317&text= Бронювання %0AІм'я: ${this.name}, %0AНомер телефону: ${this.phone}, %0AДата: ${this.date}, %0AЧас прибуття: ${this.time}, %0A№ людей: ${this.noOfPeople}`)
      this.name = this.email = this.phone = this.time = this.noOfPeople = null
      this.date = today
      this.success = true
      this.$bvToast.toast(`${this.$t('toast.info')}`, {
        title: `${this.$t('toast.title')}`,
        autoHideDelay: 10000,
        variant: 'success',
        toaster: 'b-toaster-top-center',
        appendToast: append
      })
    }
  }
}
</script>

 <style lang="css">
.language-nav {
  position: absolute;
  bottom: 6.25rem;
  left: 50%;
  transform: translateX(-50%);
}

.language-nav .dropdown-toggle {
  position: relative;
  border: 2px solid #000000;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 2px solid #000000;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  /* padding: 14px 50px; */
  width: 180px;
  height: 48px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
}

.language-nav .dropdown-toggle:hover {
  background: #000000;
  color: #ffffff;
}

.modal-content {
  border-radius: 0;
}

.vdp-datepicker__calendar {
  margin: auto auto 20px auto;
  border: 0 !important;
}

.vdp-datepicker__calendar .cell.selected:hover,
.vdp-datepicker__calendar .cell.day:hover {
  background: #000000 !important;
  color: white;
  border: 1px solid black !important;
}

.vdp-datepicker__calendar .cell.blank:hover,
.vdp-datepicker__calendar .cell.disabled:hover {
  background: transparent !important;
  border: 0 !important;
}

.vdp-datepicker__calendar .cell.selected {
  background: #000000 !important;
  color: white;
}

@media screen and (max-width: 768px) {
  .language-nav {
    position: absolute;
    bottom: 2rem;
  }
}

@media screen and (max-width: 425px) {
  .language-nav {
    left: 45%;
    transform: translateX(-45%);
  }
}

@media screen and (max-width: 375px) {
  .language-nav {
    left: 40%;
    transform: translateX(-40%);
  }
}

@media screen and (max-width: 320px) {
  .language-nav {
    left: 30%;
    transform: translateX(-30%);
  }
}
</style>

<style lang="scss" scoped>
.header.header--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

select {
  text-align: center;
  text-align-last: center;
  /* webkit*/
}
option {
  text-align: left;
  /* reset to left*/
}

select {
  background: transparent;
  border: 1px solid #000000;
  box-sizing: border-box;

  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
  padding: 14px 48px;

  &#time {
    padding: 14px 10px;
    margin: 10px auto;
  }
  &#number-of-people {
    padding: 14px 10px;
    margin: 10px auto;
  }
}

select {
  -webkit-appearance: none;
  -o-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-image: url("~assets/img/select.png");
  background-position: 72% center;
  background-repeat: no-repeat;
  cursor: pointer;
  &.active,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  }
}
select option {
  background-color: $lightColor;
  color: $darkColor;
  text-align: center;
  white-space: pre-line;
  font-weight: 400;
}

input {
  background: transparent;
  border: 1px solid #000000;
  box-sizing: border-box;

  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
  padding: 14px 20px;
  margin: 10px auto;
}

.order {
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;

  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
  padding: 14px 48px;
}

.seeAll button {
  background: transparent;
  border: 1px solid #000000;
  box-sizing: border-box;

  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
  padding: 14px 48px;
}

.close-hamburger,
.close-navbar-hamburger {
  margin-bottom: 50px;
  cursor: pointer;
}

.cart-body {
  h3 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;

    color: $darkColor;
  }
}

.reservation-body {
  h5 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    letter-spacing: 0.05em;

    color: $darkColor;
  }
}

.toggle-quantity {
  box-sizing: border-box;
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  button {
    border: 0;
    background-color: transparent;
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
    margin: auto;
    color: $darkColor;
    text-decoration: none;
  }

  p,
  button {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;

    color: $darkColor;

    margin: auto 2px;
    text-decoration: none;
  }

  p {
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 0 5px;
  }
}

.remove-from-chart {
  span {
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
    margin: auto;
    color: $darkColor;
    text-decoration: none;
  }
}

header {
  background-size: cover;
  background-color: $darkColor;
  width: 100vw;
  min-height: 100px;
  height: 100%;
  max-height: 100px;
  right: 0;
  left: 0px;
  top: 0px;
  position: fixed;
  padding: 20px 50px;
  box-shadow: none;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 2;
}

.nav-link {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: #000000;

  margin-right: 50px;
}

.reservation-btn {
  border: 2px solid $lightColor;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  padding: 14px 50px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: $lightColor;

  margin: auto 60px auto 0;
}

.theHeader-nav-brand img {
  left: 50%;
  position: absolute;

  transform: translateX(-50%);

  min-height: 60px;
  max-height: 60px;
  height: 100%;
}

.theHead-nav-toggle {
  margin: auto 0;
  outline: 0;
  text-decoration: none;

  &.cart {
    display: inline-block;
    margin: auto 0;
    margin-top: 10px;
  }
}

#show-total {
  span {
    padding: 0px 5px;
    background-color: $goldColor;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    position: relative;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none !important;

    color: $darkColor;
    text-align: center;
  }
}

.navbar {
  position: fixed;
  top: 0;
  display: block;

  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);

  padding: 30px 50px;
  background: $lightColor;

  height: 100vh;
  width: 430px;
  left: 0;
  top: 0px;
}

.navbar-right {
  position: fixed;
  top: 0;
  right: 0;

  transition: all 0.3s ease-in-out;
  transform: translateX(100%);

  padding: 30px 50px;
  background: $lightColor;

  overflow-y: scroll;
  scrollbar-width: none;
  height: 100vh;
  width: 430px;
  right: 0;
  top: 0px;
  bottom: 0;

  ::-webkit-scrollbar-track {
    box-shadow: none;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    background-color: $backgroudColor;
  }

  ::-webkit-scrollbar {
    border-radius: 50px;
    width: 0;
    background-color: $backgroudColor;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    box-shadow: none;
    background-color: rgb(149, 150, 150);
  }
}

.btn-hamburger {
  margin: auto 0;
  cursor: pointer;

  img {
    height: 40px;
    width: 40px;
  }
}

.navbar-right-open {
  transform: translateX(0);
}

.navbar-open {
  transform: translateX(0);
}

.close-hamburger {
  display: block;
}

.close-navbar-hamburger {
  display: block;
}

@include mediaSm {
  header {
    background-size: cover;
    background-color: $darkColor;
    width: 100vw;
    min-height: 60px;
    height: 60%;
    max-height: 100px;
    right: 0;
    left: 0px;
    top: 0px;
    position: fixed;
    padding: 20px 40px;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    z-index: 2;
  }

  .btn-hamburger {
    margin: auto 0;
    cursor: pointer;

    img {
      height: 30px;
      width: 30px;
    }
  }

  .theHead-nav-toggle {
    &.cart {
      img {
        height: 30px;
        width: 30px;
      }
    }
  }

  #show-total {
    span {
      padding: 0.5px 5px;
      background-color: $goldColor;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      position: relative;

      font-size: 12px;
      line-height: 15px;

      color: $darkColor;
      text-align: center;
    }
  }

  .nav-link {
    font-size: 18px;
    line-height: 21px;
  }

  .navbar {
    position: fixed;
    top: 0;
    display: block;

    transition: all 0.3s linear;
    transform: translateX(-100%);

    padding: 15px 20px;
    background: $lightColor;

    height: 100vh;
    width: 430px;
    left: 0;
    top: 0px;
    bottom: 0;
  }

  .theHeader-nav-brand img {
    min-height: 50px;
    max-height: 50px;
  }

  .navbar-right {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    transition: all 0.3s ease-in-out;
    transform: translateX(100%);

    padding: 15px 15px 40px 15px;
    background: $lightColor;

    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;

    right: 0;
    width: 100vw;
    bottom: 0;
  }

  .navbar-right-open {
    transform: translateX(0);
  }

  .navbar-open {
    transform: translateX(0);
  }
}

.form-total {
  .cart-total {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;

    color: $darkColor;
  }

  .small-sum,
  .small-value {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: $darkColor;
  }
}

.cart-form {
  label {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: $darkColor;
  }

  input.form-control,
  textarea.form-control {
    background: transparent;
    border: 2px solid $darkColor;
    box-sizing: border-box;
    border-radius: 0;

    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: $darkColor;
    width: 100%;

    margin: 5px auto 10px auto;
  }

  input[type="radio"] {
    cursor: pointer;
  }

  .form-check-label {
    cursor: pointer;
  }

  textarea.form-control {
    height: 100px;
  }

  .send-order {
    margin-top: 40px;
  }
}

.success {
  h5 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    text-align: center;
    text-transform: uppercase;

    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    text-align: center;

    color: #000000;
  }

  .backToHome {
    height: 48px;
    width: 240px;

    margin-top: 100px;
    padding: 13px 0px;

    background: #000000;
    border: 1px solid #000000;
    box-sizing: border-box;

    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }

  .animation-ctn {
    text-align: center;
    margin: 80px auto 120px auto;
    height: 101px;
    width: 101px;
  }

  @-webkit-keyframes checkmark {
    0% {
      stroke-dashoffset: 100px;
    }

    100% {
      stroke-dashoffset: 200px;
    }
  }

  @-ms-keyframes checkmark {
    0% {
      stroke-dashoffset: 100px;
    }

    100% {
      stroke-dashoffset: 200px;
    }
  }

  @keyframes checkmark {
    0% {
      stroke-dashoffset: 100px;
    }

    100% {
      stroke-dashoffset: 0px;
    }
  }

  .inlinesvg .svg svg {
    display: inline;
  }

  .icon--order-success svg polyline {
    -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
    animation: checkmark 0.25s ease-in-out 0.7s backwards;
  }
}
</style>
