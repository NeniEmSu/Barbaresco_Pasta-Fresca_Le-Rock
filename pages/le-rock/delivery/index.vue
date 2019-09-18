<i18n>
{
  "uk": {
    "title": "Доставка",
    "description": "А ще Ми пропонуємо вам не відволікатись від улюблених справ, і замовити швидку доставку!",
    "description1": "Вартість доставки – 50грн.  При замовленні від 300грн - доставка безкоштовна. Чекаємо на ваші  дзвінки з 10:00 до 23:00 год.",
    "description2": "Чекаємо на ваші  дзвінки з 10:00 до 23:00 год."

  },
  "en": {
   "title": "Delivery",
    "description": "And we suggest that you do not get distracted by your favorite things, and order fast delivery!",
    "description1": "Delivery cost - 50UAH. When ordering from 300UAH - delivery is free. We are waiting for your calls from 10:00 to 23:00.",
    "description2": "We are waiting for your calls from 10:00 to 23:00."

  },
  "ru": {
    "title": "Доставка",
   "description": "А еще Мы предлагаем вам не отвлекаться от любимых дел, и заказать быструю доставку!",
   "description1": "Стоимость доставки - 50 грн. При заказе от 300грн - доставка бесплатная. Ждем ваших звонков с 10:00 до 23:00 ч.",
   "description2": "Ждем ваших звонков с 10:00 до 23:00 ч."


  }
}
</i18n>

<template>
  <div id="delivary">
    <div class="row">

      <img
        loading="lazy"
        src="~/assets/img/barbarescoDelivery.jpg"
        class="col-lg-6 p-0 image-container"
        alt="Barbaresco Delivery"
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
          <p>{{$t('description')}}</p><br />
          <p>{{$t('description1')}}
            <br />
            {{$t('description2')}}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'le-rock-delivery',
  layout: 'le-rock',
  nuxtI18n: {
    paths: {
      en: '/le-rock/delivery',
      uk: '/le-rock/dostavka',
      ru: '/le-rock/dostavka'
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
          content: ("Le Rock -" + this.$t('description') + this.$t('description1' + this.$t('description2'))).slice(
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