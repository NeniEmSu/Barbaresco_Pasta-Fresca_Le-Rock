<template>
  <div
    class="container"
    id="burger"
  >
    <div class="card">
      <img
        class="card-img-top mx-auto"
        src="~/assets/img/barbarescoBurger.png"
        alt="Card image cap"
      >
      <div class="card-body">
        <h5 class="card-title mx-auto text-center">Бургер з куркою</h5>
        <p class="card-text text-left">Булка, курка, помідор, мікс салат,
          соус, гриль</p>
        <p class="card-text text-right">{{'300' | currency({symbol: 'г', thousandsSeparator: ',', fractionCount: '0', fractionSeparator: '.',  symbolPosition: 'back',  symbolSpacing: true})}}</p>

        <p class="card-text text-left">{{'75,00' | currency({symbol: 'грн', thousandsSeparator: ',', fractionCount: '0', fractionSeparator: '.',  symbolPosition: 'back',  symbolSpacing: true})}}</p>
        <a
          href="#"
          class="btn text-right"
        >Замовити</a>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
#burger {
}
.card {
  max-width: 222px;
  min-width: 222px;
  width: 100%;

  background-color: transparent;

  .card-img-top {
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.45);
    border-radius: 50%;
    max-width: 150px;
    min-width: 150px;
    height: 150px;
    width: 100%;
    max-height: 150px;
  }
}
</style>
