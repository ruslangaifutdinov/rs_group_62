export default class Footer {
  #container
  #rowItems
  #socialsList

  constructor() {
    this.#container = document.createElement('div')
    this.#container.className = 'bloc bgc-black d-bloc'
    this.#container.id = 'bloc-10'

    // Список объектов с информацией для формирования столбцов со ссылками
    this.#rowItems = [
      {
        title: 'About',
        links: [
          { title: 'The Team', url: '#' },
          { title: 'Contact Us', url: '#' },
        ]
      },
      {
        title: 'Get the app',
        links: [
          { title: 'Android', url: '#' },
          { title: 'iOS', url: '#' },
        ]
      },
      {
        title: 'Follow Us',
        links: [
          { title: 'Twitter', url: '#' },
          { title: 'Facebook', url: '#' },
        ]
      },
    ]

    // Список объектов соцсетей
    this.#socialsList = [
      {
        title: 'facebook',
        icon: 'fab fa-facebook-f icon-md',
        url: '#'
      },
      {
        title: 'twitter',
        icon: 'fab fa-twitter icon-md',
        url: '#'
      },
      {
        title: 'instagram',
        icon: 'fab fa-instagram icon-md',
        url: '#'
      },
      {
        title: 'envelope',
        icon: 'far fa-envelope icon-md',
        url: '#'
      },
    ]
  }

  render() {
    const footer = document.createElement('div')
    footer.className = 'container bloc-lg'

    const footerRow = document.createElement('div')
    footerRow.className = 'row'

    this.#rowItems.forEach(item => {
      const rowItemHTML = this.#renderRowItem(item)
      footerRow.append(rowItemHTML)
    })

    const rowSocials = document.createElement('div')
    rowSocials.className = 'col-md-3 col-sm-6'

    const rowSocialsTitle = document.createElement('h4')
    rowSocialsTitle.className = 'mg-md text-center tc-white-2 text-sm-start'
    rowSocialsTitle.textContent = 'Connect'

    const socialsRow = document.createElement('div')
    socialsRow.className = 'row'

    this.#socialsList.forEach(item => {
      const socialsRowItemHTML =
        this.#renderSocialsRowItem(item)
      socialsRow.append(socialsRowItemHTML)
    })

    rowSocials.append(rowSocialsTitle, socialsRow)
    footerRow.append(rowSocials)

    footer.append(footerRow)
    this.#container.append(footer)

    return this.#container
  }

  // Функция рендера столбцов со ссылками
  #renderRowItem(item) {
    const rowItem = document.createElement('div')
    rowItem.className = 'col-md-3 col-sm-6'

    const rowItemTitle = document.createElement('h4')
    rowItemTitle.className = 'mg-md text-center tc-white-2 text-sm-start'
    rowItemTitle.textContent = item.title

    rowItem.append(rowItemTitle)

    // Рендера ссылок
    item.links.forEach(link => {
      const rowItemLink = document.createElement('a')
      rowItemLink.href = link.url
      rowItemLink.className = 'a-btn a-block footer-link'
      rowItemLink.style.textDecoration = 'none'
      rowItemLink.textContent = link.title

      rowItem.append(rowItemLink)
    })

    return rowItem
  }

  // Функция рендера столбца со ссылками на социальные сети
  #renderSocialsRowItem(item) {
    const socialsRowItem = document.createElement('div')
    socialsRowItem.className = 'col-6 col-sm-2 col offset-sm-0'

    const centerContainer = document.createElement('div')
    centerContainer.className = 'text-center'

    const socialsRowItemLink = document.createElement('a')
    socialsRowItemLink.href = item.url

    const socialsRowItemIcon = document.createElement('span')
    socialsRowItemIcon.className = item.icon

    socialsRowItemLink.append(socialsRowItemIcon)
    centerContainer.append(socialsRowItemLink)
    socialsRowItem.append(centerContainer)

    return socialsRowItem
  }
}
