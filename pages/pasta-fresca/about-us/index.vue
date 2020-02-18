<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Про нас",
    "description": "«Pasta Fresca»- це ресторан у самому серці Тернополя, зі смачною італійською кухнею, затишною атмосферою та чудовою музикою. Гарний інтер’єр у стилі лофт, великі панорамні вікна, літня тераса з виглядом на театральний майдан.",
    "description2": "У нашому ресторані кожен гість відчуває себе особливим та унікальним, адже ми – піклуємось наших гостей. І незважаючи на те, дорослий це або малюк, ми прислухаємося до його бажань і намагаємося зробити його гостювання у нас незабутнім святом смаку і задоволення."

  },
  "en": {
   "name": "Pasta Fresca",
   "title": "About Us",
   "description": "Pasta Fresca is a restaurant in the heart of Ternopil, with delicious Italian cuisine, cozy atmosphere and great music. Beautiful loft-style interior, large panoramic windows, summer terrace overlooking the theatrical square.",
  "description2": "At our restaurant, each guest feels special and unique, because we care about our guests. And whether it's an adult or a toddler, we listen to his wishes and try to make his stay an unforgettable holiday of taste and pleasure."
  },
  "ru": {
    "name": "Паста фреска",
    "title": "О нас",
    "description": "«Pasta Fresca» - это ресторан в самом сердце Тернополя, с вкусной итальянской кухней, уютной атмосферой и прекрасной музыкой. Красивый интерьер в стиле лофт, большие панорамные окна, летняя терраса с видом на Театральную площадь.",
    "description2": "В нашем ресторане каждый гость чувствует себя особенным и уникальным, ведь мы - заботимся наших гостей. И несмотря на то, взрослый это или ребенок, мы прислушиваемся к его желаниям и стараемся сделать его гостил у нас незабываемым праздником вкуса и удовольствия."
  }
}
</i18n>
<template>
  <div
    v-once
    id="about-us"
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
                  <p>{{ $t('description2') }}</p>
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
import TheTopContact from '~/components/PastaFresca/TheTopContactPastaFresca'
export default {
  name: 'PastaFrescaAboutUs',
  layout: 'pasta-fresca',
  nuxtI18n: {
    paths: {
      en: '/pasta-fresca/about-us',
      uk: '/pasta-fresca/pro-nas',
      ru: '/pasta-fresca/o-nas'
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
          to: this.localePath({ name: 'pasta-fresca' }, this.$i18n.locale)
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
      title: (this.$t('name') + ' - ' + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (this.$t('name') + ' -' + this.$t('description') + this.$t('description2')).slice(
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
  background: url(~assets/img/pastaFrescaAboutUs.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
