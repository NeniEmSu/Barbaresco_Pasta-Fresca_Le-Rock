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
    <div class="row">
      <img
        loading="lazy"
        src="~/assets/img/barbarescoAtmosphere.jpg"
        class="col-lg-6 p-0 image-container"
        alt="Barbaresco Atmosphere page image"
      >
      <div
        class="col-lg-6 m-auto"
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        <div class="m-auto content-text">
          <h1>{{ $t('title') }}</h1>
          <p>{{ $t('description') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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

  },
  meta: {
    animation: 'overlay-down-full'
  },

  data () {
    return {

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
@import "~assets/scss/subPagesStyles.scss";
</style>
