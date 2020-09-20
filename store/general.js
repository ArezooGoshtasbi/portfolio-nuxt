export const state = () => ({
  menu: false,
  locale: null,
})

export const mutations = {
  setMenu(state, menu) {
    state.menu = menu
  },
  setLocale(state, locale) {
    state.locale = locale
  },
}
