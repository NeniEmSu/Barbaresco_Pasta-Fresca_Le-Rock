<i18n>
{
  "uk": {
    "title": "Доставка",
    "description": "А ще Ми пропонуємо вам не відволікатись від улюблених справ, і замовити швидку доставку!",
    "description1": "Вартість доставки – 50грн.  При замовленні від 300грн - доставка безкоштовна.",
    "description2": "Чекаємо на ваші  дзвінки з 11:00 до 23:00 год."

  },
  "en": {
   "title": "Delivery",
    "description": "And we suggest that you do not get distracted by your favorite things, and order fast delivery!",
    "description1": "Delivery cost - 50UAH. When ordering from 300UAH - delivery is free.",
    "description2": "We are waiting for your calls from 11:00 to 23:00."

  },
  "ru": {
    "title": "Доставка",
   "description": "А еще Мы предлагаем вам не отвлекаться от любимых дел, и заказать быструю доставку!",
   "description1": "Стоимость доставки - 50 грн. При заказе от 300грн - доставка бесплатная.",
   "description2": "Ждем ваших звонков с 11:00 до 23:00 ч."

  }
}
</i18n>

<template>
  <div
    v-once
    id="delivary"
  >
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
                  <p>
                    {{ $t('description1') }}
                    <br>
                    {{ $t('description2') }}
                  </p>
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
import TheTopContact from '~/components/LeRock/TheTopContact'
export default {
  name: 'LeRockDelivery',
  layout: 'le-rock',
  nuxtI18n: {
    paths: {
      en: '/le-rock/delivery',
      uk: '/le-rock/dostavka',
      ru: '/le-rock/dostavka'
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
          to: this.localePath({ name: 'le-rock' }, this.$i18n.locale)
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
      title: ('Le Rock - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ('Le Rock -' + this.$t('description') + this.$t('description1' + this.$t('description2'))).slice(
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
  background: url(~assets/img/leRockDelivery.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
