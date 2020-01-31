<i18n>
{
  "uk": {
    "title": "Про нас",
    "description": "Крафтовий паб \"Le Rock\"розташувався в самому центрі міста Тернопіль.  Фундаментом нашого закладу є власна пивоварня де ми варимо крафтове пиво! А у самому закладі на вас чекає приємна атмосфера, привітний персонал ,чудова кухня і звісно смачне питке крафтове пиво. В пабі по вихідних проходять виступи відомих  і місцевих гуртів. Проходять трансляції футбольних матчів, або подій світового маштабу. Крафт паб \"Le Rock\" вдалий вибір для будь-якої нагоди..."

  },
  "en": {
   "title": "About Us",
   "description": "Kraft Pub \"Le Rock\" is located in the heart of Ternopil. The foundation of our establishment is our own brewery where we brew craft beer! And at the establishment you will find a pleasant atmosphere, friendly staff, excellent cuisine and of course delicious craft beer. Performances of famous and local bands take place in the pub on weekends. There are broadcasts of football matches or world-wide events. Kraft pub \"Le Rock\" a good choice for any occasion ..."

  },
  "ru": {
    "title": "О нас",
    "description": "Крафтовой ресторан \"Le Rock\" расположился в самом центре города Тернополь. Фундаментом нашего заведения есть собственная пивоварня где мы варим крафтовой пиво! А в самом заведении вас ждет приятная атмосфера, приветливый персонал, замечательная кухня и конечно вкусное пытка крафтовой пиво. В пабе по выходным проходят выступления известных и местных групп. Проходят трансляции футбольных матчей, или событий мирового масштаба. Крафт ресторан \"Le Rock\" удачный выбор для любого случая ..."
  }
}
</i18n>
<template>
  <div id="about-us">
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
import TheTopContact from '~/components/LeRock/TheTopContact'
export default {
  name: 'LeRockAboutUs',
  layout: 'le-rock',
  nuxtI18n: {
    paths: {
      en: '/le-rock/about-us',
      uk: '/le-rock/pro-nas',
      ru: '/le-rock/o-nas'
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
          text: this.$t('links.aboutUs'),
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
          content: ('Le Rock -' + this.$t('description')).slice(
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
  background: url(~assets/img/leRockAboutUs.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
