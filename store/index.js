export const state = () => ({
  lang: null,
})

export const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang
  },
}
