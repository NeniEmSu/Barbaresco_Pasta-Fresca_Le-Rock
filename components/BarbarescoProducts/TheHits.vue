<template>
  <div
    class="container "
    id="theHits"
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
            src="~/assets/img/barbarescoHits.png"
            alt="Card image cap"
          >
          <div class="card-body">
            <h5 class="card-title mx-auto text-center">Хіти</h5>
            <p class="card-text text-left">Булка, курка, помідор, мікс салат,
              соус, гриль &nbsp; &nbsp; &nbsp; &nbsp; <span class="card-text">400г</span></p>

            <div class="row">
              <div class="col-4 pr-0 my-auto">
                <p class="card-text cost my-auto">80,00</p>
              </div>
              <div class="col-8  my-auto">
                <button class="btn my-auto mr-auto">Замовити</button></div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'theHits',
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCards.scss";
</style>
