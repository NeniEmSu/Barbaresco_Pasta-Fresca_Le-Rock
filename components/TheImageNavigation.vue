<template>
  <div id="image-Navigation">
    <section>
      <div class="grid">

        <nuxt-link
          :to="localePath({name: 'index'},$i18n.locale)"
          exact
        >

          <figure class="saddleEffect">
            <img
              src="~assets/img/navHome.png"
              alt="img02"
            >
            <figcaption>
              <h2>{{$t('links.home')}} </h2>
              <span></span>
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          to="barbaresco"
          exact
        >
          <figure class="saddleEffect">
            <img
              src="~assets/img/navMenu.png"
              alt="img14"
            >
            <figcaption>
              <h2>{{$t('links.menu')}}</h2>
              <span></span>
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          to="barbaresco/delivery"
          exact
        >

          <figure class="saddleEffect">
            <img
              src="~assets/img/navDelivery.png"
              alt="img02"
            >
            <figcaption>
              <h2>{{$t('links.delivery')}}</h2>
              <span></span>
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          to="barbaresco/about-us"
          exact
        >

          <figure class="saddleEffect">
            <img
              src="~assets/img/navAboutUs.png"
              alt="img02"
            >
            <figcaption>
              <h2>{{$t('links.aboutUs')}}</h2>
              <span></span>

            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          to="barbaresco/atmosphere"
          exact
        >
          <figure class="saddleEffect">
            <img
              src="~assets/img/navAboutUs.png"
              alt="img14"
            >
            <figcaption>
              <h2>{{$t('links.atmosphere')}}</h2>
              <span></span>
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          to="barbaresco/contacts"
          exact
        >

          <figure class="saddleEffect">
            <img
              src="~assets/img/navContact.png"
              alt="img02"
            >
            <figcaption>
              <h2>{{$t('links.contact')}}</h2>
              <span></span>
            </figcaption>
          </figure>
        </nuxt-link>
      </div>

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
.grid {
}

.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  width: calc(100vw / 3);

  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  width: calc(100vw / 3);
}

.grid figure figcaption {
  color: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid figure figcaption > span {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  background: #000000;
  opacity: 0.35;
}

.grid figure h2 {
  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 0.5;
}

.grid figure h2 {
  margin: 0;
}

figure.saddleEffect figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(180deg, #000000 0%, #e0a671 100%);
  opacity: 0;
  content: "";

  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.saddleEffect h2 {
  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 0.5;

  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;

  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.saddleEffect figcaption::before {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.saddleEffect:hover h2,
.nuxt-link-exact-active figure.saddleEffect h2 {
  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 1;

  -webkit-transform: translate3d(0, -80%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -80%, 0) translate3d(0, -40px, 0);
}

figure.saddleEffect:hover figcaption::before,
.nuxt-link-exact-active figure.saddleEffect figcaption::before {
  opacity: 0.55;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

section {
  overflow: hidden;
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
