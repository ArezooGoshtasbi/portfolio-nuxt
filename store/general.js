export const state = () => ({
  menu: false,
  locales: ['en', 'fa'],
  locale: 'en',
})

export const mutations = {
  setMenu(state, menu) {
    state.menu = menu
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
