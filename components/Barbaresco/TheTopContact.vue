<template>
  <div
    id="top-contact "
    class="top-contacts"
  >
    <div class=" p-0 b-crumbs">
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
  data () {
    return {
      items: [
        {
          text: this.$t('links.home'),
          href: this.localePath({ name: 'index' }, this.$i18n.locale)
        },
        {
          text: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
          active: true
        }
      ]
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
.top-contacts {
  background: $darkColor;

  height: 50px;
  margin: 99px 0 0 0;
  padding: 5px 30px;
  top: 0;
  left: 0;
  box-shadow: none;

  border: 0;

  ul.contacts {
    list-style: none;
    overflow: hidden;
    padding: 0;
    text-align: center;
    margin: 0;
    height: 40px;
    line-height: 40px;
  }

  ul.contacts li.contact {
    display: inline;
    padding: 0 10px;
    margin: 0;
    line-height: 40px;
    right: 0;

    text-align: right;
  }

  ul.contacts li.contact a,
  img {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: $lightColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    text-align: center;
    @include easeOut;
  }
}

@include mediaMenu {
  img {
    height: auto;
    max-width: 25px;
  }

  .breadcrumb {
    padding: 10px 0;
  }

  ul,
  span {
    font-size: 14px;
  }
}
</style>
