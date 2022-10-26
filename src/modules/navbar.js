const linksItems = ['Home', 'Future', 'Results', 'Partners']

export default class Navbar {
  constructor() {
    this.blockStickyNav = document.createElement('div')
    this.blockStickyNav.className = `bloc sticky-nav b-divider bgc-white`
    this.blockStickyNav.id = 'bloc-0'
  }
  render() {
    const container = document.createElement('div')
    container.className = `container bloc-sm bloc-sm-lg`

    const rowBlock = document.createElement('div')
    rowBlock.className = 'row'

    const colBlock = document.createElement('div')
    colBlock.className = 'col'

    const navBlock = document.createElement('nav')
    navBlock.className = `navbar navbar-light row navbar-expand-md`
    navBlock.setAttribute('role', 'navigation')

    const containerFluid = document.createElement('div')
    containerFluid.className = 'container-fluid'

    const navbarBrand = document.createElement('a')
    navbarBrand.className = `navbar-brand link-style`
    navbarBrand.href = 'index.html'
    navbarBrand.textContent = 'Autodrive'

    const buttonOne = this.#renderButton()
    const listRender = this.#renderList()
    containerFluid.append(navbarBrand, buttonOne, listRender)
    container.append(rowBlock)
    rowBlock.append(colBlock)
    colBlock.append(navBlock)
    navBlock.append(containerFluid)
    this.blockStickyNav.append(container)
    return this.blockStickyNav
  }

  #renderButton() {
    const toggleButton = document.createElement('button')
    toggleButton.id = 'nav-toggle'
    toggleButton.classList = `ui-navbar-toggler navbar-toggler border-0 p-0 ms-auto`
    toggleButton.type = 'button'
    toggleButton.ariaLabel = 'Toggle navigation'
    toggleButton.ariaExpanded = 'false'
    toggleButton.setAttribute('data-bs-toggle', 'collapse')
    toggleButton.setAttribute('data-bs-target', '.navbar-34779')

    const spanButton = document.createElement('span')
    spanButton.className = 'navbar-toggler-icon'

    toggleButton.append(spanButton)

    return toggleButton
  }

  #renderList() {
    const collapseBar = document.createElement('div')
    collapseBar.className = `collapse navbar-collapse navbar-34779`

    const ulSite = document.createElement('ul')
    ulSite.className = `site-navigation nav navbar-nav ms-auto`

    linksItems.forEach(elem => {
      const liItem = document.createElement('li')
      liItem.className = 'nav-item'

      const linksItem = document.createElement('a')
      linksItem.href = '#'
      linksItem.className = 'nav-link'
      linksItem.textContent = elem

      liItem.append(linksItem)
      ulSite.append(liItem)
    })

    collapseBar.append(ulSite)
    return collapseBar
  }
}
