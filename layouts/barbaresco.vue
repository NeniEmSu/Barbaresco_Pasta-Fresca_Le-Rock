<i18n>
{
  "uk": {
   "title": "Барбареско",
   "description": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас",
   "keywords": "Barbaresco, Barbaresco тернопіль, замовлення їжі тернопіль, замовити їжу онлайн тернопіль, тернопіль, укріане, смачна кухня, приємна музика, затишна атмосфера, відмінна їжа, піца, бургер, салат, пустелі, напої, суші"
  },
  "en": {
    "title": "Barbaresco",
    "description": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us",
    "keywords": "Barbaresco, Barbaresco Ternopil, Food order Ternopil, Order food online ternopil, Ternopil, Ukriane, Delicious cuisine, Nice music, Cozy atmosphere, Great Food, Pizza, Burger, Salad, Deserts, Drinks, Sushi"
  },
  "ru": {
    "title": "Барбареско",
    "description": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас",
    "keywords": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас",
    "keywords": "Барбареско, Барбареско Тернополь, Еда на заказ Тернополь, Заказать еду онлайн Тернополь, Тернополь, Укриане, Вкусная кухня, Приятная музыка, Уютная атмосфера, Отличная еда, Пицца, Бургер, Салат, Десерты, Напитки, Суши"
  }
}
</i18n>

<template>
  <div id="BarbarescoLayout">
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
import Header from '~/components/Barbaresco/TheHeader'

import TheFooter from '@/components/Barbaresco/TheFooter.vue'
import TheMobileFooter from '@/components/Barbaresco/TheMobileFooter.vue'

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
          rel: 'icon',
          type: 'image/png',
          href: 'barbaresco-logo.png'
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
