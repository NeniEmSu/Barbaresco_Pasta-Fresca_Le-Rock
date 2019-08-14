<template>
  <div id="image-Navigation">
    <section>
      <nuxt-link
        to="/"
        class="column navHome"
      >
        <div class="centered">{{$t('links.home')}}</div>

      </nuxt-link>

      <nuxt-link
        :to="'/' + $i18n.locale + '/barbaresco'"
        class="column navMenu"
      >
        <div class="centered">{{$t('links.menu')}}</div>

      </nuxt-link>

      <nuxt-link
        :to="'/' + $i18n.locale + '/barbaresco/delivery'"
        class="column navDelivery"
      >
        <div class="centered">{{$t('links.delivery')}}</div>

      </nuxt-link>

      <nuxt-link
        :to="'/' + $i18n.locale + '/barbaresco/about-us'"
        class="column navAboutUs"
      >
        <div class="centered">{{$t('links.aboutUs')}}</div>
      </nuxt-link>

      <nuxt-link
        :to="'/' + $i18n.locale + '/barbaresco/atmosphere'"
        class="column navAtmosphere"
      >
        <div class="centered">{{$t('links.atmosphere')}}</div>
      </nuxt-link>

      <nuxt-link
        :to="'/' + $i18n.locale + '/barbaresco/contacts'"
        class="column navContact"
      >
        <div class="centered">{{$t('links.contact')}}</div>
      </nuxt-link>

    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
#image-Navigation a {
  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 33px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: $lightColor;

  opacity: 0.5;
  transition: 500ms ease-in-out;

  &:hover {
    opacity: 1;
    .centered {
      top: 50%;
    }
  }
}

a.nuxt-link-exact-active {
  .centered {
    top: 50%;
  }
}

.centered {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a.nuxt-link-exact-active {
  opacity: 0.9 !important;
}

section {
  overflow: hidden;
}

.column {
  float: left;
  box-sizing: border-box;
  width: calc(100% / 3);
  height: 100%;
  min-height: 150px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.navHome {
  background-image: url("~assets/img/navHome.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.navMenu {
  background-image: url("~assets/img/navMenu.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.navDelivery {
  background-image: url("~assets/img/navDelivery.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.navReservation {
  background-image: url("~assets/img/navReservation.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.navAboutUs {
  background-image: url("~assets/img/navAboutUs.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.navAtmosphere {
  background-image: url("~assets/img/navAtmosphere.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.navContact {
  background-image: url("~assets/img/navContact.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

@media (max-width: 750px) {
  .column {
    width: calc(100% / 2);
  }
}

@media (max-width: 400px) {
  .column {
    width: calc(100% / 2);
  }
}

@media (max-width: 375px) {
  .column {
    width: calc(100% / 2);
  }
}
</style>
