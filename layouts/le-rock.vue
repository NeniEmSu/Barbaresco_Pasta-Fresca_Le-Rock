<i18n>
{
  "uk": {
   "title": "Ле Рок",
   "description": "Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!",
   "keywords": "Le Rock, Le Rock Тернопіль, Замовлення їжі Тернопіль, Замовлення їжі онлайн Тернопіль, Тернопіль, Укріан, Смачна кухня, Приємна музика, Затишна атмосфера, Відмінна їжа, М'ясо барбекю, Салат, Десерти, Напої, Рок Дог"
  },
  "en": {
    "title": "Le Rock",
    "description": "Company of friends, delicious menu and great atmosphere - only in Le Rock!",
    "keywords": "Le Rock, Le Rock Ternopil, Food order Ternopil, Order food online ternopil, Ternopil, Ukriane, Delicious cuisine, Nice music, Cozy atmosphere, Great Food, BBQ Meat, Salad, Deserts, Drinks, Rock Dog"
  },
  "ru": {
    "title": "Ле Рок",
    "description": "Компания друзей, вкусное меню и отличная атмосфера - только в Le Rock!",
    "keywords": "Le Rock, Le Rock Тернополь, Еда на заказ Тернополь, Заказать еду онлайн Тернополь, Тернополь, Укриане, Вкусная кухня, Приятная музыка, Уютная атмосфера, Отличная еда, Барбекю, Мясо, Салат, Десерты, Напитки, Рок Дог"
  }
}
</i18n>

<template>
  <div id="LeRockLayout">
    <Header class="d-block" />

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
import TheFooter from '@/components/LeRock/TheFooterLeRock'
import TheMobileFooter from '@/components/LeRock/TheMobileFooter'
import Header from '~/components/LeRock/TheHeaderLeRock'

export default {
  name: 'BarbarescoLayout',
  components: {
    Header,
    TheFooter,
    TheMobileFooter
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
