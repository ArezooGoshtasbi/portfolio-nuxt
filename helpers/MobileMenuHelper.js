class MobileMenuHelper {
  mobileMenuToggle(menu, store) {
    const root = document.getElementsByTagName('html')[0]
    const main = document.getElementsByTagName('main')[0]
    const body = document.body

    if (menu) {
      if (body) body.removeAttribute('style')
      if (root) root.removeAttribute('style')
      if (main) main.removeAttribute('style')
    } else {
      if (body) {
        body.style.overflow = 'hidden'
        body.style.height = '100%'
      }
      if (root) {
        root.style.overflow = 'hidden'
        root.style.height = '100%'
      }
      if (main) main.style.display = 'none'
    }
    store.commit('general/setMenu', !menu)
  }
}

export default new MobileMenuHelper()
