<template>
  <div id="homePage">
    <div class="mx-auto ">
      <h1 class="homePageHeading">Оберіть заклад</h1>

      <no-ssr>
        <!-- important to add no-ssr-->
        <div class="mx-auto">
          <carousel
            :nav="true"
            :items="4"
            :loop="false"
            :mouseDrag="true"
            :touchDrag="true"
            :autoplay="false"
            :rewind="false"
            :stagePadding="40"
            :autoWidth="350"
            :responsive="{
              0: { items: 4, center: true },
              768: { items: 4, center: false, margin: 0 },
              1200: { items: 3, center: false, margin: 0 },
              1440: { items: 3, center: false,  margin: 0 },
              1800: { items: 4, center: false,  margin: 90}
            }"
          >
            <homePageNavigationCard
              v-for="variant in variants"
              :key="variant.name"
              class="col-3 ml-4"
              :name="variant.name"
              :imageshowcase="variant.imageShowcase"
              :showcasealt="variant.showcaseAlt"
              :logo="variant.logo"
              :logoalt="variant.logoAlt"
              :sitelink="variant.siteLink"
              :details="variant.details"
              :instalink="variant.instaLink"
              :faceblink="variant.facebLink"
            ></homePageNavigationCard>
          </carousel>
        </div>
      </no-ssr>

      <!-- <div class="row mx-auto">
        <homePageNavigationCard
          v-for="variant in variants"
          :key="variant.name"
          class="mx-auto"
          :name="variant.name"
          :imageshowcase="variant.imageShowcase"
          :showcasealt="variant.showcaseAlt"
          :logo="variant.logo"
          :logoalt="variant.logoAlt"
          :sitelink="variant.siteLink"
          :details="variant.details"
          :instalink="variant.instaLink"
          :faceblink="variant.facebLink"
        ></homePageNavigationCard>
      </div> -->
    </div>
  </div>
</template>

<script>
import homePageNavigationCard from '~/components/homePageNavigationCard'

export default {
  components: {
    homePageNavigationCard
  },
  data () {
    return {
      variants: [
        {
          name: 'Barbaresco',
          imageShowcase: 'home-page-barbaresco',
          showcaseAlt: 'Image of barbaresco',
          logo: 'logo-barbaresco',
          logoAlt: 'barbaresco logo',
          siteLink: '#',
          details:
            'Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас',
          instaLink: '#',
          facebLink: 'https://www.facebook.com/barbarescocitycafe/'
        },
        {
          name: 'Pasta Fresca',
          imageShowcase: 'home-page-pasta-fresca',
          showcaseAlt: 'Image of Pasta Fresca',
          logo: 'logo-pasta',
          logoAlt: 'pasta-fresca-logo',
          siteLink: '#',
          details:
            'Відкриваємо суперздібності від смаку нашої пасти Приходьте та спробуйте самі',
          instaLink: '#',
          facebLink: '#'
        },
        {
          name: 'Le rock',
          imageShowcase: 'home-page-le-rock',
          showcaseAlt: 'Image of Le rock',
          logo: 'logo-le-rock',
          logoAlt: 'Le rock logo',
          siteLink: '#',
          details:
            'Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!',
          instaLink: 'https://www.instagram.com/lera_galich/?hl=uk',
          facebLink: 'https://www.facebook.com/barbarescocitycafe/'
        },
        {
          name: 'Piazza white',
          imageShowcase: 'home-page-piazza-white',
          showcaseAlt: 'Image of Piazza white',
          logo: 'logo-piazza-white',
          logoAlt: 'Piazza white logo',
          siteLink: '#',
          details:
            'Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас',
          instaLink: '#',
          facebLink: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#homePage {
  position: fixed;
  background-image: url("~assets/img/home-page-bg.png");
  background-color: #000000;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  opacity: 0.9;
  filter: blur(0.5px);

  height: 100vh;
  width: 100vw;
}
.homePageHeading {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 70px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 0.8;
}
</style>
