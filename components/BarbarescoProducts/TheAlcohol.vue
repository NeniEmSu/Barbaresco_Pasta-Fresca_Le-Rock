<i18n>
{
  "uk": {
    "whilsky": "Віскі"
  },
  "en": {
   "whilsky": "Whilsky"
  },
  "ru": {
    "whilsky": "Виски"
  }
}
</i18n>

<template>
  <div
    class="container "
    id="theAlcohol"
  >

    <div class="content">

      <div class="row">
        <div
          class="card"
          v-for="n in 10"
          :key="n"
        >

          <img
            class="card-img-top mx-auto"
            src="~/assets/img/barbarescoAlcohol.png"
            alt="Card image cap"
          >
          <div class="card-body">
            <div class="row">
              <div class="col-8 my-auto">
                <h5 class="card-title mx-auto text-left">{{ $t('whilsky')}}</h5>
              </div>
              <div class="col-4  my-auto">
                <p><span class="card-text quantity">0.25л</span></p>
              </div>
            </div>

            <div class="row">
              <div class="col-4 pr-0 my-auto">
                <p class="card-text cost my-auto">35,00</p>
              </div>
              <div class="col-8  my-auto">
                <a
                  href="#"
                  class="btn my-auto mr-auto"
                >Замовити</a></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'TheAlcohol',
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  margin: 20px auto;
}

.card {
  max-width: 200px;
  min-width: 200px;
  width: 100%;
  height: 262px;
  padding: 0;
  margin: 20px auto;

  border: 0;

  background-color: transparent;

  .card-img-top {
    background-color: $darkColor;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.45);
    border-radius: 50%;
    max-width: 150px;
    min-width: 150px;
    height: 150px;
    width: 100%;
    max-height: 150px;

    margin-bottom: 5px;
  }
}

.card-body {
  padding: 0;
}

.card-title {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  text-transform: uppercase;

  color: #000000;

  margin-top: 5px;
  margin-bottom: 5px;
}

.card-text {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #000000;

  margin-bottom: 10px;

  &.cost {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }
}

.btn {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  padding: 5px 8px;

  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 0;
}
</style>
