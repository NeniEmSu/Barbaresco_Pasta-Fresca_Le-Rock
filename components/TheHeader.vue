<template>
  <div id="theHeader">

    <b-navbar
      toggleable="xs"
      type="dark"
      class="theHeader-navbar"
      fixed="top"
    >
      <div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </div>
      <b-navbar-brand
        class=" theHeader-nav-brand"
        href="/barbaresco"
      >
        <b-img-lazy
          class=""
          src="~/assets/img/logo-barbaresco.svg"
          alt="logo barbaresco"
        >
        </b-img-lazy>
      </b-navbar-brand>

      <div>
        <b-navbar-toggle
          target="nav-collapse-2"
          class="border-0 theHead-nav-toggle"
        >
          <b-button variant="outline-light">Резервація</b-button>
        </b-navbar-toggle>

        <b-navbar-toggle
          target="nav-collapse-3"
          class="border-0 theHead-nav-toggle"
        >
          <b-img-lazy
            src="~/assets/img/Корзина.png"
            alt="Cart Icon"
          >
          </b-img-lazy>

          <div
            id="show-total"
            class="text-center mt-n3 ml-n3"
          >
            <span
              style="text-decoration: none;"
              id="item-count"
              class="text-center"
            >{{cartSize}}</span>
          </div>

        </b-navbar-toggle>
      </div>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item
            href="#"
            disabled
          >Disabled</b-nav-item>
        </b-navbar-nav>

      </b-collapse>

      <b-collapse
        id="nav-collapse-2"
        is-nav
      >
        <b-navbar-nav class="text-right">
          <b-nav-item href="#">Link2</b-nav-item>
          <b-nav-item
            href="#"
            disabled
          >Disabled2</b-nav-item>
        </b-navbar-nav>

      </b-collapse>

      <b-collapse
        id="nav-collapse-3"
        is-nav
      >
        <b-navbar-nav class="text-right">
          <b-nav-item href="#">Link3</b-nav-item>
          <b-nav-item
            href="#"
            disabled
          >Disabled3</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>

export default {
  name: "TheHeader",
  data () {
    return {
      cartSize: 0
    }
  },
}
</script>

<style lang="scss" scoped>
.theHeader-navbar {
  background-color: $darkColor;
}

.theHeader-nav-brand img {
  left: 50%;
  transform: translateX(50%);

  min-height: 60px;
  max-height: 60px;
  height: 100%;
}

.theHead-nav-toggle {
  outline: 0;
  text-decoration: none;
}

#show-total {
  span {
    padding: 0.5px 5px;
    background-color: $goldColor;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    position: relative;
    z-index: 3;
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    text-decoration: none !important;

    color: $lightColor;
    text-align: center;
  }
}
</style>
