export const state = () => ({
  animation: 'fade-in-up',
  locales: ['en', 'uk', 'ru'],
  locale: 'uk'
})

export const getters = {}

export const actions = {}

export const mutations = {
  SET_ANIMATION(state, animation) {
    state.animation = animation
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }

}
