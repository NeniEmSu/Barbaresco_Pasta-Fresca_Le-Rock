<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "Ми спеціалізуємось на приготуванні ручної піци, оригінальних",
"description1": "ролів та бургерів. Головна ціль для нас – це в першу чергу готувати смачну їжу з якісних та свіжих продуктів із задоволенням та душею. Кожна наша страва не просто насичує, вона заряджає енергією і радістю, яку ми вкладаємо в неї.",
"description2": "Щодня ми вдосконалюємось і зростаємо для вас, щоб ви завжди відчували себе особливим та унікальним. Адже кожен гість який до нас завітав – є важливим без виключення, тому наша команда зробить усе, щоб ваше гостювання у нас стало незабутнім святом смаку і задоволення."

  },
  "en": {
    "name": "Pasta Fresca",
   "title": "Kitchen",
   "description": "We specialize in making handmade, original pizza",
"description1": "roles and burgers. The main goal for us is first and foremost to prepare delicious food with quality and fresh products with pleasure and soul. Not only does our food saturate, it charges the energy and joy we put into it.",
"description2": "Every day we refine and grow for you so that you always feel special and unique. After all, every guest who came to us is important without exception, so our team will do everything to make your stay with us an unforgettable holiday of taste and pleasure."

  },
  "ru": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "Мы специализируемся на приготовлении ручной пиццы, оригинальных",
"description1": "роллов и бургеров. Главная цель для нас - это в первую очередь готовить вкусную еду из качественных и свежих продуктов с удовольствием и душой. Каждая наша блюдо не просто насыщает, она заряжает энергией и радостью, которую мы вкладываем в нее.",
"description2": "Ежедневно мы совершенствуемся и растем для вас, чтобы вы всегда чувствовали себя особенным и уникальным. Ведь каждый гость который к нам пришел - важно без исключения, поэтому наша команда сделает все, чтобы ваше гостил у нас стало незабываемым праздником вкуса и удовольствия."

  }
}
</i18n>

<template>
  <div id="barbaresco-kitchen">
    <div class="row">
      <img
        loading="lazy"
        src="~/assets/img/barbaresco-kitchen.jpg"
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
          <p>
            {{ $t('description1') }}
            <br>
            {{ $t('description2') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BarbarescoKitchen',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/kitchen',
      uk: '/barbaresco/kuhnja',
      ru: '/barbaresco/kuhnja'
    }
  },
  components: {

  },
  meta: {
    animation: 'overlay-down-full'
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
          content: (this.$t('name') + ' -' + this.$t('description') + this.$t('description1' + this.$t('description2'))).slice(
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
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/subPagesStyles.scss";
</style>
