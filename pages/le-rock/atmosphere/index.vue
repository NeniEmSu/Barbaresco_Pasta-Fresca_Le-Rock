<i18n>
{
  "uk": {
    "title": "Інтер'єр",
    "description": "Просторий зал поєднує у собі декілька відпочинкових зон: столики з панорамними вікнами, м’які дивани, барна стійка та столи з яких можна спостерігати за виступами гуртів, чи переглядати трансляцію футбольних матчів! У закладі є курильна кімната що дозволяє нашим гостям почувати себе розкуто і впевнено!"

  },
  "en": {
   "title": "Interior",
   "description": "The spacious hall combines several recreational areas: tables with panoramic windows, soft sofas, a bar counter and tables from which you can watch the performances of the groups, or watch live football broadcasts! The establishment has a smoking room that allows our guests to feel relaxed and confident!"

  },
  "ru": {
    "title": "Интерьер",
    "description": "Просторный зал сочетает в себе несколько зон отдыха: столики с панорамными окнами, мягкие диваны, барная стойка и столы из которых можно наблюдать за выступлениями групп, или просматривать трансляцию футбольных матчей! В заведении есть курительная комната что позволяет нашим гостям чувствовать себя раскованно и уверенно!"
  }
}
</i18n>

<template>
  <div id="atmosphere">
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
  name: 'LeRockAtmosphere',
  layout: 'le-rock',
  nuxtI18n: {
    paths: {
      en: '/le-rock/atmosphere',
      uk: '/le-rock/atmosfera',
      ru: '/le-rock/atmosfera'
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
          text: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
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
  background: url(~assets/img/barbarescoAtmosphere.jpg);
}

@import "~assets/scss/subPagesStylesNew.scss";
</style>
