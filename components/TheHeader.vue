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
            class="close-navbar-hamburger text-left text-black p-2"
            style="font-size: 30px; cursor: pointer; color: black;"
            @click.stop="hide"
          >&times;</div>
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
              <p class="my-4">Наразі вакансій у нас немає!</p>
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
          class="navbar-right "
          :class="{'navbar-right-open': cartOpen}"
        >
          <div
            class="close-hamburger text-right text-black p-2"
            style="font-size: 30px; cursor: pointer; color: black;"
            @click.stop="hideCart"
          >&times;</div>

          <div>
            <h3>Замовлення</h3>
            <div
              class="cart-item"
              v-for="n in 3"
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
              <hr style="border: 1px solid black;">
            </div>

            <div>
              <hr>
              <div class="row">
                <div class="col-4">
                  <small class="col-12">Сума:</small>
                  <strong class="col-12">155,00</strong>
                </div>
                <div class="col-8 mx-auto text-right">
                  <button class="order">Замовити</button>
                </div>
              </div>
            </div>

            <div class="seeAll mt-5 text-center">
              <button>Очистити все</button>
            </div>
          </div>
        </div>

        <div
          class="navbar-right"
          :class="{'navbar-right-open': reservationOpen}"
        >
          <div
            class="close-hamburger text-right text-black p-2"
            style="font-size: 30px; cursor: pointer; color: black;"
            @click.stop="hideReservation"
          >&times;</div>

          <div>
            <h5>Оберіть час та кількість осіб</h5>
            <form action="post">
              <select
                name="time"
                id="time"
                class="w-100"
                v-model="time"
              >
                <option value="null">Час</option>
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
                <option value="null">Кількість осіб</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <h5>Обрати дату</h5>
              <div>
                <no-ssr>
                  <datepicker
                    v-model="date"
                    :value="date"
                    name="date"
                    :inline="true"
                    :disabled-dates="disabledDates"
                  ></datepicker>
                </no-ssr>

              </div>

              <input
                v-model="name"
                type="text"
                placeholder="Ім’я"
                class="w-100"
              >

              <input
                v-model="phone"
                type="text"
                placeholder="Телефон"
                class="w-100"
              >
              <div class="form-group mx-auto text-center">

                <button class="order mt-2">Замовити</button>

              </div>

            </form>

          </div>
        </div>

      </div>
    </header>
  </div>
</template>

<script>
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
    }
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
  margin: auto;
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
    padding: 0.5px 5px;
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
    line-height: 20px;
    text-decoration: none !important;

    color: $lightColor;
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
  height: 100vh;
  width: 430px;
  right: 0;
  top: 0px;
  bottom: 0;
}

.btn-hamburger {
  margin: auto 0;
  cursor: pointer;
}

.drawer-toggle {
  font-size: 18px;
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

@include mediaXSm {
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
    padding: 20px 20px;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    z-index: 1000;
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
    width: 100vw;
    left: 0;
    top: 0px;
    bottom: 0;
  }

  .navbar-right {
    position: fixed;
    top: 0;
    right: 0;

    transition: all 0.3s ease-in-out;
    transform: translateX(100%);

    padding: 15px 20px;
    background: $lightColor;

    overflow-y: scroll;
    height: 100vh;
    width: 430px;
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

.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
  background: rgba(240, 157, 81, 0.5);
  z-index: 2;
  visibility: hidden;
}
.cart-body {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  z-index: 3;
  background: rgb(231, 226, 221);
  padding: 1.5rem;
  transition: all 0.3s linear;
  transform: translateX(100%);
}
.showCart {
  transform: translateX(0);
}
.transparentBcg {
  visibility: visible;
}
@media screen and (min-width: 768px) {
  .cart-body {
    width: 30vw;
    min-width: 450px;
  }
}

.close-cart {
  font-size: 1.7rem;
  cursor: pointer;
}
.cart-body h2 {
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
}
</style>


