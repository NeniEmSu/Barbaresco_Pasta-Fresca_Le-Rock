export default {
  mode: 'universal',


  head: {
    title: 'Barbaresco',
    htmlAttrs: {
      class: 'has-navbar-fixed-top',
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
        content: "My awe-inspiring Nuxt.js project"
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
    background_color: '#0A0A0A',
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
    color: '#E0A671'
  },

  css: ['~/assets/css/normalize.css', '~/assets/scss/config.scss', '~/assets/fonts/fonts.css'],

  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/i18n.js',
    "~/plugins/vue-scrollto.js",
    {
      src: '~/plugins/vue-page-transition',
      ssr: true
    }, {
      src: '~/plugins/Datepicker',
      mode: 'client'
    },
    {
      src: '~/plugins/v-owl-carousel',
      mode: 'client'
    },
    {
      src: '~/plugins/components',
      ssr: true
    },

    {
      src: '~/plugins/vuex-persist',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-scroll-reveal',
      mode: 'client'
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
      seo: true,
      baseUrl: 'https://barbaresco.netlify.com',
      locales: [{
          iso: 'uk-Uk',
          code: 'uk',
          name: 'Українська'
        },
        {
          iso: 'en-US',
          code: 'en',
          name: 'English'
        },
        {
          iso: 'ru-RU',
          code: 'ru',
          name: 'Русский'
        }
      ]
    }],
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-62479125-9"
      }
    ],
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
    defaultLocale: 'uk',
    vueI18nLoader: true,
    lazy: false,
    langDir: null,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'uk'
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
          "ukrainian": "Українська",
          "english": "English",
          "russian": "Русский"
        },
        en: {
          "links": {
            "home": "Home",
            "menu": "Menu",
            "delivery": "Food delivery",
            "reserveAPlace": "Reservation of place",
            "reservation": "Reservation",
            "aboutUs": "About us",
            "atmosphere": "Atmosphere",
            "vacancy": "Vacancies",
            "contact": "Contacts"
          },
          "ukrainian": "Українська",
          "english": "English",
          "russian": "Русский"
        },
        ru: {
          "links": {
            "home": "Главная",
            "menu": "Меню",
            "delivery": "Доставка еды",
            "reserveAPlace": "Резервация места",
            "reservation": "Резервация",
            "aboutUs": "О нас",
            "atmosphere": "Атмосфера",
            "vacancy": "Вакансии",
            "contact": "Контакты"
          },
          "ukrainian": "Українська",
          "english": "English",
          "russian": "Русский"
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

  netlifyFiles: {
    existingFilesDirectory: "./netlify/"
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
            });
          }
        });
      },

    }


  }
}
