<i18n>
{
  "uk": {
          "home": {
            "title": "Оберіть заклад",
            "siteButtonTxt": "Перейти до закладу",
            "descriptions": [{
                "details": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
              },
              {
                "details": "Відкриваємо суперздібності від смаку нашої пасти Приходьте та спробуйте самі"
              },
              {
                "details": "Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!"
              },
              {
                "details": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
              }
            ]
          }
        },
        "en": {
          "home": {
            "title": "SELECT AN INSTITUTION",
            "siteButtonTxt": "Go to the institution",
            "descriptions": [{
                "details": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us"
              },
              {
                "details": "Unlock the taste of our pasta Come and try for yourself"
              },
              {
                "details": "Company of friends, delicious menu and great atmosphere - only in Le Rock!"
              },
              {
                "details": "Cozy atmosphere, nice music, delicious cuisine and friendly staff - all of which you will find in Us"
              }
            ]
          }
        },

        "ru": {
          "home": {
            "title": "Оберіть заклад",
            "siteButtonTxt": "Перейти до закладу",
            "descriptions": [{
                "details": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
              },
              {
                "details": "Відкриваємо суперздібності від смаку нашої пасти Приходьте та спробуйте самі"
              },
              {
                "details": "Компанія друзів, смачне меню і відмінна атмосфера - тільки в Le Rock!"
              },
              {
                "details": "Затишна атмосфера, приємна музика, смачна кухня та привітний персонал - все це Ви знайдете у Нас"
              }
            ]
          }
        }
}
</i18n>


