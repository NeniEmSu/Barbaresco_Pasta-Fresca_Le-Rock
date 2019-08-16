export default {
  mode: 'universal',


  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      class: 'has-navbar-fixed-top',
      lang: 'uk',
      amp: true
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  manifest: {
    name: 'Barbaresco',
    short_name: 'Barbaresco',
    description: 'Top restaurants in ternopil in one place.',
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    start_url: '/',
    dir: 'auto',
    lang: 'uk',
    icons: [{
        type: "image/png",
        size: "32x32",
        src: "/favicon-32x32.png"
      },
      {
        type: "image/png",
        size: "16x16",
        src: "/favicon-16x16.png"
      },
      {
        src: "/icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/icon-128x128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "/icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    categories: ['business', 'shopping']
  },

  loading: {
    color: '#fff'
  },

  css: ['~/assets/scss/config.scss', '~/assets/fonts/fonts.css'],

  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/i18n.js',
    "~/plugins/vue-scrollto.js",
    {
      src: '~/plugins/vue-page-transition',
      ssr: true
    },
    {
      src: '~/plugins/v-owl-carousel',
      ssr: false
    },
    {
      src: '~/plugins/components',
      ssr: true
    },

    {
      src: '~/plugins/vuex-persist',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-reveal',
      ssr: false
    },
    {
      src: "~/plugins/google-maps",
      ssr: true
    }
  ],

  router: {
    middleware: [
      'animation',
      'i18n'
    ]
  },


  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      locales: [{
          iso: 'uk-Uk',
          code: 'uk'
        },
        {
          iso: 'en-US',
          code: 'en'
        },
        {
          iso: 'ru-RU',
          code: 'ru'
        }
      ]
    }],
    [
      'vue-currency-filter/nuxt',
      {
        name: 'currency',
        symbol: '₴',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true
      }
    ]
  ],

  i18n: {
    locales: ['uk', 'en', 'ru'],
    defaultLocale: 'uk',
    vueI18nLoader: true,
    lazy: false,
    langDir: null,
    seo: false,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: null
    },
    vueI18n: {
      fallbackLocale: 'uk',
      messages: {
        uk: {
          "links": {
            "home": "Головна",
            "menu": "Меню",
            "delivery": "Доставка їжі",
            "reserveAPlace": "Резервація місця",
            "reservation": "Резервація",
            "aboutUs": "Про нас",
            "atmosphere": "Атмосфера",
            "vacancy": "Ваканції",
            "contact": "Контакти",
          },
          ukrainian: "Українська",
          english: "English",
          russian: "русский",
        },
        en: {
          "links": {
            home: "Home",
            "menu": "Menu",
            "delivery": "Food delivery",
            "reserveAPlace": "Reservation of place",
            "reservation": "Reservation",
            "aboutUs": "About us",
            "atmosphere": "Atmosphere",
            "vacancy": "Vacancies",
            "contact": "Contacts"
          },
          ukrainian: "Українська",
          english: "English",
          russian: "русский"
        },
        ru: {
          "links": {
            "home": "Головна",
            "menu": "Меню",
            "delivery": "Доставка їжі",
            "reserveAPlace": "Резервація місця",
            "reservation": "Резервація",
            "aboutUs": "Про нас",
            "atmosphere": "Атмосфера",
            "vacancy": "Ваканції",
            "contact": "Контакти"
          },
          ukrainian: "Українська",
          english: "English",
          russian: "русский"
        }

      }
    }
  },

  proxy: {
    '/.netlify/functions/': {
      target: 'http://localhost:8000'
    }
  },

  styleResources: {
    scss: ["~/assets/scss/config.scss"]
  },


  purgeCSS: {
    mode: 'postcss',
    content: [
      './pages/**/*.vue',
      './layouts/**/*.vue',
      './components/**/*.vue'
    ],
    whitelist: ['html', 'body'],
    whitelistPatterns: [/cookie-consent/]
  },


  axios: {},

  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extractCSS: true,

    extend(config, {
      isDev,
      isClient
    }) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          rule.use.push({
            loader: "image-webpack-loader",
            options: {
              svgo: {
                plugins: [{
                    removeViewBox: false
                  },
                  {
                    removeDimensions: true
                  }
                ]
              }
            }
          })
        }
      })
    },

  }


}
