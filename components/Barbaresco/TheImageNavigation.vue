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
            <!-- <img
              src="~assets/img/navHome.jpg"
              :alt="$t('links.home')"
            > -->
            <div class="imageHolder home" />
            <figcaption>
              <h2>{{ $t('links.home') }} </h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'barbaresco'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <!-- <img
              src="~assets/img/navMenu.jpg"
              alt="img14"
            > -->
            <div class="imageHolder menu" />
            <figcaption>
              <h1>{{ $t('links.menu') }}</h1>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'barbaresco-delivery'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <!-- <img
              src="~assets/img/navDelivery.jpg"
              alt="img02"
            >
             -->
            <div class="imageHolder food-delivery" />
            <figcaption>
              <h2>{{ $t('links.delivery') }}</h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'barbaresco-about-us'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <!-- <img
              src="~assets/img/navAboutUs.jpg"
              alt="img02"
            > -->
            <div class="imageHolder about" />
            <figcaption>
              <h2>{{ $t('links.aboutUs') }}</h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'barbaresco-atmosphere'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <!-- <img
              src="~assets/img/navAtmosphere.jpg"
              alt="img14"
            > -->
            <div class="imageHolder atmosphere" />
            <figcaption>
              <h2>{{ $t('links.atmosphere') }}</h2>
              <span />
            </figcaption>
          </figure>
        </nuxt-link>

        <nuxt-link
          :to="localePath({name: 'barbaresco-contacts'},$i18n.locale)"
          exact
        >
          <figure class="saddleEffect">
            <!-- <img
              src="~assets/img/navContact.jpg"
              alt="img02"
            > -->
            <div class="imageHolder contact" />
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
