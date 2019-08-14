<template>
  <div id="atmosphere">
    <div class="row">
      <div class="col-md-6 p-0 image-container">

      </div>
      <div class="col-md-6 m-auto p-5">
        <h1>Інтер'єр</h1>
        <p>Виразний індустріальний стиль лофт.
          Приміщення згідно обраного стилю оформлено в холодних відтінках.
          Просторий зал поєднує у собі декілька відпочинкових зон: столики з панорамними вікнами, м’які дивани, барна стійка та балкон. У закладі є дитяча кімната для наших найменших гостей.</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'atmosphere',
  layout: 'barbaresco',
  components: {

  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: "Barbaresco - Atmosphere".slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Barbaresco - Atmosphere.".slice(
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
  background-image: url("~assets/img/barbarescoAtmosphere.png");
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
</style>
