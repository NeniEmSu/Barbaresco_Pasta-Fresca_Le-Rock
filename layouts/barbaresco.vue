<i18n>
{
  "uk": {
   "title": "Барбареско",
   "description": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
  },
  "en": {
    "title": "Barbaresco",
    "description": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us"
  },
  "ru": {
    "title": "Барбареско",
    "description": "Уютная атмосфера, приятная музыка, вкусная кухня и приветливый персонал - все это Вы найдете у Нас"
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
import Header from '~/components/TheHeader'
import TheTopContact from '~/components/TheTopContact'
import TheFooter from "@/components/TheFooter.vue"
import TheMobileFooter from "@/components/TheMobileFooter.vue"

export default {
  name: "BarbarescoLayout",
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
        // ...i18nSeo.meta
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        // ...i18nSeo.link
      ]
    }
  },
  components: {
    Header,
    TheFooter,
    TheMobileFooter,
    TheTopContact
  },

  meta: {
    animation: "overlay-up-full"
  },

}
</script>

<style lang="scss" scoped>
.content {
  min-height: calc(100vh - 120px);
}
</style>

