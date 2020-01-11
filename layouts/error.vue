<i18n>
{
  "uk": {
    "title": "Ой, щось пішло не так",
    "buttonTxt": "Повернутися на головну"
  },
  "en": {
   "title": "Oh, something went wrong",
   "buttonTxt": "Back to home"
  },
  "ru": {
    "title": "Ой, что-то пошло не так",
    "buttonTxt": "Вернуться на главную"
  }
}
</i18n>

<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <img
        src="~/assets/img/404.png"
        alt="404 imgage broken plate"
        class="img-fluid image"
      >
      <div class="col-12">
        <div class="row">
          <div class="title col-sm-6">
            <h1 class="row m-auto">
              <span class="col-6 p-0 m-auto text-center number">
                404
              </span>

              <span class="col-6 p-0 text m-auto text-left">
                {{ $t('title') }}
              </span>
            </h1>
          </div>
          <p class="description col-sm-6 m-auto text-center">
            <nuxt-link
              :to="localePath({name: 'index'},$i18n.locale)"
              exact
              class="error-link nuxt-link-active"
            >
              {{ $t('buttonTxt') }}
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || '<%= messages.client_error %>'
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.__nuxt-error-page {
  padding: 1rem;
  background: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.__nuxt-error-page img {
  margin-bottom: 48px;
}

.__nuxt-error-page .title {
  font-family: $segoeFont;
  font-style: normal;

  color: $blackColor;
}

.__nuxt-error-page .title h1 span.number {
  font-weight: bold;
  font-size: 60px;
  line-height: 80px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.__nuxt-error-page .title h1 span.text {
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;

  color: $blackColor;
}

.__nuxt-error-page a {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  align-items: center;
  text-align: center;

  padding: 10px 18px;

  color: #ffffff;
  text-decoration: none;

  background: $blackColor;
  background: $blackColor;
  border: 1px solid $blackColor;
  box-sizing: border-box;
  border-radius: 0;
}
</style>
