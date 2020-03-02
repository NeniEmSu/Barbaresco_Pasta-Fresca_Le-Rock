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
  <div
    v-once
    id="contact"
  >
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
          text: this.$t('links.contact'),
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
.block1 .left-image {
  background: url(~assets/img/le-rock-contact.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
