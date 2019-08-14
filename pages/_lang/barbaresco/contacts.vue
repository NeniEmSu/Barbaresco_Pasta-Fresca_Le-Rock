<template>
  <div id="about-us">
    <div class="row">
      <div class="col-md-6 p-0 image-container">

      </div>
      <div class="col-md-6 m-auto p-0 text-center">
        <div class="inner-text px-5">
          <h1>Контакти</h1>
          <div class="text-center">
            <p>Вул. Кн. Острозького 14</p>
            <p>Тел.: <a
                href="tel:+380506700400"
                class="col-12 m-auto"
              >
                <span>+38 050 6 700 400</span>
              </a><a
                href="tel:+380506700400"
                class="col-12 m-auto"
              >
                <span>+38 050 6 700 400</span>
              </a></p>
            <p>Заклад працює для Вас <b>10:00-01:00</b> (Пн-Нд)</p>
          </div>
        </div>
        <style>
        .GMap__Wrapper {
          width: 100%;
          height: calc(100vh - 500px);
        }
        </style>
        <TheContactMap />
      </div>
    </div>

  </div>
</template>

<script>
import TheContactMap from '~/components/TheContactMap'

export default {
  name: 'about-us',
  layout: 'barbaresco',
  components: {
    TheContactMap
  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: "Barbaresco - About us".slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Barbaresco - About us.".slice(
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
  height: calc(100vh - 120px);
  background-image: url("~assets/img/barbarescoContact.png");
  background-position: center;
  background-repeat: no-repeat;
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

a {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 140.4%;

  color: #000000;
}
</style>
