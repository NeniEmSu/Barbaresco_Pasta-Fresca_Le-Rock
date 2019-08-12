<template>
  <div>
    <Header />
    <TheTopContact />
    <vue-page-transition :name="$store.state.animation">
      <nuxt />
    </vue-page-transition>
  </div>
</template>

<script>
import Header from '~/components/TheHeader'
import TheTopContact from '~/components/TheTopContact'
export default {
  components: {
    Header,
    TheTopContact
  }

}
</script>

