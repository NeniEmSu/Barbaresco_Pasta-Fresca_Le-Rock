<template>
  <div id="barbaresco">
    <TheImageNavigation />
    <h1 class="text-center">Barbaresco</h1>
  </div>
</template>

<script>
import TheImageNavigation from '~/components/TheImageNavigation'
export default {
  name: 'barbaresco',
  layout: 'barbaresco',
  components: {
    TheImageNavigation
  },
  meta: {
    animation: "fade-in-right"
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
  background-image: url("~assets/img/Texture Beton.png");
  background-repeat: no-repeat;
  background-position: center;

  min-height: 100vh;
}
</style>
