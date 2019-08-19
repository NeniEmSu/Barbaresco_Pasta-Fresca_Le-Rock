<template>
  <div id="theHeader">
    <header
      class="header"
      :class="{ 'header--hidden': !showHeader }"
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
            src="~/assets/img/logo-barbaresco.svg"
            alt="logo barbaresco"
          >
          </b-img-lazy>
        </b-navbar-brand>

        <div
          target="nav-collapse-2"
          class="border-0 theHead-nav-toggle d-none d-sm-none d-md-none d-lg-inline my-auto reservation"
        >

          <button
            @click="mobileNavOpen = !mobileNavOpen"
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
            class="close-hamburger text-left text-black p-2"
            style="font-size: 30px; cursor: pointer; color: black;"
            @click.stop="hide"
          >&times;</div>
          <b-navbar-nav>
            <b-nav-item :to="localePath({name: 'index'},$i18n.locale)">{{$t('links.home')}}</b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco'},$i18n.locale)">{{$t('links.menu')}}</b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco-delivery'},$i18n.locale)">{{$t('links.delivery')}}</b-nav-item>
            <b-nav-item to="#">{{$t('links.reserveAPlace')}}</b-nav-item>
            <b-nav-item :to="localePath({name: 'barbaresco-about-us'},$i18n.locale)">{{$t('links.aboutUs')}}</b-nav-item>
            <b-nav-item to="#">{{$t('links.vacancy')}}</b-nav-item>
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
          class="navbar-right"
          :class="{'navbar-open': cartOpen}"
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
                      <div class="cost col-12 m-auto ">
                        <p
                          id="cart-item-price"
                          class="cart-item-price text-right py-2 card-text"
                        >{{50 | currency}}</p>
                      </div>
                      <div class="remove-from-chart col-12 m-auto text-right">
                        <span
                          @click="deleteFromCart(product.id)"
                          class="close text-right"
                        >&times;
                        </span>
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

      </div>
    </header>
  </div>
</template>

<script>
import clickOutside from "@/directives/click-outside";
import handleScroll from "@/directives/handle-scroll";
import AppLinks from "~/components/appLinks"
export default {
  components: {},
  directives: {
    clickOutside,
    handleScroll
  },
  data () {
    return {
      userDropdownOpen: false,
      mobileNavOpen: false,
      cartOpen: false,
      showHeader: true,
      lastScrollPosition: 0,
      cartSize: 0
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

<style lang="scss" scoped>
.header.header--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
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
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 50px;
  width: 100%;

  display: flex;
  justify-content: space-between;

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
  height: 100px;
  left: 0px;
  top: 0px;
  position: fixed;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
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
}

.theHeader-nav-brand img {
  left: 50%;

  transform: translateX(-120%);
  margin: auto;

  min-height: 60px;
  max-height: 60px;
  height: 100%;
  margin-top: 20px;
}

.theHead-nav-toggle {
  margin-top: 20px;
  outline: 0;
  text-decoration: none;

  &.cart {
    margin-top: 32px;
    margin-right: 60px;
    margin-left: 40px;
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
  display: none;
  position: absolute;
  padding: 30px 10px 10px 50px;
  transition: all 6s ease;
  background: $lightColor;
  width: 430px;
  left: 0;
  top: 0px;
}

.navbar-right {
  display: none;
  position: absolute;
  padding: 30px 50px;
  transition: all 6s ease;
  background: $lightColor;
  width: 430px;
  right: 0;
  top: 0px;
}

.btn-hamburger {
  margin: 20px auto auto 50px;
}

.drawer-toggle {
  font-size: 18px;
}

.navbar-open {
  display: block;
  transition: all 6s ease;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);
  border-radius: 0;
  height: 100vh;
}

.close-hamburger {
  display: block;
}
</style>


