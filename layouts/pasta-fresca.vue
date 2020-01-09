<i18n>
{
  "uk": {
   "title": "Паста фреска",
   "description": "Відкриваємо суперздібності від смаку нашої пасти Приходьте та спробуйте самі",
   "keywords": "Паста фреска, Паста фреска Тернополь, Макаронні вироби Фреска, Макаронні вироби Фреска Тернополь, Замовлення їжі Тернопіль, Замовлення їжі онлайн Тернопіль, Тернопіль, Укріан, Макаронні вироби, Приємна музика, Затишна атмосфера, Відмінна їжа, Салат, Десерти, Напої"
  },
  "en": {
    "title": "Pasta Fresca",
    "description": "Unlock the taste of our pasta Come and try for yourself",
    "keywords": "Pasta Fresca, Pasta Fresca Ternopil, Food order Ternopil, Order food online ternopil, Ternopil, Ukriane, Pasta, Nice music, Cozy atmosphere, Great Food, Salad, Deserts, Drinks"
  },
  "ru": {
    "title": "Паста фреска",
    "description": "Открываем суперспособности от вкуса нашей пасты Приходите и попробуйте сами",
    "keywords": "Pasta Fresca, Pasta Fresca Тернополь, Еда на заказ Тернополь, Заказать еду онлайн Тернополь, Тернополь, Укриане, Макароны, Приятная музыка, Уютная атмосфера, Отличная еда, Салат, Десерты, Напитки"
  }
}
</i18n>

<template>
  <div id="BarbarescoLayout">
    <Header class="d-block" />

    <TheTopContact class="d-none d-md-flex w-100" />
    <div class="content">
      <vue-page-transition :name="$store.state.animation">
        <nuxt />
      </vue-page-transition>
    </div>

    <TheFooter class="d-none d-lg-block" />

    <TheMobileFooter class="d-block d-lg-none" />
  </div>
</template>

<script>
import Header from '~/components/PastaFresca/TheHeaderPastaFresca'
import TheTopContact from '~/components/PastaFresca/TheTopContactPastaFresca'
import TheFooter from '@/components/PastaFresca/TheFooterPastaFresca.vue'
import TheMobileFooter from '@/components/PastaFresca/TheMobileFooterPastaFresca.vue'

export default {
  name: 'PastaFrescaLayout',
  components: {
    Header,
    TheFooter,
    TheMobileFooter,
    TheTopContact
  },
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.$t('title')
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('keywords')
        }
        // ...i18nSeo.meta
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        }
        // ...i18nSeo.link
      ]
    }
  },

  meta: {
    animation: 'overlay-up-full'
  }

}
</script>

<style lang="scss" scoped>
// .content {
//   min-height: calc(100vh - 120px);
// }
</style>
