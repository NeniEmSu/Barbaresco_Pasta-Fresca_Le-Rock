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

    <div class="container">
      <div class="footerLogocontainer my-auto">
        <nuxt-link
          :to="localePath({name:'barbaresco'},$i18n.locale)"
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
      <div class=" footer-inner mx-auto">

        <div class="address my-auto">
          <nuxt-link
            :to="localePath({name: 'barbaresco-contacts'},$i18n.locale)"
            class="m-auto"
          >
            {{$t('location')}}
          </nuxt-link>

        </div>

        <div class="ml-auto d-flex">
          <div class="phone my-auto ">

            <a
              href="tel:+380506700400"
              class=" m-auto"
            >
              <span>+38 050 6 700 400</span>
            </a>
          </div>

          <div class="socials my-auto">

            <a
              href="#"
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
              href="#"
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
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#the-footer {
  background: $darkColor;
  width: 100vw !important;
  padding: 0;
  max-height: 200px;
  min-height: 200px;
  height: 100%;
  bottom: 0;
}

.footer-inner {
  padding: 88px 0 0 0;
  display: flex;
}

.footerLogocontainer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 70px 0 0 0;

  img {
    min-height: 60px;
    max-height: 60px;
    height: 100%;
  }
}

.phone {
  margin-right: 40px;
  a {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: $lightColor;
  }
}
.socials a {
  margin: auto;
  img {
    margin-right: 20px;
  }
}

.address {
  a {
    margin: auto;

    font-family: $primaryFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;

    text-align: center;

    color: $lightColor;
  }
}
</style>
