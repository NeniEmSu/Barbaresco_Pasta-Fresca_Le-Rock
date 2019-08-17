<template>
  <div id="delivary">
    <div class="row">
      <div class="col-md-6 p-0 image-container">

      </div>
      <div class="col-md-6 m-auto p-5">
        <h1>Доставка</h1>
        <p>Якщо ви не йдете до нас , тоді ми їдемо до вас!
          Економте свій час з нами, адже феєрію смаку ви можете відчути і залишаючись вдома.
          Насолодіться улюбленими стравами невідволікаючись від важливих справ, а ми приготуємо та відправимо все швидкою доставкою. Вартість доставки – 30грн. При замовленні від 301 грн - доставка безкоштовна. Чекаємо на ваші дзвінки з 10:00 до 23:00 год.</p>
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
  background-image: url("~assets/img/barbarescoDelivery.png");
  background-position: bottom center;
  background-repeat: no-repeat;
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
