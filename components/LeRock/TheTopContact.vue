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

            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0" /><path d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0" /><path d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0" /></svg>

          </a>
        </li>

        <li class="facebook contact">
          <a
            href="https://www.facebook.com/virus.te.ua/"
            target="_blank"
            rel="noopener"
          >

            <!-- <img
              src="~/assets/img/facebookSocialLogo.png"
              alt="icons facebook filled"
            > -->

            <svg
              id="Capa_1"
              style="enable-background:new 0 0 90 90;"
              version="1.1"
              viewBox="0 0 90 90"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ><g><g><path id="Facebook__x28_alt_x29_" d="M90,15c0-7.9-7.1-15-15-15H15C7.1,0,0,7.1,0,15v60c0,7.9,7.1,15,15,15h30V56H34V41h11v-5.8     C45,25.1,52.6,16,61.9,16H74v15H61.9c-1.3,0-2.9,1.6-2.9,4v6h15v15H59v34h16c7.9,0,15-7.1,15-15V15z" /></g></g></svg>

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
