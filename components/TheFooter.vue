<i18n>
{
  "uk": {
    "location": "м. Тернопіль, вулиця Князя Острозького, 14"

  },
  "en": {
   "location": "Ternopil City, 14th Ostrozkoho Street"

  },
  "ru": {
    "location": "г.. Тернополь, улица Князя Острожского, 14"
  }
}
</i18n>

<template>
  <div id="the-footer">
    <div class="container footer-inner mx-auto">
      <div class="address my-auto">
        <nuxt-link
          :to="'/' + $i18n.locale + '/contact'"
          v-scroll-to="{el: '#map-top', duration: 500, offset: -60 }"
          class="m-auto"
        >
          {{$t('location')}}
        </nuxt-link>

      </div>
      <div class="footerLogocontainer m-auto">
        <nuxt-link
          to="barbaresco"
          class="m-auto"
        >

          <b-img-lazy
            class="mx-auto"
            src="~/assets/img/barbaresco-logo.svg"
            alt="logo barbaresco"
          >
          </b-img-lazy>

        </nuxt-link>
      </div>

      <div class="phone my-auto row">

        <a
          href="tel:+380506700400"
          class="col-12 m-auto"
        >
          <span>+38 050 6 700 400</span>
        </a>

        <a
          href="tel:+380506700400"
          class="col-12 m-auto"
        >
          <span>+38 050 6 700 400</span>
        </a>
      </div>

      <div class="socials my-auto">

        <a
          href="https://www.facebook.com/virus.te.ua/"
          target="_blank"
          rel="noopener"
        >

          <img
            src="~/assets/img/facebookSocialLogo.png"
            alt="icons facebook filled"
          />

        </a>

        |

        <a
          href="https://www.instagram.com/virusdetailing/"
          target="_blank"
          rel="noopener"
        >

          <img
            src="~/assets/img/instagramSocialLogo.png"
            alt="icons instagram filled"
          />

        </a>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#the-footer {
  background: $darkColor;
  width: 100% !important;
  padding: 0;
  max-height: 200px;
  min-height: 200px;
  height: 100%;
  bottom: 0;
}

.footer-inner {
  padding: 70px 0;
  display: flex;
}

.footerLogocontainer img {
  min-height: 60px;
  max-height: 60px;
  height: 100%;
}

.phone a {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: $lightColor;
}

.socials a {
  margin: auto;
  img {
    margin-right: 20px;
  }
}

.address a {
  margin: auto;

  font-family: $primaryFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;

  text-align: center;

  color: $lightColor;
}
</style>
