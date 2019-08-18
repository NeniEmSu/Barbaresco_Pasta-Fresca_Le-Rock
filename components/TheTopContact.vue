<template>
  <div
    class="top-contacts"
    id="top-contact"
  >

    <div class="">
      <ul class="text-right contacts">

        <li class="contact">
          <a href="tel:+380506700400">
            <span>+38 050 6 700 400</span>
          </a>
        </li>

        <li class="contact">
          <a href="tel:+380506700400">
            <span>+38 050 6 700 400</span>
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
            />

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
            />

          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.top-contacts {
  background: $darkColor;
  width: 100%;
  height: 50px;
  margin: 100px 0 0 0;
  padding: 0;
  top: 0;
  left: 0;

  ul.contacts {
    list-style: none;
    overflow: hidden;
    padding: 0;
    text-align: center;
    margin: 0;
    height: 40px;
    line-height: 40px;
    margin-right: 50px;
  }

  ul.contacts li.contact {
    display: inline-block;
    padding: 0 20px;
    margin: 0;
    height: 40px;
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
    transition: all ease-in-out 300ms;
    -webkit-transition: all ease-in-out 300ms;
    -moz-transition: all ease-in-out 300ms;
    -ms-transition: all ease-in-out 300ms;
    -o-transition: all ease-in-out 300ms;
  }
}

@include mediaMenu {
}
</style>
