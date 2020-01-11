<i18n>
{
  "uk": {
    "title": "Про нас",
    "description": "Barbaresco City Cafe затишний та світлий заклад, розташоване неподалік від центру міста. Відкритий з 2016 року. Щодня нас відвідує понад тисяча гостей, яких ми радо зустрічаємо та даруємо можливість відволіктись від міської метушні, насолодитись смачними стравами та освіжаючими напоями. Заклад пропонує страви європейської та японської кухні за доступними цінами. Привітний та обізнаний персонал завжди швидко та влучно допоможе обрати страви, які будуть вам до смаку."

  },
  "en": {
   "title": "About Us",
   "description": "Barbaresco City Cafe is a cozy and bright establishment located near the city center. Opened since 2016. We are visited by over a thousand guests every day, whom we welcome and give the opportunity to get away from the bustle of the city, enjoy delicious meals and refreshing drinks. The establishment offers European and Japanese cuisine at affordable prices. The friendly and knowledgeable staff will always help you quickly and accurately select the dishes you like."

  },
  "ru": {
    "title": "О нас",
    "description": "Barbaresco City Cafe уютный и светлый заведение, расположенное недалеко от центра города. Открыт с 2016 года. Ежедневно нас посещает более тысячи гостей, которых мы с радостью встречаем и дарим возможность отвлечься от городской суеты, насладиться вкусными блюдами и освежающими напитками. Заведение предлагает блюда европейской и японской кухни по доступным ценам. Приветливый и знаком персонал всегда быстро и точно поможет выбрать блюда, которые будут вам по вкусу."
  }
}
</i18n>
<template>
  <div id="about-us">
    <TheTopContact
      :items="items"
      class="d-none d-md-flex w-100"
    />
    <section id="section2" class="panel overview" data-section-name="overview">
      <div id="transcroller-body" class="block1 aos-all">
        <div class="row mx-0">
          <div class="col-sm-6 p-0 col-xs-12 left-image" />

          <div class="col-sm-6 p-0 col-xs-12 left-content verticalcenter">
            <div class="block1-left" style="top: auto; transform: none;">
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
  name: 'BarbarescoAboutUs',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/about-us',
      uk: '/barbaresco/pro-nas',
      ru: '/barbaresco/o-nas'
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
          text: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
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
    background: url(~assets/img/barbarescoAboutUs.jpg);
  }
  @import "~assets/scss/subPagesStylesNew.scss";
</style>
