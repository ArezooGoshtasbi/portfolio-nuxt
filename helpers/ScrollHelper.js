class ScrollHelper {
  isInViewport(elementId) {
    let el = document.getElementById(elementId)
    if (!el) return false
    let top = el.offsetTop

    while (el.offsetParent) {
      el = el.offsetParent
      top += el.offsetTop
    }

    return top >= window.pageYOffset
  }

  isFullyInViewport(elementId) {
    let el = document.getElementById(elementId)
    if (!el) return false
    let top = el.offsetTop
    const height = el.offsetHeight

    while (el.offsetParent) {
      el = el.offsetParent
      top += el.offsetTop
    }

    return (
      top >= window.pageYOffset &&
      top + height <= window.pageYOffset + window.innerHeight
    )
  }
}

export default new ScrollHelper()
