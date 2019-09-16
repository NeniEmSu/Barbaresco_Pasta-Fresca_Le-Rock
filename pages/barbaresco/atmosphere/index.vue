<i18n>
{
  "uk": {
    "title": "Інтер'єр",
    "description": "Виразний індустріальний стиль лофт. Приміщення згідно обраного стилю оформлено в холодних відтінках. Просторий зал поєднує у собі декілька відпочинкових зон: столики з панорамними вікнами, м’які дивани, барна стійка та балкон. У закладі є дитяча кімната для наших найменших гостей."

  },
  "en": {
   "title": "Interior",
   "description": "Expressive industrial style loft. The room according to the chosen style is decorated in cool shades. The spacious hall combines several seating areas: tables with panoramic windows, soft sofas, a bar counter and a balcony. The facility has a children's room for our youngest guests."

  },
  "ru": {
    "title": "Интерьер",
    "description": "Выразительный индустриальный стиль лофт. Помещения согласно выбранного стиля оформлено в холодных оттенках. Просторный зал сочетает в себе несколько зон отдыха: столики с панорамными окнами, мягкие диваны, барная стойка и балкон. В заведении есть детская комната для наших маленьких гостей."
  }
}
</i18n>

<template>
  <div id="atmosphere">
    <div class="row">
      <img
        src="~/assets/img/barbarescoAtmosphere.jpg"
        class="col-lg-6 p-0 image-container"
        alt="Barbaresco Atmosphere page image"
      >
      <div class="col-lg-6 m-auto p-5">
        <h1>{{$t('title')}}</h1>
        <p>{{$t('description')}}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'barbaresco-atmosphere',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/atmosphere',
      uk: '/barbaresco/atmosfera',
      ru: '/barbaresco/atmosfera'
    }
  },
  components: {

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
          content: ("Barbaresco -" + this.$t('description')).slice(
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

p {
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

  p {
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

  p {
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

  p {
    font-size: 18px;
    line-height: 140.4%;
  }
}
</style>
