<i18n>
{
  "uk": {
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
      "clear": "Очистити все"
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
        "contact": "Контакти"
      },
      "ukrainian": "Українська",
      "english": "English",
      "russian": "Русский"
  },
  "en": {
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
      "clear": "Clear everything"
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
        "contact": "Contacts"
      },
      "ukrainian": "Українська",
      "english": "English",
      "russian": "Русский"

  },
  "ru": {
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
      "clear": "Очистить все"
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
        "contact": "Контакты"
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
      class="header"
      id="header"
      v-click-outside="closeMobileNavbar"
      v-handle-scroll="closeMobileNavbar"
    >
      <div class="row">

        <div
          class="btn-hamburger"
          @click="mobileNavOpen = !mobileNavOpen"
        >
          <img
            src="~/assets/img/menu.svg"
            alt="menu Icon"
          />
        </div>

        <b-navbar-brand
          class=" theHeader-nav-brand mx-auto"
          :to="localePath({name:'barbaresco'},$i18n.locale)"
        >
          <b-img-lazy
            class=""
            src="~/assets/img/barbaresco-logo.svg"
            alt="logo barbaresco"
          >
          </b-img-lazy>
        </b-navbar-brand>

        <div
          target="nav-collapse-2"
          class="border-0 theHead-nav-toggle d-none d-sm-none d-md-none d-lg-inline my-auto reservation"
        >

          <button
            @click="reservationOpen = !reservationOpen"
            class="btn reservation-btn"
            variant="outline-primary"
          >{{$t('links.reservation')}}</button>
        </div>

        <div
          class="border-0 theHead-nav-toggle cart"
          @click="cartOpen = !cartOpen"
          style="cursor: pointer;"
        >
          <b-img-lazy
            src="~/assets/img/Корзина.png"
            alt="Cart Icon"
          >
          </b-img-lazy>

          <div
            id="show-total"
            class="text-center mt-n3 ml-n3"
          >
            <span
              style="text-decoration: none;"
              id="item-count"
              class="text-center"
            >{{cartSize}}</span>
          </div>

        </div>

        <nav
          class="navbar"
          :class="{'navbar-open': mobileNavOpen}"
        >
          <div
            class="close-navbar-hamburger text-left text-black "
            @click.stop="hide"
          ><img
              src="~/assets/img/exit.svg"
              alt="close icon"
            ></div>
          <b-navbar-nav>
            <b-nav-item :to="localePath({name: 'index'},$i18n.locale)">{{$t('links.home')}}</b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco'},$i18n.locale)">{{$t('links.menu')}}</b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco-delivery'},$i18n.locale)">{{$t('links.delivery')}}</b-nav-item>
            <b-nav-item
              tag="button"
              @click.stop="reservationOpen = !reservationOpen"
            >{{$t('links.reserveAPlace')}}</b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco-about-us'},$i18n.locale)">{{$t('links.aboutUs')}}</b-nav-item>
            <b-nav-item
              tag="button"
              v-b-modal.modal-1
            >{{$t('links.vacancy')}}</b-nav-item>
            <b-modal
              hide-footer
              id="modal-1"
              :title="$t('links.vacancy')"
            >

              <b>{{$t('vacancyNotice')}}</b>
            </b-modal>
            <b-nav-item :to="localePath({name: 'barbaresco-contacts'},$i18n.locale)">{{$t('links.contact')}}</b-nav-item>
            <b-nav-item
              v-if="$i18n.locale !== 'en'"
              :to="switchLocalePath('en')"
            >{{$t('english')}}</b-nav-item>
            <b-nav-item
              v-if="$i18n.locale !== 'uk'"
              :to="switchLocalePath('uk')"
            >{{$t('ukrainian')}}</b-nav-item>
            <b-nav-item
              v-if="$i18n.locale !== 'ru'"
              :to="switchLocalePath('ru')"
            >{{$t('russian')}}</b-nav-item>

          </b-navbar-nav>

        </nav>

        <div
          class="navbar-right cart-body"
          :class="{'navbar-right-open': cartOpen}"
        >
          <div
            class="close-hamburger text-right "
            @click.stop="hideCart"
          ><img
              src="~/assets/img/exit.svg"
              alt="close icon"
            ></div>

          <font v-if="!cartSize">{{$t('cart.emptyCart')}}</font>

          <div>
            <h3 v-if="cartSize">{{$t('cart.heading')}}</h3>
            <div
              class="cart-item"
              v-for="n in cartSize"
              :key="n"
            >
              <div class="row my-auto">
                <img
                  style="border-radius: 50%;   "
                  src="~/assets/img/barbarescoBurger.png"
                  alt=""
                  class="col-2 m-auto"
                >
                <div class="col-6 p-0">
                  <div class="col-12 p-0 m-auto">
                    <div class="row m-auto">
                      <h6
                        id="cart-item-title"
                        class="col-12 m-auto text-center py-2 crop"
                      >Бургер з куркою</h6>
                      <div class="toggle-quantity col-12 m-auto ">
                        <button @click="removeFromCart(product.id)">
                          &minus;
                        </button>
                        <p>1</p>
                        <button @click="addToCart(product.id)">
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
                          @click="deleteFromCart(product.id)"
                          class="close text-right"
                        >&times;
                        </span>
                      </div>

                      <div class="cost col-12 m-auto ">
                        <p
                          id="cart-item-price"
                          class="cart-item-price text-right py-2 card-text"
                        >{{50 | currency}}</p>
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
                  <small class="col-12">{{$t('cart.total')}}:</small>
                  <strong
                    v-if="cartSize === 3"
                    class="col-12"
                  >155,00</strong>
                  <strong
                    v-else
                    class="col-12"
                  >0,00</strong>
                </div>
                <div class="col-8 mx-auto text-right">
                  <b-button
                    :to="localePath({name: 'barbaresco-cart'},$i18n.locale)"
                    class="order"
                  >{{$t('cart.order')}}</b-button>
                </div>
              </div>
            </div>

            <div class="seeAll mt-5 text-center">
              <button @click="cartSize = 0">{{$t('cart.clear')}}</button>
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
          ><img
              src="~/assets/img/exit.svg"
              alt="close icon"
            ></div>

          <div>
            <h5>{{$t('reservation.heading')}}</h5>
            <form @submit.prevent="sendMessage">
              <select
                name="time"
                id="time"
                class="w-100"
                v-model="time"
              >
                <option value="null">{{$t('reservation.time')}}</option>
                <option value="morning">Ранок</option>
                <option value="breakfast">Сніданок</option>
                <option value="afternoon">Вдень</option>
                <option value="lunch">Обід</option>
                <option value="night">Ніч</option>
                <option value="dinner">Вечеря</option>
              </select>

              <select
                v-model="noOfPeople"
                name="number-of-people"
                id="number-of-people"
                class="w-100"
              >
                <option value="null">{{$t('reservation.noOfPeople')}}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <h5>{{$t('reservation.dateTitle')}}</h5>
              <div>
                <client-only>
                  <datepicker
                    v-model="date"
                    :value="date"
                    name="date"
                    :inline="true"
                    :disabled-dates="disabledDates"
                  ></datepicker>
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
                  class="order mt-2"
                  type="submit"
                  name="submit"
                  id="submit"
                >{{$t('reservation.order')}}</button>

              </div>

            </form>

          </div>
        </div>

      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios"
