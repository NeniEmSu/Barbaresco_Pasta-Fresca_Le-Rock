<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Інтер'єр",
    "description": "Виразний індустріальний стиль лофт. Приміщення згідно обраного стилю оформлено в холодних відтінках. Просторий зал поєднує у собі декілька відпочинкових зон: столики з панорамними вікнами, м’які дивани, барна стійка та балкон. У закладі є дитяча кімната для наших найменших гостей."

  },
  "en": {
    "name": "Pasta Fresca",
   "title": "Interior",
   "description": "Expressive industrial style loft. The room according to the chosen style is decorated in cool shades. The spacious hall combines several seating areas: tables with panoramic windows, soft sofas, a bar counter and a balcony. The facility has a children's room for our youngest guests."

  },
  "ru": {
    "name": "Паста фреска",
    "title": "Интерьер",
    "description": "Выразительный индустриальный стиль лофт. Помещения согласно выбранного стиля оформлено в холодных оттенках. Просторный зал сочетает в себе несколько зон отдыха: столики с панорамными окнами, мягкие диваны, барная стойка и балкон. В заведении есть детская комната для наших маленьких гостей."
  }
}
</i18n>

<template>
  <div id="atmosphere">
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
                  <h1>{{ $t('title') }}</h1>
                  <p>{{ $t('description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheTopContact from '~/components/PastaFresca/TheTopContactPastaFresca'
export default {
  name: 'PastaFrescaAtmosphere',
  layout: 'pasta-fresca',
  nuxtI18n: {
    paths: {
      en: '/pasta-fresca/atmosphere',
      uk: '/pasta-fresca/atmosfera',
      ru: '/pasta-fresca/atmosfera'
    }
  },
  components: {
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
          text: this.$t('links.atmosphere'),
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: (this.$t('name') + ' - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (this.$t('name') + ' -' + this.$t('description')).slice(
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
  background: url(~assets/img/pastaFrescAtmosphere.jpg);
}

@import "~assets/scss/subPagesStylesNew.scss";
</style>
