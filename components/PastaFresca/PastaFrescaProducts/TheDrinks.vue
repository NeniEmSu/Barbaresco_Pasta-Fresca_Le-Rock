<i18n>
{
  "uk": {
    "coffee": "КАВА",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНІ НАПОЇ",
    "lemonade": "ЛИМОНАДИ",
    "smoothy": "СМУЗІ",
    "milkShake": "МІЛКШЕЙКИ",
    "noneAlcoholicDrinks": "БЕЗ АЛКОГОЛЬНІ НАПОЇ",
    "order": "Замовити"
  },
  "en": {
   "coffee": "COFFEE",
   "tea": "Tea",
   "coldDrinks": "Cold Drinks",
   "lemonade": "Lemonade",
   "smoothy": "Smoothies",
    "milkShake": "MILKSHAKES",
    "noneAlcoholicDrinks": "NON ALCOHOLIC BEVERAGES",
    "order": "Order"
  },
  "ru": {
    "coffee": "КОФЕ",
    "tea": "ЧАЙ",
    "coldDrinks": "ХОЛОДНЫЕ НАПИТКИ",
    "lemonade": "ЛИМОНАД",
    "smoothy": "ПОЛОСЕ",
    "milkShake": "Милкшейк",
    "noneAlcoholicDrinks": "без алкогольные напитки",
    "order": "Заказать"
  }
}
</i18n>

<template>
  <div
    id="drinks"
    class="container "
  >
    <div class="content row">
      <img
        class="col-md-6 p-sm-0"
        src="~assets/img/pasta-fresca-drinks-menu-1.jpg"
        alt="pasta-fresca-drinks-menu-1"
      >
      <img
        class="col-md-6 p-md-0"
        src="~assets/img/pasta-fresca-drinks-menu-2.jpg"
        alt="pasta-fresca-drinks-menu-1"
      >
      <img
        class="col-md-6 p-md-0"
        src="~assets/img/pasta-fresca-drinks-menu-1.jpg"
        alt="pasta-fresca-drinks-menu-3"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheDrinks',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/productCardsWithCategoriesWhite.scss";

img {
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
}
</style>