import clickOutside from "@/directives/click-outside";
import handleScroll from "@/directives/handle-scroll";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

var currentDate = new Date();
var state = {
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
    }],

  }
}
export default {
  components: {

  },
  directives: {
    clickOutside,
    handleScroll,

  },
  data () {
    return {
      success: false,
      userDropdownOpen: false,
      mobileNavOpen: false,
      cartOpen: false,
      reservationOpen: false,
      showHeader: true,
      lastScrollPosition: 0,
      cartSize: 3,
      date: today,
      phone: null,
      name: null,
      time: null,
      noOfPeople: null,
      disabledDates: state.disabledDates


    };
  },
  computed: {},
  methods: {
    closeUserDropdown () {
      this.userDropdownOpen = false;
    },
    closeMobileNavbar () {
      this.mobileNavOpen = false;
    },
    hide () {
      this.mobileNavOpen = false;
    },

    hideReservation () {
      this.reservationOpen = false;
    },

    closecart () {
      this.cartOpen = false;
    },
    hideCart () {
      this.cartOpen = false;
    },
    onScroll () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
        return;
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },

    sendMessage () {
      axios
        .post(`https://api.telegram.org/bot971666849:AAEPhgDVYttaZZxm35uC5IFU-YO3MdH8nh0/sendMessage?chat_id=-1001231729418&text=Name: ${this.name}, Number: ${this.phone}, Date: ${this.date}, Time: ${this.time}, No of People: ${this.noOfPeople}`)
      this.name = this.email = this.phone = this.time = this.noOfPeople = null;
      this.date = today;
      this.success = true;
    },
  },
  mounted () {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.onScroll);
  },
  watch: {
    $route () {
      this.mobileNavOpen = false;
    }
  }
};
</script>

<style lang="css">
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
}

.cart-body {
  h3 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;

    color: $blackColor;
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

    color: $blackColor;
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
  z-index: 1000;
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
    z-index: 1000;
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
</style>


