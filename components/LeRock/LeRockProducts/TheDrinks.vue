<template>
  <div
    v-once
    id="drinks"
    class="container "
  >
    <style>
      body>.expandable-image.expanded {
      max-width: 100% !important;
      }

      .expandable-image img {
      margin-bottom: 30px;
      }

      body>.expandable-image.expanded>img {
      object-fit: scale-down;
      }

      .expand-button svg path {
      fill: black;
      }
    </style>
    <div class="content row">
      <expandable-image
        :close-on-background-click="true"
        class="col-md-6"
        :src="img1"
        alt="le-rock-drinks-menu-1"
      />
      <expandable-image
        :close-on-background-click="true"
        class="col-md-6"
        :src="img2"
        alt="le-rock-drinks-menu-2"
      />
      <expandable-image
        :close-on-background-click="true"
        class="col-md-6"
        :src="img3"
        alt="le-rock-drinks-menu-3"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheDrinks',
  components: {

  },
  data () {
    return {
      img1: require('~/assets/img/le-rock-drinks-menu-1.jpg'),
      img2: require('~/assets/img/le-rock-drinks-menu-2.jpg'),
      img3: require('~/assets/img/le-rock-drinks-menu-3.jpg')
    }
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
