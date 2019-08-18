<template>
  <nav>
    <v-toolbar
      class="theHeader-navbar"
      clipped-left
      app
      dark
      height="100px"
    >
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="border-0 theHead-nav-toggle menu my-auto"
      >
        <b-img-lazy
          src="~/assets/img/menu.svg"
          alt="menu icon"
        >
        </b-img-lazy>
      </v-toolbar-side-icon>

      <v-toolbar-title
        class="text-uppercase mx-auto theHeader-nav-brand"
        centered
      >
        <nuxt-link :to="localePath({name:'barbaresco'},$i18n.locale)">
          <b-img-lazy
            class=""
            src="~/assets/img/logo-barbaresco.svg"
            alt="logo barbaresco"
          >
          </b-img-lazy>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="drawer3 = !drawer3"
        fixed
        right
        class="btn reservation-btn reservation my-auto"
      >{{$t('links.reservation')}}</v-btn>
      <v-toolbar-side-icon
        @click="drawer2 = !drawer2"
        fixed
        right
        class="border-0 theHead-nav-toggle cart my-auto"
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
      </v-toolbar-side-icon>

    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'index'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.home')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.menu')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-delivery'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.delivery')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          to="#"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.reserveAPlace')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-about-us'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.aboutUs')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          to="#"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.vacancy')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-contacts'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.contact')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer2"
      clipped
      app
      right
    >

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'index'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.home')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.menu')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-delivery'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.delivery')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          to="#"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.reserveAPlace')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-about-us'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.aboutUs')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          to="#"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.vacancy')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-contacts'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.contact')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer3"
      clipped
      app
      right
    >

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'index'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.home')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.menu')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-delivery'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.delivery')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          router
          to="#"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.reserveAPlace')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-about-us'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.aboutUs')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          to="#"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.vacancy')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          router
          :to="localePath({name: 'barbaresco-contacts'},$i18n.locale)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{$t('links.contact')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {

  data () {
    return {
      drawer: false,
      drawer2: false,
      drawer3: false,
      cartSize: 0

    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.theHeader-navbar {
  background-color: $darkColor;
  width: 100%;
}

.v-navigation-drawer {
  z-index: 1001;
}

.reservation-btn {
  border: 1px solid $lightColor;
  border-radius: 0;
  box-sizing: border-box;
  padding: 8px 30px;
  background-color: transparent;

  font-family: $primaryFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;

  margin-right: 130px;

  color: $lightColor;
}

.theHeader-nav-brand {
  left: 35%;
  transform: translateX(50%);
  position: absolute;
  margin: auto;
}

.theHead-nav-toggle {
  outline: 0;
  text-decoration: none;
  width: 60px;
  height: 60px;

  &.menu {
    margin-left: 40px;
  }

  &.cart {
    margin-right: 40px;
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
    z-index: 3;
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    text-decoration: none !important;

    top: 20px;
    right: 20px;

    color: $lightColor;
    text-align: center;
  }
}
</style>

