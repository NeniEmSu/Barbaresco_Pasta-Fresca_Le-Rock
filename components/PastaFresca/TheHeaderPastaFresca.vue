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
          :to="localePath({name:'pasta-fresca'},$i18n.locale)"
        >
          <b-img-lazy
            class=""
            src="~/assets/img/pasta-fresca-logo.svg"
            alt="logo pasta-fresca"
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
            <b-nav-item
              class="fromleft"
              :to="localePath({name: 'index'},$i18n.locale)"
            >
              {{ $t('links.home') }}
            </b-nav-item>
            <b-nav-item
              class="fromleft"
              :to="localePath({name: 'pasta-fresca'},$i18n.locale)"
            >
              {{ $t('links.menu') }}
            </b-nav-item>
            <b-nav-item
              class="fromleft"
              :to="localePath({name: 'pasta-fresca-delivery'},$i18n.locale)"
            >
              {{ $t('links.delivery') }}
            </b-nav-item>
            <b-nav-item
              class="fromleft"
              tag="button"
              @click.stop="reservationOpen = !reservationOpen"
            >
              {{ $t('links.reserveAPlace') }}
            </b-nav-item>
            <b-nav-item
              class="fromleft"
              :to="localePath({name: 'pasta-fresca-about-us'},$i18n.locale)"
            >
              {{ $t('links.aboutUs') }}
            </b-nav-item>
            <b-nav-item
              class="fromleft"
              :to="localePath({name: 'pasta-fresca-kitchen'},$i18n.locale)"
            >
              {{ $t('links.kitchen') }}
            </b-nav-item>
            <b-nav-item
              v-b-modal.modal-1
              class="fromleft"
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
            <b-nav-item
              class="fromleft"
              :to="localePath({name: 'pasta-fresca-contacts'},$i18n.locale)"
            >
              {{ $t('links.contact') }}
            </b-nav-item>
            <div
              class="mx-auto language-nav"
              style="margin-top: 50%;"
            >
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
                    style="border-radius: 50%;"
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
                      :disabled="!cartSize"
                      :to="localePath({name: 'pasta-fresca-cart'},$i18n.locale)"
                      class="order d-none d-lg-block"
                    >
                      {{ $t('cart.order') }}
                    </b-button>
                    <b-button
                      :disabled="!cartSize"
                      class="order d-block d-lg-none"
                      @click="showCartForm()"
                    >
                      {{ $t('cart.order') }}
                    </b-button>
                  </div>
                </div>
              </div>

              <div class="seeAll mt-5 mx-auto text-center">
                <button
                  :disabled="!cartSize"
                  @click="emptycart()"
                >
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
                  <div class="col-6 pr-0">
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
                  <div class="col-6 pr-0">
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
                  <div class="col-4 pr-0">
                    <label for="house">{{ $t('form.house') }}
                      <input
                        v-model="house"
                        class="form-control"
                        type="text"
                        name="house"
                        placeholder="..."
                      > </label>
                  </div>
                  <div class="col-4 pr-0">
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
                    :disabled="!cartSize"
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
              <b-button class="backToHome" :to="localePath({name: 'pasta-fresca'},$i18n.locale)" @click="success = false">
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
                    v-model="date"
                    :value="date"
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
// require('@/assets/css/TheHeader.css')

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
      this.cartForm = false
      this.success = false
    },

    hideCart () {
      this.cartOpen = false
      this.cartForm = false
      this.success = false
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

    sendOrder () {
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
        toaster: 'b-toaster-top-center'
      })
      const self = this
      setTimeout(function () {
        self.cartForm = self.success = false
      }, 10000)
    },

    sendMessage () {
      axios
        .post(`https://api.telegram.org/bot1029393497:AAH-v0VHLmNK6cURI38Ro5-Bvxb2ba73xRU/sendMessage?chat_id=-1001498927317&text= Бронювання %0AІм'я: ${this.name}, %0AНомер телефону: ${this.phone}, %0AДата: ${this.date}, %0AЧас прибуття: ${this.time}, %0A№ людей: ${this.noOfPeople}`)
      this.name = this.email = this.phone = this.time = this.noOfPeople = null
      this.date = today
      this.success = true
      this.$bvToast.toast(`${this.$t('toast.info')}`, {
        title: `${this.$t('toast.title')}`,
        autoHideDelay: 10000,
        variant: 'success',
        toaster: 'b-toaster-top-center'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/TheHeader.css";
@import "~assets/scss/TheHeader.scss";

.navbar-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.nav-item {
  height: auto;
  opacity: 0.8;
}

.nav-item:after {
  display: block;
  content: "";
  border-bottom: solid 2px $darkColor;
  transform: scaleX(0);
  transition: transform 300ms ease-in-out;
}

.nav-item:hover:after {
  transform: scaleX(1);
}

.nav-item.fromleft:after {
  transform-origin: 0 50% !important;
}
</style>
