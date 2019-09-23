<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "Взагальному ми спеціалізуємось на стравах з м`яса  (стейки, ребра, свинні рульки, ковбаски власного приготування) а ще, у нас великий асортимент пивних закусок! Наша основна ціль, це щоб гості залишились ситими, задоволеними і неодмінно прийшли до нас ще! Адже кожен гість який до нас завітав – є важливим без виключення, тому наша команда зробить усе, щоб ваше гостювання у нас стало незабутнім святом смаку і задоволення."

  },
  "en": {
    "name": "Pasta Fresca",
   "title": "Kitchen",
   "description": "In general, we specialize in meat dishes (steaks, ribs, pork rolls, sausages of our own cooking), and yet, we have a large assortment of beer snacks! Our main goal is to keep our guests satisfied, satisfied and always come to us! After all, every guest who came to us is important without exception, so our team will do everything to make your stay with us an unforgettable holiday of taste and pleasure."

  },
  "ru": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "В общем мы специализируемся на блюдах из мяса (стейки, ребра, свиные рульки, колбаски собственного приготовления) а еще, у нас большой ассортимент пивных закусок! Наша основная цель, это чтобы гости остались сытыми, довольными и непременно пришли к нам еще! Ведь каждый гость который к нам пришел - важно без исключения, поэтому наша команда сделает все, чтобы ваше гостил у нас стало незабываемым праздником вкуса и удовольствия."
  }
}
</i18n>

<template>
  <div id="le-rock-kitchen">
    <div class="row">
      <img
        loading="lazy"
        src="~/assets/img/pasta-fresca-kitchen.jpg"
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
  name: 'LeRockKitchen',
  layout: 'le-rock',
  nuxtI18n: {
    paths: {
      en: '/le-rock/kitchen',
      uk: '/le-rock/kuhnja',
      ru: '/le-rock/kuhnja'
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
          content: (this.$t('name') + ' -' + this.$t('description')).slice(
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
