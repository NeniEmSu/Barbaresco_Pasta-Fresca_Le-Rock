<i18n>
{
  "uk": {
    "location": "м.Тернопіль, вулиця Олени Кульчицькоі, 2"
  },
  "en": {
   "location": "Ternopil City, Oleny Kul'chyts'koi St, 2"

  },
  "ru": {
    "location": "г.. Тернополь, улица Князя О.Кульчицькоі, 2"
  }
}
</i18n>

<template>
  <div id="the-footer">
    <div class="container footer-inner mx-auto">
      <div class="footerLogocontainer m-auto">
        <nuxt-link
          :to="localePath({name:'le-rock'},$i18n.locale)"
          class="m-auto"
        >
          <b-img-lazy
            class="mx-auto"
            src="~/assets/img/le-rock-logo.svg"
            alt="logo le rock"
          />
        </nuxt-link>
      </div>
      <div class="address">
        <nuxt-link
          :to="localePath({name: 'le-rock-contacts'},$i18n.locale)"
          class="m-auto"
        >
          {{ $t('location') }}
        </nuxt-link>
      </div>

      <div class="phone">
        <a
          href="tel:+380671154515"
          class=" m-auto"
        >
          <span>+380 67 115 45 15</span>
        </a>
      </div>

      <div class="socials">
        <a
          href="https://www.facebook.com/lerockpab/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <svg
            id="Capa_1"
            style="enable-background:new 0 0 90 90;"
            version="1.1"
            viewBox="0 0 90 90"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <g>
                <path
                  id="Facebook__x28_alt_x29_"
                  d="M90,15c0-7.9-7.1-15-15-15H15C7.1,0,0,7.1,0,15v60c0,7.9,7.1,15,15,15h30V56H34V41h11v-5.8     C45,25.1,52.6,16,61.9,16H74v15H61.9c-1.3,0-2.9,1.6-2.9,4v6h15v15H59v34h16c7.9,0,15-7.1,15-15V15z"
                />
              </g>
            </g>
          </svg>

        </a>

        |

        <a
          href="https://www.instagram.com/lerock2017/?igshid=1sbpswqx2738u"
          target="_blank"
          rel="noopener noreferrer"
        >

          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0" />
            <path d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0" />
            <path d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0" /></svg>

        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~assets/scss/TheFooterMobile.scss";
</style>
