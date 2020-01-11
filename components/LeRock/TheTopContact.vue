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
          <a href="tel:+380671154515">
            <span>+38 067 115 45 15</span>
          </a>
        </li>

        <li class="instagram contact">
          <a
            href="https://www.instagram.com/lerock2017/?igshid=1sbpswqx2738u"
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

    }
  },
  watch: {
    $route () {
      this.items[0].text = this.$t('links.home')
      this.items[1].text = this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/TheTopContact.scss";
</style>
