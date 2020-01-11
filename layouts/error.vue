<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <img
        src="~/assets/img/404.png"
        alt="404 imgage in a house"
        class="img-fluid"
      >

      <div class="title">
        Ой, щось пішло не так
      </div>
      <p class="description">
        <nuxt-link
          :to="localePath({name: 'index'},$i18n.locale)"
          exact
          class="error-link nuxt-link-active"
        >
          Повернутися на головну
        </nuxt-link>
      </p>
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

<style scoped>
.__nuxt-error-page {
  padding: 1rem;
  background: #f7f8fb;
  color: #47494e;
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
.__nuxt-error-page .error {
  max-width: 500px;
}
.__nuxt-error-page .title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;

  text-align: center;
  text-transform: uppercase;

  color: #000000;

  margin-top: 60px;
  margin-bottom: 100px;
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

  background: #000000;
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 0;
}
</style>
