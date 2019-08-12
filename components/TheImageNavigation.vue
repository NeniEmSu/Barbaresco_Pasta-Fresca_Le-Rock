<template>
  <div id="image-Navigation">
    <div class="row">
      <nuxt-link
        to="#"
        class="navHome"
      >
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navHome.png"
          alt="nav home images"
        ></b-img-lazy>
        <div class="centered">Головна</div>

      </nuxt-link>
      <nuxt-link
        to="#"
        class="navMenu"
      >
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navMenu.png"
          alt="nav Menu images"
        ></b-img-lazy>
        <div class="centered">Меню</div>
      </nuxt-link>
      <nuxt-link
        to="#"
        class="navOrder"
      >
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navOrder.png"
          alt="nav Order images"
        ></b-img-lazy>
        <div class="centered">Доставка їжі</div>
      </nuxt-link>
      <nuxt-link
        to="#"
        class="navReservation"
      >
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navReservation.png"
          alt="nav Reservation images"
        ></b-img-lazy>
        <div class="centered">Резервація</div>
      </nuxt-link>
    </div>
    <div class="row">
      <nuxt-link
        to="#"
        class="navAboutUs"
      >
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navAboutUs.png"
          alt="nav AboutUs images"
        ></b-img-lazy>
        <div class="centered">Резервація</div>
      </nuxt-link>
      <nuxt-link to="#">
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navOurs.png"
          alt="nav Ours images"
        ></b-img-lazy>
      </nuxt-link>
      <nuxt-link to="#">
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navContact.png"
          alt="nav Contact images"
        ></b-img-lazy>
      </nuxt-link>
      <nuxt-link to="#">
        <b-img-lazy
          class="col-3p-0"
          src="~/assets/img/navAtmosphere.png"
          alt="nav Atmosphere images"
        ></b-img-lazy>
      </nuxt-link>
    </div>
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
a {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 33px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 0.5;
  transition: 500ms ease-in-out;

  &:hover {
    opacity: 1;
    color: #ffffff;
  }
}

.navHome {
  background-image: url("~assets/img/navHome.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
}

.navMenu {
  background-image: url("~assets/img/navMenu.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
}

.navOrder {
  background-image: url("~assets/img/navOrder.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
}

.navReservation {
  background-image: url("~assets/img/navReservation.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
}

.navAboutUs {
  background-image: url("~assets/img/navAboutUs.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
