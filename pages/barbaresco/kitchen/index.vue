<i18n>
{
  "uk": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "Ми спеціалізуємось на приготуванні ручної піци, оригінальних ролів та бургерів. Головна ціль для нас – це в першу чергу готувати смачну їжу з якісних та свіжих продуктів із задоволенням та душею. Кожна наша страва не просто насичує, вона заряджає енергією і радістю, яку ми вкладаємо в неї.",
    "description1": "Щодня ми вдосконалюємось і зростаємо для вас, щоб ви завжди відчували себе особливим та унікальним. Адже кожен гість який до нас завітав – є важливим без виключення, тому наша команда зробить усе, щоб ваше гостювання у нас стало незабутнім святом смаку і задоволення."
  },
  "en": {
    "name": "Pasta Fresca",
   "title": "Kitchen",
   "description": "We specialize in making handmade pizzas, original rolls and burgers. The main goal for us is first and foremost to prepare delicious food with quality and fresh products with pleasure and soul. Not only does our food saturate, it charges the energy and joy that we put into it.",
   "description1": "Every day we refine and grow for you so that you always feel special and unique. After all, every guest who came to us is important without exception, so our team will do everything to make your stay with us an unforgettable holiday of taste and pleasure."

  },
  "ru": {
    "name": "Паста фреска",
    "title": "Кухня",
    "description": "Мы специализируемся на приготовлении ручной пиццы, оригинальных роллов и бургеров. Главная цель для нас - это в первую очередь готовить вкусную еду из качественных и свежих продуктов с удовольствием и душой. Каждая наша блюдо не просто насыщает, она заряжает энергией и радостью, которую мы вкладываем в нее.",
    "description1": "Ежедневно мы совершенствуемся и растем для вас, чтобы вы всегда чувствовали себя особенным и уникальным. Ведь каждый гость который к нам пришел - важно без исключения, поэтому наша команда сделает все, чтобы ваше гостил у нас стало незабываемым праздником вкуса и удовольствия."
  }
}
</i18n>

<template>
  <div id="barbaresco-kitchen">
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
                  <p>
                    {{ $t('description') }}
                    <!-- <br>
                    {{ $t('description1') }} -->
                  </p>
                  <p>
                    <!-- {{ $t('description') }}
                    <br> -->
                    {{ $t('description1') }}
                  </p>
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
  name: 'BarbarescoKitchen',
  layout: 'barbaresco',
  nuxtI18n: {
    paths: {
      en: '/barbaresco/kitchen',
      uk: '/barbaresco/kuhnja',
      ru: '/barbaresco/kuhnja'
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
          // text: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
          text: this.$t('links.kitchen'),
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
          content: (this.$t('name') + ' -' + this.$t('description') + this.$t('description1')).slice(
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
  background: url(~assets/img/barbaresco-kitchen.jpg);
}
@import "~assets/scss/subPagesStylesNew.scss";
</style>
