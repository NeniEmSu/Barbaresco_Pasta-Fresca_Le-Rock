<template>
  <div id="barbaresco">
    <TheImageNavigation />
    <TheImagedProductNav />

    <TheBugers />
    <TheBottomCarousel />

    <TheMapComponent />
  </div>
</template>

<script>
import TheImageNavigation from '~/components/TheImageNavigation'
import TheImagedProductNav from '~/components/TheImagedProductNav'
import TheMapComponent from '~/components/TheMapComponent'
import TheBugers from '~/components/TheBugers'
import TheBottomCarousel from '~/components/TheBottomCarousel'
export default {
  name: 'barbaresco',
  layout: 'barbaresco',
  components: {
    TheImageNavigation,
    TheImagedProductNav,
    TheMapComponent,
    TheBugers,
    TheBottomCarousel
  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: "Barbaresco".slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Barbaresco.".slice(
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
#barbaresco {
  background-image: url("~assets/img/textureBeton.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
