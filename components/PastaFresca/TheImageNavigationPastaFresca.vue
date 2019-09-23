<template>
  <div
    id="image-Navigation"
    class="image-Navigation mt-md-0"
  >
    <section>
      <div class="grid">
        <nuxt-link
          :to="localePath({name: 'index'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/navHome.jpg"
              :alt="$t('links.home')"
            />
            <figcaption>
              <h2>{{ $t('links.home') }} </h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'pasta-fresca'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/pasta-fresca-menu.jpg"
              alt="img14"
            />
            <figcaption>
              <h1>{{ $t('links.menu') }}</h1>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'pasta-fresca-delivery'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/navDelivery.jpg"
              alt="img02"
            />
            <figcaption>
              <h2>{{ $t('links.delivery') }}</h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'pasta-fresca-about-us'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/pasta-fresca-about-us.jpg"
              alt="img02"
            />
            <figcaption>
              <h2>{{ $t('links.aboutUs') }}</h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'pasta-fresca-atmosphere'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/navAtmosphere.jpg"
              alt="img14"
            />
            <figcaption>
              <h2>{{ $t('links.atmosphere') }}</h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'pasta-fresca-contacts'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/pasta-fresca-nav-contact.jpg"
              alt="img02"
            />
            <figcaption>
              <h2>{{ $t('links.contact') }}</h2>
              <span />
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
  }
}
</script>

<style lang="scss" scoped>
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
  height: 150px;
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
  z-index: 9;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  background: #000000;
  opacity: 0.35;
}

.grid figure h2,
.grid figure h1 {
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

.grid figure h2,
.grid figure h1 {
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

figure.saddleEffect h2,
figure.saddleEffect h1 {
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
.nuxt-link-exact-active figure.saddleEffect h2,
figure.saddleEffect:hover h1,
.nuxt-link-exact-active figure.saddleEffect h1 {
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
  transform: translate3d(0, -60%, 0) translate3d(0, -40px, 0);
}

figure.saddleEffect:hover figcaption::before,
.nuxt-link-exact-active figure.saddleEffect figcaption::before {
  background: linear-gradient(180deg, #000000 0%, #e0a671 100%);
  opacity: 0.55;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

section {
  overflow: hidden;
}

@media (max-width: 1024px) {
  .grid figure {
    height: 100px;
  }

  figure.saddleEffect h2,
  figure.saddleEffect h1 {
    font-family: $primaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #ffffff;

    opacity: 0.8;

    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
  }

  figure.saddleEffect:hover h2,
  .nuxt-link-exact-active figure.saddleEffect h2,
  figure.saddleEffect:hover h1,
  .nuxt-link-exact-active figure.saddleEffect h1 {
    font-family: $primaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #ffffff;

    opacity: 1;

    position: absolute;

    -webkit-transform: translate3d(0, 90%, 0) translate3d(0, -50px, 0);
    transform: translate3d(0, 90%, 0) translate3d(0, -30px, 0);
  }

  .grid figure figcaption > span {
    z-index: 9;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    background: #000000;
    opacity: 0.25;
  }
}

@media (max-width: 767px) {
  .image-Navigation {
    margin-top: 99px;
  }

  .grid figure h2,
  .grid figure h1 {
    opacity: 1 !important;
  }

  .grid figure {
    max-height: 66px;
  }

  figure.saddleEffect figcaption::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, $blackColor 0%, $blackColor 100%);

    opacity: 0.35;
    content: "";

    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figure.saddleEffect h2,
  figure.saddleEffect h1 {
    font-family: $primaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #ffffff;

    opacity: 1;

    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
  }

  figure.saddleEffect:hover h2,
  .nuxt-link-exact-active figure.saddleEffect h2,
  figure.saddleEffect:hover h1,
  .nuxt-link-exact-active figure.saddleEffect h1 {
    font-family: $primaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #ffffff;

    opacity: 1;

    position: absolute;

    -webkit-transform: translate3d(0, 90%, 0) translate3d(0, -50px, 0);
    transform: translate3d(0, 90%, 0) translate3d(0, -30px, 0);
  }

  .grid figure figcaption > span {
    z-index: 9;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    background: #000000;
    opacity: 0;
  }
}

@media (max-width: 750px) {
  .grid figure {
    position: relative;
    float: left;
    overflow: hidden;
    width: calc(100vw / 2);

    text-align: center;
    cursor: pointer;
  }

  .grid figure img {
    position: relative;
    display: block;
    width: calc(100vw / 2);
  }
}
</style>
