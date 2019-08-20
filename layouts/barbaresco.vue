<template>
  <div id="BarbarescoLayout">
    <Header class="d-block" />

    <TheTopContact class="d-none d-md-flex w-100" />
    <div class="content">
      <vue-page-transition :name="$store.state.animation">
        <nuxt />
      </vue-page-transition>

    </div>

    <TheFooter />
  </div>
</template>

<script>
import Header from '~/components/TheHeader'
import TheTopContact from '~/components/TheTopContact'
import TheFooter from "@/components/TheFooter.vue"

export default {
  name: "BarbarescoLayout",
  components: {
    Header,
    TheFooter,

    TheTopContact
  },

  meta: {
    animation: "overlay-up-full"
  },

}
</script>

<style lang="scss" scoped>
.content {
  min-height: calc(100vh - 120px);
}
</style>

