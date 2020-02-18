<i18n>
{
  "uk": {
    "title": "Контакти",
    "location": "Вул. Бульвар Шевченка 23",
    "call": "Тел",
    "workHours": "Заклад працює для Вас",
    "days1": "Пн-Ср",
    "days2": "Чт-Сб",
    "days3": "Нд"
  },
  "en": {
   "title": "Contacts",
   "location": "Ternopil City, 23rd Shevchenka Street",
   "call": "Tel",
   "workHours": "The institution works from",
   "days1": "Mon-Wed",
   "days2": "Thu-Sat",
"days3": "Sun"

  },
  "ru": {
    "title": "Контакты",
    "location": "г.. Тернополь, улица Князя Шевченко, 23",
    "call": "Тел",
    "workHours": "Заведение работает для Вас",
    "days1": "Пн-Вс",
    "days2": "Чт-Сб",
    "days3": "Вс"
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
                          href="tel:+380963022082"
                          class="col-12 m-auto"
                        >
                          <span>+38 096 302 20 82</span>
                        </a>
                      </p>
                      <p>{{ $t('workHours') }}</p>
                      <p>{{ $t('days1') }}.: 10:00-00:00 | {{ $t('days2') }}.: 10:00-01:00 | {{ $t('days3') }}.: 11:00-00:00</p>
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
import TheContactMap from '~/components/PastaFresca/TheMapComponentContact'
import TheTopContact from '~/components/PastaFresca/TheTopContactPastaFresca'

export default {
  name: 'PastaFrescaContacts',
  layout: 'pasta-fresca',
  nuxtI18n: {
    paths: {
      en: '/pasta-fresca/contacts',
      uk: '/pasta-fresca/kontakti',
      ru: '/pasta-fresca/kontakty'
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
          to: this.localePath({ name: 'pasta-fresca' }, this.$i18n.locale)
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
          content: ('Barbaresco -' + this.$t('description')).slice(
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
  background: url(~assets/img/pasta-fresca-contact.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