<template>
  <div id="homePage">

    <div class="mx-auto ">
      <h1 class="homePageHeading">{{ $t('home.title') }}</h1>

      <no-ssr>
        <!-- important to add no-ssr-->
        <div class="">
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

            <div class="col-3">
              <b-card
                :img-src="require(`~/assets/img/${variants[0].imageShowcase + '.png'}`)"
                :img-alt="variants[0].showcaseAlt"
                img-top
                tag="article"
                style=""
                class="mb-2 mx-auto homeNavCard"
              >
                <div class="cardContent">
                  <div class="card-log mx-auto text-center">
                    <b-img
                      class="mx-auto"
                      :src="require(`~/assets/img/${variants[0].logo + '.svg'}`)"
                      :alt="variants[0].logoAlt"
                    ></b-img>
                  </div>
                  <b-card-text class="cardDescription">
                    {{ variants[0].details }}
                  </b-card-text>
                  <div class="text-center goTosite">
                    <b-button
                      class="mx-auto goToSiteBtn"
                      :to="localePath({name: 'barbaresco'},$i18n.locale)"
                    >{{ $t('home.siteButtonTxt') }}</b-button>
                  </div>
                  <div class="text-center ">
                    <b-button
                      class="socialButtons instagram mx-auto"
                      :href="variants[0].instaLink"
                    >
                      <b-img
                        class="inButtonImg "
                        src="~assets/img/instagram.svg"
                        alt="instagram text"
                      ></b-img>
                    </b-button>
                    <b-button
                      class="socialButtons facebook mx-auto"
                      target="_blank"
                      :href="variants[0].facebLink"
                    >
                      <b-img
                        class="inButtonImg "
                        target="_blank"
                        src="~assets/img/facebook.svg"
                        alt="facebook text"
                      ></b-img>
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>

            <div class="col-3">
              <b-card
                :img-src="require(`~/assets/img/${variants[1].imageShowcase + '.png'}`)"
                :img-alt="variants[1].showcaseAlt"
                img-top
                tag="article"
                style=""
                class="mb-2 mx-auto homeNavCard"
              >
                <div class="cardContent">
                  <div class="card-log mx-auto text-center">
                    <b-img
                      class="mx-auto"
                      :src="require(`~/assets/img/${variants[1].logo + '.svg'}`)"
                      :alt="variants[1].logoAlt"
                    ></b-img>
                  </div>
                  <b-card-text class="cardDescription">
                    {{ variants[1].details }}
                  </b-card-text>
                  <div class="text-center goTosite">
                    <b-button
                      class="mx-auto goToSiteBtn"
                      :to="localePath({name: 'barbaresco'},$i18n.locale)"
                    >{{ $t('home.siteButtonTxt') }}</b-button>
                  </div>
                  <div class="text-center ">
                    <b-button
                      class="socialButtons instagram mx-auto"
                      :href="variants[1].instaLink"
                    >
                      <b-img
                        class="inButtonImg "
                        src="~assets/img/instagram.svg"
                        alt="instagram text"
                      ></b-img>
                    </b-button>
                    <b-button
                      class="socialButtons facebook mx-auto"
                      target="_blank"
                      :href="variants[1].facebLink"
                    >
                      <b-img
                        class="inButtonImg "
                        target="_blank"
                        src="~assets/img/facebook.svg"
                        alt="facebook text"
                      ></b-img>
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>

            <div class="col-3">
              <b-card
                :img-src="require(`~/assets/img/${variants[2].imageShowcase + '.png'}`)"
                :img-alt="variants[2].showcaseAlt"
                img-top
                tag="article"
                style=""
                class="mb-2 mx-auto homeNavCard"
              >
                <div class="cardContent">
                  <div class="card-log mx-auto text-center">
                    <b-img
                      class="mx-auto"
                      :src="require(`~/assets/img/${variants[2].logo + '.svg'}`)"
                      :alt="variants[2].logoAlt"
                    ></b-img>
                  </div>
                  <b-card-text class="cardDescription">
                    {{ variants[2].details }}
                  </b-card-text>
                  <div class="text-center goTosite">
                    <b-button
                      class="mx-auto goToSiteBtn"
                      :to="localePath({name: 'barbaresco'},$i18n.locale)"
                    >{{ $t('home.siteButtonTxt') }}</b-button>
                  </div>
                  <div class="text-center ">
                    <b-button
                      class="socialButtons instagram mx-auto"
                      :href="variants[2].instaLink"
                    >
                      <b-img
                        class="inButtonImg "
                        src="~assets/img/instagram.svg"
                        alt="instagram text"
                      ></b-img>
                    </b-button>
                    <b-button
                      class="socialButtons facebook mx-auto"
                      target="_blank"
                      :href="variants[2].facebLink"
                    >
                      <b-img
                        class="inButtonImg "
                        target="_blank"
                        src="~assets/img/facebook.svg"
                        alt="facebook text"
                      ></b-img>
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>

            <div class="col-3">
              <b-card
                :img-src="require(`~/assets/img/${variants[3].imageShowcase + '.png'}`)"
                :img-alt="variants[3].showcaseAlt"
                img-top
                tag="article"
                style=""
                class="mb-2 mx-auto homeNavCard"
              >
                <div class="cardContent">
                  <div class="card-log mx-auto text-center">
                    <b-img
                      class="mx-auto"
                      :src="require(`~/assets/img/${variants[3].logo + '.svg'}`)"
                      :alt="variants[3].logoAlt"
                    ></b-img>
                  </div>
                  <b-card-text class="cardDescription">
                    {{ variants[3].details }}
                  </b-card-text>
                  <div class="text-center goTosite">
                    <b-button
                      class="mx-auto goToSiteBtn"
                      :to="localePath({name: 'barbaresco'},$i18n.locale)"
                    >{{ $t('home.siteButtonTxt') }}</b-button>
                  </div>
                  <div class="text-center ">
                    <b-button
                      class="socialButtons instagram mx-auto"
                      :href="variants[3].instaLink"
                    >
                      <b-img
                        class="inButtonImg "
                        src="~assets/img/instagram.svg"
                        alt="instagram text"
                      ></b-img>
                    </b-button>
                    <b-button
                      class="socialButtons facebook mx-auto"
                      target="_blank"
                      :href="variants[3].facebLink"
                    >
                      <b-img
                        class="inButtonImg "
                        target="_blank"
                        src="~assets/img/facebook.svg"
                        alt="facebook text"
                      ></b-img>
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>

          </carousel>
        </div>
      </no-ssr>

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
          siteLink: 'barbaresco',
          details: this.$t('home.descriptions[0].details'),
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
            this.$t('home.descriptions[1].details'),
          instaLink: '#',
          facebLink: '#'
        },
        {
          name: 'Le rock',
          imageShowcase: 'home-page-le-rock',
          showcaseAlt: 'Image of Le rock',
          logo: 'logo-le-rock',
          logoAlt: 'Le rock logo',
          siteLink: 'le-rock',
          details: this.$t('home.descriptions[2].details'),
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
          details: this.$t('home.descriptions[3].details'),
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
  top: 0;
  background: url("~assets/img/home-page-bg.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: fixed;

  background-color: #000000;
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;

  opacity: 0.9;
  filter: blur(0.5px);

  height: 100vh;
  width: 100vw;
}

.homePageHeading {
  text-align: center;
  margin-top: 4.5%;
  margin-bottom: 4.5%;

  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #ffffff;

  opacity: 0.8;
}

.homeNavCard {
  background: #0a0a0a;
  box-shadow: 0px 15px 45px rgba(0, 0, 0, 0.55);
  border: 0;
}

.card {
  max-width: 350px;
  width: 100%;
  min-width: 350px;
}

.cardContent {
  padding: 35px 20px;
}

.card-body {
  padding: 0;
}

.card-log,
.card-log img {
  height: 80px;
  width: 160px;
  margin-bottom: 35px;
  object-fit: scale-down;
}

.cardDescription {
  height: 94px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: $lightColor;
}

.goTosite {
  margin-bottom: 10px;
}

.goToSiteBtn {
  border: 2px solid $lightColor;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  padding: 14px 50px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: $lightColor;

  &:hover {
    border: 3px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;

    background: $lightColor;
    color: #000000;
  }
}

.socialButtons {
  border: 2px solid $lightColor;
  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  &.instagram {
    margin: 10px auto;
    padding: 10px 25px;
    transition: 500ms ease-in-out;

    .inButtonImg {
      width: 80px;
      height: 28px;
    }
  }

  &.instagram:hover {
    background-image: -moz-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background-image: -webkit-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background-image: linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
  }

  &.facebook {
    margin: 10px auto;
    padding: 12px 25px;
    -webkit-transition: background-color 500ms ease-out;
    -moz-transition: background-color 500ms ease-out;
    -o-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;

    .inButtonImg {
      width: 80px;
      height: 20px;
    }
  }

  &.facebook:hover {
    background-color: #395795;
  }
}

.inButtonImg {
  width: 80px;
  height: 20px;
}

@media (max-width: 1440px) {
  .card {
    max-width: 275px;
    width: 100%;
    min-width: 275px;
  }

  .card-image-top {
    height: 150px;
  }

  .card-log,
  .card-log img {
    height: 50px;
    width: 100px;
    margin-bottom: 35px;
  }

  .cardDescription {
    height: 60px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  .cardContent {
    padding: 16px 10px;
  }

  .goTosite {
    margin-bottom: 10px;
  }

  .goToSiteBtn {
    padding: 14px 25px;
  }

  .socialButtons {
    &.instagram {
      padding: 10px 18px;

      .inButtonImg {
        width: 70px;
        height: 24px;
      }
    }

    &.facebook {
      padding: 12px 15px;

      .inButtonImg {
        width: 70px;
        height: 14.82px;
      }
    }
  }

  .inButtonImg {
    width: 70px;
  }
}

@include mediaMenu {
  .homePageHeading {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;

    letter-spacing: 0.2em;
  }
}
</style>
