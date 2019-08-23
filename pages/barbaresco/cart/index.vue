<i18n>
{
  "uk": {
    "title": "Замовлення",
    "description": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас",
    "cart":{
      "heading": "Замовлення",
      "emptyCart": "Ви ще нічого не додали до замовлення",
      "total": "Сума",
      "order": "Замовити",
      "clear": "Очистити все"
      }

  },
  "en": {
   "title": "Order",
   "description": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us",
   "cart":{
      "heading": "Order",
      "emptyCart": "You haven't added anything to your order yet",
      "total": "Sum",
      "order": "Order",
      "clear": "Clear everything"
      }

  },
  "ru": {
    "title": "Замовлення",
    "description": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас",
    "cart":{
      "heading": "Заказ",
      "emptyCart": "Вы еще ничего не добавили к заказу",
      "total": "Сумма",
      "order": "Заказать",
      "clear": "Очистить все"
      }
  }
}
</i18n>

<template>
  <div class="cart">
    <div class="container">
      <h1 class="text-center mb-4">Як відбувається замовлення</h1>

      <div class="row">

        <div class="col-3 mx-auto text-center">
          <img
            src="~/assets/img/orderOnline.png"
            alt="Order Online"
          >

          <h3 class="row mt-3 text-center mx-auto"> <span class="number col-3 p-0 text-right">1</span>
            <span class="text col-9 p-0 text-left my-auto"> Оформлення <br> замовлення </span></h3>

          <p>Ви можете замовити різні страви з доставкою по Тернополі щодня з 10-00 до 23-00 через наш сайт або за телефоном. <b>
              Великі замовлення оформляте завчасу, будемо щиро вдячні.</b></p>
        </div>
        <div class="col-3 mx-auto text-center"><img
            src="~/assets/img/orderPayment.png"
            alt="Order Payment"
          >
          <h3 class="row mt-3 text-center mx-auto"> <span class="number col-3 p-0 text-right">2</span>
            <span class="text col-9 p-0 text-left my-auto"> Оплата <br> замовлення </span></h3>

          <p>Ваше замовлення можна оплатити <b>картою на сайті,</b> або <b>готівкою - кур’єру</b> при отриманні.</p>

        </div>
        <div class="col-3 mx-auto text-center"><img
            src="~/assets/img/orderPreparation.png"
            alt="Order Preparation"
          >

          <h3 class="row mt-3 text-center mx-auto"> <span class="number col-3 p-0 text-right">3</span>
            <span class="text col-9 p-0 text-left my-auto"> Приготування <br> страв </span></h3>

          <p>Всі страви починають готуватися лише після вашого замовлення.</p>

        </div>
        <div class="col-3 mx-auto text-center"><img
            src="~/assets/img/orderDelivery.png"
            alt="Order Delivery"
          >
          <h3 class="row mt-3 text-center mx-auto"> <span class="number col-3 p-0 text-right">4</span>
            <span class="text col-9 p-0 text-left my-auto"> Доставка <br> за адресою </span></h3>

          <p>Ми стараємося доставити Ваше замовлення <b>протягом 60 хв. після його оформлення.</b>
            Час доставки також залежить від Вашого району і часу дня, пробки на дорозі ніхто не відміняв :)</p>

        </div>

      </div>
      <hr style="border: 1px solid #000000;">

      <div class="row">
        <div class="col-6">
          <form class="col-12">
            <div class="row">
              <div class="col-6">
                <label for="name">Ваше ім’я
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="..."
                  >
                </label></div>
              <div class="col-6">
                <label for="phone">Ваш телефон
                  <input
                    class="form-control"
                    type="text"
                    name="phone"
                    placeholder="+380..."
                  > </label></div>
            </div>

            <div class="row">
              <div class="col-6">
                <label for="city">Місто/село
                  <input
                    class="form-control"
                    type="text"
                    name="city"
                    placeholder="..."
                  ></label> </div>
              <div class="col-6">
                <label for="street">Вулиця
                  <input
                    class="form-control"
                    type="text"
                    name="streeet"
                    placeholder="..."
                  ></label> </div>
            </div>

            <div class="row">
              <div class="col-4">
                <label for="house">Буд
                  <input
                    class="form-control"
                    type="text"
                    name="house"
                    placeholder="..."
                  > </label></div>
              <div class="col-4"><label for="code">Код <input
                    class="form-control"
                    type="text"
                    name="code"
                    placeholder="..."
                  > </label></div>
              <div class="col-4"><label for="appartment">Кв./офіс <input
                    class="form-control"
                    type="text"
                    name="appartment"
                    placeholder="..."
                  > </label></div>
            </div>

            <label for="comment">Коментар до замовлення</label>
            <textarea
              class="form-control"
              name="comment"
              id="comment"
            ></textarea>

            <div class="row text-center mx-auto mt-2">
              <div class="form-check text-center mx-auto">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                >
                <label
                  class="form-check-label"
                  for="exampleRadios2"
                >
                  Оплата кур’єру готівкою
                </label>
              </div>
              <div class="form-check text-center mx-auto">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                >
                <label
                  class="form-check-label"
                  for="exampleRadios2"
                >
                  Оплата на карту
                </label>
              </div>
            </div>

          </form>
        </div>
        <div class="col-6">
          <div>

            <div
              class="cart-item"
              v-for="(n, index) in cartSize"
              :key="n"
            >
              <div class="row my-auto">
                <p class="col-1 my-auto">{{index+=1}}</p>
                <img
                  style="border-radius: 50%;   "
                  src="~/assets/img/barbarescoBurger.png"
                  alt=""
                  class="col-2 m-auto"
                >
                <div class="col-5 p-0">
                  <div class="col-12 p-0 m-auto">
                    <div class="row m-auto">
                      <h6
                        id="cart-item-title"
                        class="col-12 m-auto text-center py-2 crop"
                      >Бургер з куркою</h6>
                      <div class="toggle-quantity col-12 m-auto ">
                        <button @click="removeFromCart(product.id)">
                          &minus;
                        </button>
                        <p>1</p>
                        <button @click="addToCart(product.id)">
                          &plus;
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4 p-0">
                  <div class="col-12 m-auto p-0">
                    <div class="row m-auto">

                      <div class="remove-from-chart col-12 m-auto text-right">
                        <span
                          @click="deleteFromCart(product.id)"
                          class="close text-right"
                        >&times;
                        </span>
                      </div>

                      <div class="cost col-12 m-auto ">
                        <p
                          id="cart-item-price"
                          class="cart-item-price text-right py-2 card-text"
                        >{{50 | currency}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr style="border: 1px solid black;">
            </div>

            <div>
              <hr
                v-if="!cartSize"
                class="mt-5"
                style="border: 1px solid black;"
              >
              <div class="row mt-5">
                <div class="col-4">
                  <small class="col-12">{{$t('cart.total')}}:</small> <br>
                  <strong
                    v-if="cartSize > 0"
                    class="col-12"
                  >155,00</strong>
                  <strong
                    v-else
                    class="col-12"
                  >0,00</strong>
                </div>
                <div class="col-8 mx-auto text-right">
                  <b-button
                    :to="localePath({name: 'barbaresco-cart'},$i18n.locale)"
                    class="order"
                  >{{$t('cart.order')}}</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: 'cart',
  layout: 'barbaresco',
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
      currentProductsDisplayed: 1,
      cartSize: 2
    }
  },

  methods: {
    updateView (updatedView) {
      this.currentProductsDisplayed = updatedView
    }
  }
}

</script>


<style lang="scss" scoped>
h3 {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;

  color: $blackColor;
  span.number {
    font-size: 50px;
    line-height: 59px;
  }

  span.text {
    font-size: 18px;
    line-height: 21px;
  }
}

.order {
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;

  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
  padding: 14px 48px;
}

.toggle-quantity {
  box-sizing: border-box;
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  button {
    border: 0;
    background-color: transparent;
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
    margin: auto;
    color: $darkColor;
    text-decoration: none;
  }

  p,
  button {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;

    color: $darkColor;

    margin: auto 2px;
    text-decoration: none;
  }

  p {
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 0 5px;
  }
}

.remove-from-chart {
  span {
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
    margin: auto;
    color: $darkColor;
    text-decoration: none;
  }
}

input.form-control,
textarea.form-control {
  background: transparent;
  border: 1px solid #000000;
  box-sizing: border-box;

  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
  width: 100%;
}
</style>
