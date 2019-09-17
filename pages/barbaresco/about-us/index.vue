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
    <div class="row">
      <img
        src="~/assets/img/barbarescoAboutUs.jpg"
        class="col-lg-6 p-0 image-container"
        alt="Barbaresco About Us page image"
      >
      <div
        class="col-lg-6 m-auto p-5"
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        <h1>{{$t('title')}}</h1>
        <p>{{$t('description')}}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'barbaresco-about-us',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/about-us',
      uk: '/barbaresco/pro-nas',
      ru: '/barbaresco/o-nas'
    }
  },
  components: {

  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: ("Barbaresco - " + this.$t('title')).slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: ("Barbaresco -" + this.$t('description')).slice(
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
.image-container {
  min-height: calc(100vh - 120px);

  object-fit: cover;
  object-position: left center;
}

h1 {
  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 106px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #000000;
}

p {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 140.4%;

  color: #000000;
}

@media (max-width: 1280px) {
  h1 {
    font-size: 60px;
    line-height: 80px;
  }

  p {
    font-size: 24px;
  }
}
@media (max-width: 993px) {
  .image-container {
    min-height: 200px;
    max-height: 200px;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  h1 {
    font-size: 60px;
    line-height: 80px;
  }

  p {
    font-size: 24px;
  }
}

@media (max-width: 500px) {
  .image-container {
    min-height: 200px;
    max-height: 200px;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  h1 {
    font-size: 40px;
    line-height: 53px;
  }

  p {
    font-size: 18px;
    line-height: 140.4%;
  }
}
</style>
