<i18n>
{
  "uk": {
    "language": "Мова"
  },
  "en": {
   "language": "Language"
  },
  "ru": {
    "language": "язык"
  }
}
</i18n>

<template>
  <div>

    <div class="fixed-top text-right language">

      <b-dropdown
        id="dropdown-1"
        :text="$t('language')"
        class="m-md-2 "
      >
        <b-dropdown-item
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
        >English</b-dropdown-item>
        <b-dropdown-item
          v-if="$i18n.locale !== 'uk'"
          :to="switchLocalePath('uk')"
        >Українська</b-dropdown-item>
        <b-dropdown-item
          v-if="$i18n.locale !== 'ru'"
          :to="switchLocalePath('ru')"
        >русский</b-dropdown-item>

      </b-dropdown>

    </div>

    <vue-page-transition :name="$store.state.animation">
      <nuxt />
    </vue-page-transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@charset "UTF-8";

body {
  background-color: $backgroudColor;
  color: $darkColor;
  width: 100vw;
  height: 100vh;
  padding: 0;
  overflow-x: hidden;

  line-height: 1.5;
}

.language {
  .langBtn,
  .dropdown-toggle {
    border: 2px solid $lightColor;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    border-radius: 0;
    box-sizing: border-box;

    background-color: transparent;

    padding: 14px 50px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: $lightColor;

    &:hover {
      border: 3px solid;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(255, 255, 255, 0.2);
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;

      background: $lightColor;
      color: #000000;
    }
  }
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom,
.overlay-down-full {
  background: $darkColor !important;
  transition-duration: 350ms !important;
  animation-duration: 400ms;
}

img {
  height: auto;
  max-width: 100%;
}

figure {
  margin: 0 0 20px 0;
  padding: 0;
  text-align: center;
}

figcaption {
  display: block;
  text-align: center;
  font-size: 0.8rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline: none !important;
  font-family: $mainFont;
}

figure {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 1500ms;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

button {
  cursor: pointer;
}

::-webkit-scrollbar-track {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  background-color: $backgroudColor;
}

::-webkit-scrollbar {
  border-radius: 50px;
  width: 6px;
  background-color: $backgroudColor;
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(149, 150, 150);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

select {
  -webkit-appearance: none;
  -o-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

  background-image: url("~assets/img/select.png");
  background-position: 95% center;
  background-repeat: no-repeat;

  cursor: pointer;

  &.active,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  }
}

select option {
  background-color: $lightColor;
  color: $darkColor;
  text-align: center;
  white-space: pre-line;
  font-weight: 400;
}
.jumbotron {
  margin: 0 !important;
  padding: 20px 0 0px 0;
}

main {
  position: relative;
  min-height: 80vh;
  height: 100%;
}

.container {
  padding: 0 20px;
}

.breadcrumb {
  background-color: transparent;
  box-shadow: none;
  padding: 12px 0;

  li {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #8b8b8b;
  }
  h1 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-top: -20px;
    margin-left: 10px;

    color: #8b8b8b;
  }

  a {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #8b8b8b;

    :hover {
      color: #8c8c8c;
    }
  }
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #8b8b8b;
  content: "\232a";
  font-size: 18px;
  line-height: 18px;
}

@include mediaMenu {
  body {
    margin-top: 55px;
  }
  main {
    position: relative;
    min-height: 80vh;
    height: 100%;
  }

  .language {
    .langBtn,
    .dropdown-toggle {
      padding: 10px 25px;

      font-size: 14px;
      line-height: 16px;
    }
  }
}

@include mediaXSm {
  .scrollable-element {
    scrollbar-width: none;
  }

  .breadcrumb {
    padding: 12px 0;

    li {
      font-size: 16px;
      line-height: 18px;
    }

    a {
      font-size: 16px;
      line-height: 18px;
    }
  }

  .breadcrumb-item + .breadcrumb-item::before {
    font-size: 16px;
    line-height: 16px;
  }

  .language {
    .langBtn,
    .dropdown-toggle {
      padding: 5px 15px;

      font-size: 14px;
      line-height: 16px;
    }
  }
}

@include mediaXSm {
  .breadcrumb {
    padding: 12px 0;

    li {
      font-size: 13px;
      line-height: 14px;
    }

    a {
      font-size: 13px;
      line-height: 14px;
    }
  }

  .breadcrumb-item + .breadcrumb-item::before {
    font-size: 13px;
    line-height: 13px;
  }
}
</style>
