<i18n>
{
  "uk": {
    "title": "Доставка",
    "description": "Якщо ви не йдете до нас , тоді ми їдемо до вас! Економте свій час з нами, адже феєрію смаку ви можете відчути і залишаючись вдома. Насолодіться улюбленими стравами невідволікаючись від важливих справ, а ми приготуємо та відправимо все швидкою доставкою. Вартість доставки – 30грн. При замовленні від 301 грн - доставка безкоштовна. Чекаємо на ваші дзвінки з 10:00 до 23:00 год."

  },
  "en": {
   "title": "Delivery",
   "description": "If you do not come to us, then we go to you! Save your time with us, because you can feel the extravaganza of taste while staying at home. Enjoy your favorite dishes with the essentials, and we will prepare and ship everything fast delivery. Delivery cost - 30UAH. When ordering from 301 UAH - delivery is free. We are waiting for your calls from 10:00 to 23:00."

  },
  "ru": {
    "title": "Доставка",
    "description": "Если вы не идете к нам, тогда мы едем к вам! Экономьте свое время с нами, ведь феерию вкуса вы можете почувствовать и оставаясь дома. Насладитесь любимыми блюдами невидволикаючись от важных дел, а мы приготовим и отправим все быстрой доставкой. Стоимость доставки - 30 грн. При заказе от 301 грн - доставка бесплатно. Ждем ваших звонков с 10:00 до 23:00 ч."
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
          <p>{{$t('description')}}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'pasta-fresca-delivery',
  layout: 'pasta-fresca',
  nuxtI18n: {
    paths: {
      en: '/pasta-fresca/delivery',
      uk: '/pasta-fresca/dostavka',
      ru: '/pasta-fresca/dostavka'
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
@import "~assets/scss/subPagesStyles.scss";
</style>