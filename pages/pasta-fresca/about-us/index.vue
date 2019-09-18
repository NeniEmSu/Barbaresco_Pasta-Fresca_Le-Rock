<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Про нас",
    "description": "«Pasta Fresca»- це ресторан у самому серці Тернополя, зі смачною італійською кухнею, затишною атмосферою та чудовою музикою. Гарний інтер’єр у стилі лофт, великі панорамні вікна, літня тераса з виглядом на театральний майдан. У нашому ресторані кожен гість відчуває себе особливим та унікальним, адже ми – піклуємось наших гостей. І незважаючи на те, дорослий це або малюк, ми прислухаємося до його бажань і намагаємося зробити його гостювання у нас незабутнім святом смаку і задоволення."

  },
  "en": {
   "name": "Pasta Fresca",
   "title": "About Us",
   "description": "Pasta Fresca is a restaurant in the heart of Ternopil, with delicious Italian cuisine, cozy atmosphere and great music. Beautiful loft-style interior, large panoramic windows, summer terrace overlooking the theatrical square. At our restaurant, each guest feels special and unique, because we care about our guests. And whether it's an adult or a toddler, we listen to his wishes and try to make his stay an unforgettable holiday of taste and pleasure."

  },
  "ru": {
    "name": "Паста фреска",
    "title": "О нас",
    "description": "«Pasta Fresca» - это ресторан в самом сердце Тернополя, с вкусной итальянской кухней, уютной атмосферой и прекрасной музыкой. Красивый интерьер в стиле лофт, большие панорамные окна, летняя терраса с видом на Театральную площадь. В нашем ресторане каждый гость чувствует себя особенным и уникальным, ведь мы - заботимся наших гостей. И несмотря на то, взрослый это или ребенок, мы прислушиваемся к его желаниям и стараемся сделать его гостил у нас незабываемым праздником вкуса и удовольствия."
  }
}
</i18n>
<template>
  <div id="about-us">
    <div class="row">
      <img
        loading="lazy"
        src="~/assets/img/barbarescoAboutUs.jpg"
        class="col-lg-6 p-0 image-container"
        alt="Barbaresco About Us page image"
      >
      <div
        class="col-lg-6 m-auto"
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        <div class="m-auto content-text">
          <h1>{{$t('title')}}</h1>
          <p>{{$t('description')}}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'pasta-fresca-about-us',
  layout: 'pasta-fresca',
  nuxtI18n: {
    paths: {
      en: '/pasta-fresca/about-us',
      uk: '/pasta-fresca/pro-nas',
      ru: '/pasta-fresca/o-nas'
    }
  },
  components: {

  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: (this.$t('name') + " - " + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this.$t('name') + " -" + this.$t('description')).slice(
            0,
            320
          )
        }
      ]
    }
  },

  data () {

    return {

    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/subPagesStyles.scss";
</style>