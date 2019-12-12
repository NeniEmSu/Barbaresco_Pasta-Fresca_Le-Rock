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
@import "~assets/scss/TheImageNavigation.scss";
</style>
