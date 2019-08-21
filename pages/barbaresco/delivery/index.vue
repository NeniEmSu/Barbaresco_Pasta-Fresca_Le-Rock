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
        src="~/assets/img/barbarescoDelivery.png"
        class="col-md-6 p-0 image-container"
        alt="Barbaresco Delivery"
      >

      <div class="col-md-6 m-auto p-5">
        <h1>{{$t('title')}}</h1>
        <p>{{$t('description')}}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'barbaresco-delivery',
  layout: 'barbaresco',
  components: {

  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: "Barbaresco - Delivery".slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Barbaresco - Delivery.".slice(
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
  height: calc(100vh - 120px);
  // background-image: url("~assets/img/barbarescoDelivery.png");
  // background-position: bottom center;
  // background-repeat: no-repeat;
  object-fit: cover;
  object-position: bottom center;
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
</style>
