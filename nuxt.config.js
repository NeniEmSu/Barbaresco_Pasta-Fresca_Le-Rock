import purgecss from '@fullhuman/postcss-purgecss'
require('dotenv').config()

export default {
  mode: 'universal',
  server: {
    port: 3100,
    host: '0.0.0.0'
  },
  head: {
    title: 'Barbaresco, Pasta Fresca & Le Rock',
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
      content: 'Barbaresco, Pasta Fresca & Le Rock the top restaurants in ternopil in one place.'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'Барбареско, Барбареско Тернопіль, Ле Рок, Ле Рок Тернопіль, Замовлення їжі Тернопіль, Макаронні вироби Фреска, Паста Фреска Тернопіль, Замовлення їжі Тернопіль, Замовити їжу онлайн Тернопіль, Тернопіль, Укріан, Смачна кухня, Хороша музика, Затишна атмосфера, Відмінна їжа, Піца, Бургер, Салат, Десерти, Напої, Суші, Макаронні вироби, Барбекю, Рок-Собака, Ресто, Ресторани в Тернополі, Barbaresco, Barbaresco Ternopil, Le Rock, Le Rock Ternopil, Food order Ternopil, Pasta Fresca, Pasta Fresca Ternopil, Food order Ternopil, Order food online ternopil, Ternopil, Ukriane, Delicious cuisine, Nice music, Cozy atmosphere, Great Food, Pizza, Burger, Salad, Deserts, Drinks, Sushi, Pasta, BBQ Meat, Rock Dog, Resta, Restaurants in ternopil'
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
      src: '@/plugins/vue-expandable-image',
      mode: 'client'
    },
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
      src: '~/plugins/vuemask'
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

  sitemap: {
    hostname: 'https://barbaresco.w-start.com.ua/',
    gzip: true,
    path: '/sitemap.xml',
    exclude: [],
    routes: [],
    cacheTime: 900000,
    trailingSlash: false,
    defaults: {},
    pathGzip: '/sitemap.xml'
  },

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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-polyfill',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
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
        id: process.env.GOOGLE_ANALYTICS_API_KEY
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
            atmosphere: 'Інтер’єр',
            vacancy: 'Вакансії',
            contact: 'Контакти',
            kitchen: 'Кухня',
            cart: 'Кошик'
          },
          keywords: 'Барбареско, Барбареско Тернопіль, Ле Рок, Ле Рок Тернопіль, Замовлення їжі Тернопіль, Макаронні вироби Фреска, Паста Фреска Тернопіль, Замовлення їжі Тернопіль, Замовити їжу онлайн Тернопіль, Тернопіль, Укріан, Смачна кухня, Хороша музика, Затишна атмосфера, Відмінна їжа, Піца, Бургер, Салат, Десерти, Напої, Суші, Макаронні вироби, Барбекю, Рок-Собака, Ресто, Ресторани в Тернополі',
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
            kitchen: 'Kitchen',
            cart: 'Cart'
          },
          keywords: 'Barbaresco, Barbaresco Ternopil, Le Rock, Le Rock Ternopil, Food order Ternopil, Pasta Fresca, Pasta Fresca Ternopil, Food order Ternopil, Order food online ternopil, Ternopil, Ukriane, Delicious cuisine, Nice music, Cozy atmosphere, Great Food, Pizza, Burger, Salad, Deserts, Drinks, Sushi, Pasta, BBQ Meat, Rock Dog, Resta, Restaurants in ternopil',
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
            atmosphere: 'Інтер’єр',
            vacancy: 'Вакансии',
            contact: 'Контакты',
            kitchen: 'Кухня',
            cart: 'Корзина'
          },
          keywords: 'Барбареско, Барбареско Тернополь, Ле Рок, Ле Рок Тернополь, Еда на заказ Тернополь, Паста Фреска, Паста Фреска Тернополь, Еда на заказ Тернополь, Заказать еду онлайн Тернополь, Тернополь, Укриане, Вкусная кухня, Приятная музыка, Уютная атмосфера, Отличная еда, Пицца, Бургер, Салат, Десерты, Напитки, Суши, Паста, Мясо барбекю, Рок Дог, Реста, Рестораны в Тернополе',
          ukrainian: 'Українська',
          english: 'English',
          russian: 'Русский',
          order: 'Заказать'
        }

      }
    }
  },

  apollo: {
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    errorHandler: '~/apollo/customErrorHandler',
    clientConfigs: {
      default: '~/apollo/clientConfig.js'
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

  robots: {
    Sitemap: '/sitemap.xml'
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

    extend (config) {
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
      presets ({
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
