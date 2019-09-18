<i18n>
{
  "uk": {
    "title": "Контакти",
    "location": "м. Тернопіль, вулиця Князя Острозького, 14",
    "call": "Тел",
    "workHours": "Заклад працює для Вас",
    "days": "Пн-Нд"

  },
  "en": {
   "title": "Contacts",
   "location": "Ternopil City, 14th Ostrozkoho Street",
   "call": "Tel",
   "workHours": "The institution works from",
   "days": "Mon-Sun"

  },
  "ru": {
    "title": "Контакты",
    "location": "г.. Тернополь, улица Князя Острожского, 14",
    "call": "Тел",
    "workHours": "Заведение работает для Вас",
    "days": "Пн-Вс"
  }
}
</i18n>

<template>
  <div id="about-us">
    <div class="row">
      <img
        loading="lazy"
        src="~/assets/img/barbarescoContact.jpg"
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
          <h1>{{$t('title')}}</h1>
          <div class="text-center">
            <p>{{$t('location')}}</p>
            <p>{{$t('call')}}.: <a
                href="tel:+380506700400"
                class="col-12 m-auto"
              >
                <span>+38 050 6 700 400</span>
              </a></p>
            <p>{{$t('workHours')}}</p>
            <p><b>10:00-01:00</b> ({{$t('days')}})</p>
          </div>
        </div>
        <TheContactMap />
      </div>
    </div>

  </div>
</template>

<script>
import TheContactMap from '~/components/Barbaresco/TheMapComponent'

export default {
  name: 'barbaresco-contacts',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/contacts',
      uk: '/barbaresco/kontakti',
      ru: '/barbaresco/kontakty'
    }
  },
  components: {
    TheContactMap
  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: ("Barbaresco - " + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: ("Barbaresco -" + this.$t('location')).slice(
            0,
            320
          )
        }
      ]
    }
  },

  data () {

    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  min-height: calc(100vh - 120px);

  object-fit: cover;
  object-position: center;
}

h1 {
  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 106px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #000000;
}

p,
span {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 140.4%;

  color: #000000;
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
@media (max-width: 993px) {
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
