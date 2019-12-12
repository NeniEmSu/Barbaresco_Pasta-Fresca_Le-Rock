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
          :to="localePath({name: 'le-rock'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/navMenu.jpg"
              alt="img14"
            />
            <figcaption>
              <h1>{{ $t('links.menu') }}</h1>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'le-rock-delivery'},$i18n.locale)"
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
          :to="localePath({name: 'le-rock-about-us'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/navAboutUs.jpg"
              alt="img02"
            />
            <figcaption>
              <h2>{{ $t('links.aboutUs') }}</h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'le-rock-atmosphere'},$i18n.locale)"
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
          :to="localePath({name: 'le-rock-contacts'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <b-img-lazy
              src="~assets/img/navContact.jpg"
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
@import "~assets/scss/TheImageNavigation.scss";
</style>
