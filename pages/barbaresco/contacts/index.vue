<i18n>
{
  "uk": {
    "title": "Контакти",
    "location": "Вул. Кн. Острозького 14",
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
  <div id="contact">
    <TheTopContact
      :items="items"
      class="d-none d-md-flex w-100"
    />
    <section
      id="section2"
      class="panel overview"
      data-section-name="overview"
    >
      <div
        id="transcroller-body"
        class="block1 aos-all"
      >
        <div class="row mx-0">
          <div class="col-sm-6 p-0 col-xs-12 left-image" />

          <div class="col-sm-6 p-0 col-xs-12 left-content verticalcenter">
            <div
              class="block1-left"
              style="top: auto; transform: none;"
            >
              <div
                class="aos-item aos-init"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-delay="1000"
                data-aos-duration="500"
              >
                <div class="aos-item__inner">
                  <div class="text-center">
                    <h1>{{ $t('title') }}</h1>
                    <p>{{ $t('location') }}</p>
                    <p>
                      {{ $t('call') }}.:
                      <a
                        href="tel:+380506700400"
                        class="col-12 m-auto"
                      >
                        <span>+38 050 6 700 400</span>
                      </a>
                      <span>|</span>
                      <a
                        href="tel:+380686700400"
                        class="col-12 m-auto"
                      >
                        <span>+38 068 6 700 400</span>
                      </a>
                    </p>
                    <p>{{ $t('workHours') }} <b>10:00-01:00</b> ({{ $t('days') }})</p>
                  </div>
                </div>
              </div>
            </div>
            <TheContactMap class="map" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheContactMap from '~/components/Barbaresco/TheMapComponentContact'
import TheTopContact from '~/components/Barbaresco/TheTopContact'
export default {
  name: 'BarbarescoContacts',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/contacts',
      uk: '/barbaresco/kontakti',
      ru: '/barbaresco/kontakty'
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
          to: this.localePath({ name: 'barbaresco' }, this.$i18n.locale)
        },
        {
          text: this.$t('links.contact'),
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: ('Barbaresco - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ('Barbaresco -' + this.$t('location')).slice(
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
.block1 .left-image {
  background: url(~assets/img/barbarescoContact.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
