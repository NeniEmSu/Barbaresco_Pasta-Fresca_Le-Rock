<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "Родзинкою нашого закладу є паста власного виробництва, яку готуємо з італійської муки з твердих сортів пшениці- Semola di Grano, а отже вона не зашкодить вашій фігурі. Рахуємо, що чудовий ранок починається із сніданку. Наші сніданки корисні та поживні, забезпечать енергією на увесь день, готуємо їх щодня з 10:00 по 00:30. Великий вибір страв з морепродуктів та неймовірно смачні десерти. Широкий вибір вин, смачна кава, та наше молоде італійське вино, яке нікого не залишає байдужим."

  },
  "en": {
    "name": "Pasta Fresca",
   "title": "Kitchen",
   "description": "The highlight of our establishment is a paste of our own production, which is made from Italian flour from durum wheat Semola di Grano, and therefore it will not damage your figure. We count on a great morning for breakfast. Our breakfasts are healthy and nutritious, they will provide energy for the whole day, we prepare them daily from 10:00 to 00:30. Wide selection of seafood dishes and delicious desserts. A wide selection of wines, delicious coffee, and our young Italian wine that leaves no one indifferent."

  },
  "ru": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "Изюминкой нашего заведения есть паста собственного производства, которую готовим с итальянской муки из твердых сортов пшеници- Semola di Grano, а значит она не повредит вашей фигуре. Считаем, что чудесное утро начинается с завтрака. Наши завтраки полезны и питательны, обеспечат энергией на весь день, готовим их ежедневно с 10:00 до 00:30. Большой выбор блюд из морепродуктов и невероятно вкусные десерты. Широкий выбор вин, вкусный кофе, и наше молодое итальянское вино, которое никого не оставляет равнодушным."
  }
}
</i18n>

<template>
  <div id="pasta-fresca-kitchen">
    <div class="row">
      <img
        src="~/assets/img/pasta-fresca-kitchen.jpg"
        class="col-lg-6 p-0 image-container"
        alt="Barbaresco Atmosphere page image"
      >
      <div class="col-lg-6 m-auto p-5">
        <h1>{{$t('title')}}</h1>
        <p>{{$t('description')}}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'pasta-fresca-kitchen',
  layout: 'pasta-fresca',
  nuxtI18n: {
    paths: {
      en: '/pasta-fresca/kitchen',
      uk: '/pasta-fresca/kuhnja',
      ru: '/pasta-fresca/kuhnja'
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
.image-container {
  min-height: calc(100vh - 120px);

  object-fit: cover;
  object-position: center;
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
