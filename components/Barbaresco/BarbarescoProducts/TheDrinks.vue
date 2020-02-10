<template>
  <div
    id="drinks"
    class="container "
  >
    <div class="content row">
      <img
        class="col-md-6"
        src="~assets/img/pasta-fresca-drinks-menu-1.jpg"
        alt="pasta-fresca-drinks-menu-1"
      >
      <img
        class="col-md-6"
        src="~assets/img/pasta-fresca-drinks-menu-2.jpg"
        alt="pasta-fresca-drinks-menu-2"
      >
      <img
        class="col-md-6"
        src="~assets/img/pasta-fresca-drinks-menu-3.jpg"
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
