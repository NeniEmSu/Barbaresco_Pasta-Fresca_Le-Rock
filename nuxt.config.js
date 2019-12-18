import purgecss from '@fullhuman/postcss-purgecss'

export default {
  mode: 'universal',

  server: {
    port: 3100, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

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
        content: 'My awe-inspiring Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/png',
      href: '/icon.png'
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
      src: '/icon.png',
      sizes: '512x512',
      type: 'image/png'
    }],
    categories: ['business', 'shopping']
  },

  loading: {
    color: '#E0A671'
  },

  css: [
    'normalize.css/normalize.css',
    '~/assets/scss/config.scss',
    '~/assets/fonts/fonts.css'
  ],

  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/i18n.js',
    '~/plugins/vue-scrollto.js',
    '~/plugins/vue-lazyload.js',
    {
      src: '@/plugins/aos',
      mode: 'client'
    },
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
      src: '~/plugins/google-maps',
      ssr: true
    }
  ],

  router: {
    middleware: [
      'animation'
    ]
  },

  modules: [
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources',
    'nuxt-polyfill',
    ['nuxt-gmaps', {
      key: 'AIzaSyDKJciVrAvST8C9SJzwkjmHFnoPM8FwooY'
    }],
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
      '@nuxtjs/google-analytics',
      {
        id: 'UA-62479125-9'
      }
    ],
    [
      'vue-currency-filter/nuxt',
      {
        name: 'currency',
        symbol: '',
        thousandsSeparator: '.',
        fractionCount: 2,
        fractionSeparator: ',',
        symbolPosition: 'front',
        symbolSpacing: false
      }
    ]
  ],

  i18n: {
    defaultLocale: 'uk',
    vueI18nLoader: true,
    lazy: false,
    langDir: null,
    strategy: 'prefix_except_default',
    parsePages: true,
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
          links: {
            home: 'Головна',
            menu: 'Меню',
            delivery: 'Доставка їжі',
            reserveAPlace: 'Резервація місця',
            reservation: 'Резервація',
            aboutUs: 'Про нас',
            atmosphere: 'Атмосфера',
            vacancy: 'Ваканції',
            contact: 'Контакти'
          },
          order: 'Замовити',
          ukrainian: 'Українська',
          english: 'English',
          russian: 'Русский'
        },
        en: {
          links: {
            home: 'Home',
            menu: 'Menu',
            delivery: 'Food delivery',
            reserveAPlace: 'Reservation of place',
            reservation: 'Reservation',
            aboutUs: 'About us',
            atmosphere: 'Atmosphere',
            vacancy: 'Vacancies',
            contact: 'Contacts',
            kitchen: 'Kitchen'
          },
          ukrainian: 'Українська',
          english: 'English',
          russian: 'Русский',
          order: 'Order'
        },
        ru: {

          links: {
            home: 'Главная',
            menu: 'Меню',
            delivery: 'Доставка еды',
            reserveAPlace: 'Резервация места',
            reservation: 'Резервация',
            aboutUs: 'О нас',
            atmosphere: 'Атмосфера',
            vacancy: 'Вакансии',
            contact: 'Контакты',
            kitchen: 'Кухня'
          },
          ukrainian: 'Українська',
          english: 'English',
          russian: 'Русский',
          order: 'Заказать'
        }

      }
    }
  },

  polyfill: {
    features: [{
        require: 'url-polyfill'
      },

      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window
      },

      {
        require: 'smoothscroll-polyfill',

        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,

        install: smoothscroll => smoothscroll.polyfill()
      }
    ]
  },

  proxy: {
    '/.netlify/functions/': {
      target: 'http://localhost:8000'
    }
  },

  styleResources: {
    scss: ['~/assets/scss/config.scss']
  },

  netlifyFiles: {
    existingFilesDirectory: './netlify/'
  },

  purgeCSS: {},

  axios: {},

  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },

    extend(config) {
      config.module.rules.forEach((rule) => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          rule.use.push({
            loader: 'image-webpack-loader',
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

    postcss: {
      plugins: [
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './content/**/*.md',
            './content/**/*.json'
          ],
          whitelist: [
            'html',
            'body',
            'has-navbar-fixed-top',
            'nuxt-link-exact-active',
            'nuxt-progress',
            'hidden',
            'opacity-0',
            'nuxt__build_indicator'
          ],
          whitelistPatternsChildren: [/svg-inline--fa/, /__layout/, /__nuxt/, /aos/, /fade-in/, /tooltip/, /modal/, /map/, /gm/, /dropdown/, /toast/]
        })
      ]
    },

    babel: {
      presets({
        isServer
      }, [preset, options]) {
        const r = [
          [
            preset, {
              buildTarget: isServer ? 'server' : 'client',
              ...options
            }
          ]
          // [ Other presets ]
        ]

        r[0][1].targets = {
          browsers: ['> 1%', 'last 2 versions'],
          ie: 11
        }

        r[0][1].polyfills = [
          'es6.array.iterator',
          'es6.promise',
          'es6.object.assign',
          'es6.symbol',
          'es6.array.find',
          'es6.array.from',
          'es7.promise.finally',
          'es7.object.entries'
        ]

        return r
      },

      plugins: [
        ['@babel/plugin-transform-runtime']
      ]
    }

  }
}