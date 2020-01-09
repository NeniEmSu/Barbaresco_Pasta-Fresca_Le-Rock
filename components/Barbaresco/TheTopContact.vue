<template>
  <div
    id="top-contact "
    class="top-contacts"
  >
    <div class=" p-0 b-crumbs d-flex">
      <b-breadcrumb :items="items" />
    </div>
    <div class="text-right ml-auto">
      <ul class="text-right contacts">
        <li class="contact">
          <a href="tel:+380506700400">
            <span>+38 050 6 700 400</span>
          </a>
        </li>
        <span class="text-white">|</span>
        <li class="contact">
          <a href="tel:+380686700400">
            <span>+38 068 6 700 400</span>
          </a>
        </li>

        <li class="instagram contact">
          <a
            href="https://www.instagram.com/virusdetailing/"
            target="_blank"
            rel="noopener"
          >

            <img
              src="~/assets/img/instagramSocialLogo.png"
              alt="icons instagram filled"
            >

          </a>
        </li>

        <li class="facebook contact">
          <a
            href="https://www.facebook.com/virus.te.ua/"
            target="_blank"
            rel="noopener"
          >

            <img
              src="~/assets/img/facebookSocialLogo.png"
              alt="icons facebook filled"
            >

          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    // eslint-disable-next-line vue/require-default-prop
    items: {
      type: Array
    }
  },
  data () {
    return {
      // items: [
      //   {
      //     text: this.$t('links.home'),
      //     to: this.localePath({ name: 'index' }, this.$i18n.locale)
      //   },
      //   {
      //     text: this.$route.fullPath.charAt(1).toUpperCase() + this.$route.fullPath.slice(2),
      //     active: true
      //   }
      //   // {
      //   //   text: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
      //   //   active: true
      //   // }
      // ]
    }
  },
  watch: {
    $route () {
      this.items[0].text = this.$t('links.home')
      this.items[1].text = this.$route.fullPath.charAt(1).toUpperCase() + this.$route.fullPath.slice(2)
      // this.items[1].text = this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/TheTopContact.scss";
</style>
