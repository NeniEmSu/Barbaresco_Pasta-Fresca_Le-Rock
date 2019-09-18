<i18n>
{
  "uk": {
    "title": "Інтер'єр",
    "description": "Просторий зал поєднує у собі декілька відпочинкових зон: столики з панорамними вікнами, м’які дивани, барна стійка та столи з яких можна спостерігати за виступами гуртів, чи переглядати трансляцію футбольних матчів! У закладі є курильна кімната що дозволяє нашим гостям почувати себе розкуто і впевнено!"

  },
  "en": {
   "title": "Interior",
   "description": "The spacious hall combines several recreational areas: tables with panoramic windows, soft sofas, a bar counter and tables from which you can watch the performances of the groups, or watch live football broadcasts! The establishment has a smoking room that allows our guests to feel relaxed and confident!"

  },
  "ru": {
    "title": "Интерьер",
    "description": "Просторный зал сочетает в себе несколько зон отдыха: столики с панорамными окнами, мягкие диваны, барная стойка и столы из которых можно наблюдать за выступлениями групп, или просматривать трансляцию футбольных матчей! В заведении есть курительная комната что позволяет нашим гостям чувствовать себя раскованно и уверенно!"
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
      <div
        class="col-lg-6 m-auto"
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        <div class="m-auto content-text">
          <h1>{{$t('title')}}</h1>
          <p>{{$t('description')}}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'le-rock-atmosphere',
  layout: 'le-rock',
  nuxtI18n: {
    paths: {
      en: '/le-rock/atmosphere',
      uk: '/le-rock/atmosfera',
      ru: '/le-rock/atmosfera'
    }
  },
  components: {

  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: ("Le Rock - " + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: ("Le Rock -" + this.$t('description')).slice(
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
@import "~assets/scss/subPagesStyles.scss";
</style>