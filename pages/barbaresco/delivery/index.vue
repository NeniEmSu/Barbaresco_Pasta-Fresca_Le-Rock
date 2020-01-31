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
    <TheTopContact
      :items="items"
      class="d-none d-md-flex w-100"
    />
    <section
      id="section2"
      class="panel overview"
      data-section-name="overview"
    >
      <div
        id="transcroller-body"
        class="block1 aos-all"
      >
        <div class="row mx-0">
          <div class="col-sm-6 p-0 col-xs-12 left-image" />

          <div class="col-sm-6 p-0 col-xs-12 left-content verticalcenter">
            <div
              class="block1-left"
              style="top: auto; transform: none;"
            >
              <div
                class="aos-item aos-init"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-delay="1000"
                data-aos-duration="500"
              >
                <div class="aos-item__inner">
                  <h1>{{ $t('title') }}</h1>
                  <p>{{ $t('description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheTopContact from '~/components/Barbaresco/TheTopContact'
export default {
  name: 'BarbarescoDelivery',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/delivery',
      uk: '/barbaresco/dostavka',
      ru: '/barbaresco/dostavka'
    }
  },
  components: {
    TheTopContact
  },
  meta: {
    animation: 'overlay-down-full'
  },

  data () {
    return {
      items: [
        {
          text: this.$t('links.home'),
          to: this.localePath({ name: 'index' }, this.$i18n.locale)
        },
        {
          text: this.$t('links.menu'),
          to: this.localePath({ name: 'barbaresco' }, this.$i18n.locale)
        },
        {
          text: this.$t('links.delivery'),
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: ('Barbaresco - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ('Barbaresco -' + this.$t('description')).slice(
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
.block1 .left-image {
  background: url(~assets/img/barbarescoDelivery.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
