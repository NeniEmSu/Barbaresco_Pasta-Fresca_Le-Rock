<i18n>
{
  "uk": {
    "title": "Контакти",
    "location": "Вул. О.Кульчицькоі 2а ",
    "call": "Тел",
    "workHours": "Заклад працює для Вас",
    "days": "Пн-Нд"

  },
  "en": {
   "title": "Contacts",
   "location": "Ternopil City, 2a O.Kulchitskoy Street",
   "call": "Tel",
   "workHours": "The institution works from",
   "days": "Mon-Sun"

  },
  "ru": {
    "title": "Контакты",
    "location": "г.. Тернополь, улица Князя О.Кульчицькоі, 2а",
    "call": "Тел",
    "workHours": "Заведение работает для Вас",
    "days": "Пн-Вс"
  }
}
</i18n>

<template>
  <div id="about-us">
    <TheTopContact
      :items="items"
      class="d-none d-md-flex w-100"
    />
    <div class="row">
      <img
        src="~/assets/img/le-rock-contact.jpg"
        class="col-lg-6 p-0 image-container"
        alt="Barbaresco Contact page image"
      >
      <div
        class="col-lg-6 m-auto p-0 text-center"
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        <div class="inner-text px-5">
          <h1>{{ $t('title') }}</h1>
          <div class="text-center">
            <p>{{ $t('location') }}</p>
            <p>
              {{ $t('call') }}.: <a
                href="tel:+38671154515"
                class="col-12 m-auto"
              >
                <span>+38 67 115 45 15</span>
              </a>
            </p>
            <p>{{ $t('workHours') }}</p>
            <p>{{ $t('days') }}.: <b>11:00-01:00</b> </p>
          </div>
        </div>
        <TheContactMap />
      </div>
    </div>
  </div>
</template>

<script>
import TheContactMap from '~/components/LeRock/TheMapComponentContact'
import TheTopContact from '~/components/LeRock/TheTopContact'

export default {
  name: 'LeRockContacts',
  layout: 'le-rock',
  nuxtI18n: {
    paths: {
      en: '/le-rock/contacts',
      uk: '/le-rock/kontakti',
      ru: '/le-rock/kontakty'
    }
  },
  components: {
    TheContactMap,
    TheTopContact
  },
  meta: {
    animation: 'overlay-down-full'
  },

  data () {
    return {
      items: [
        {
          text: this.$t('links.home'),
          to: this.localePath({ name: 'index' }, this.$i18n.locale)
        },
        {
          text: this.$t('links.menu'),
          to: this.localePath({ name: 'le-rock' }, this.$i18n.locale)
        },
        {
          text: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: ('Le Rock - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ('Le Rock -' + this.$t('location')).slice(
            0,
            320
          )
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/subPagesStyles.scss";

h1 {
  font-family: $segoeFont;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 106px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: $blackColor;
  margin-top: 50px;
}

p,
span {
  font-family: $robotoFont;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 110.4%;

  color: $blackColor;
}

@media (max-width: 1280px) {
  h1 {
    font-size: 60px;
    line-height: 80px;
  }

  p,
  span {
    font-size: 24px;
  }
}
@media (max-width: 992px) {
  .image-container {
    min-height: 200px;
    max-height: 200px;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  h1 {
    font-size: 60px;
    line-height: 80px;
  }

  p,
  span {
    font-size: 24px;
  }
}

@media (max-width: 500px) {
  .image-container {
    min-height: 200px;
    max-height: 200px;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  h1 {
    font-size: 40px;
    line-height: 53px;
  }

  p,
  span {
    font-size: 18px;
    line-height: 140.4%;
    padding-bottom: 20px;
  }
}
</style>
