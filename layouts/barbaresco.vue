<template>
  <div>
    <Header />
    <TheTopContact />
    <vue-page-transition :name="$store.state.animation">
      <nuxt />
    </vue-page-transition>
    <TheFooter />
  </div>
</template>

<script>
import Header from '~/components/TheHeader'
import TheTopContact from '~/components/TheTopContact'
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    Header,
    TheFooter,
    TheTopContact
  }

}
</script>

