export default class Header {
  constructor() {
    this.block_1 = document.createElement('div')
    this.block_1.className = `bloc bloc-fill-screen bloc-bg-texture texture-darken b-parallax l-bloc`
    this.block_1.id = 'block-0'
  }
  render() {
    const parallaxContainer = document.createElement('div')
    parallaxContainer.className = 'parallax__container'

    const parallax = document.createElement('div')
    parallax.className = `parallax-bmw bg-bmw-bmw`

    parallaxContainer.append(parallax)

    const container = document.createElement('div')
    container.className = 'container'

    const divRow = this.#renderRow()
    const divFillBlock = this.#renderFillBlock()
    const divRow2 = this.#oneRow()
    const BtnScroll = this.#blockButton()

    container.append(divRow)
    this.block_1.append(
      parallaxContainer,
      divRow2,
      container,
      divFillBlock,
      BtnScroll,
    )
    return this.block_1
  }

  #oneRow() {
    const blocTop = document.createElement('div')
    blocTop.className = 'container fill-bloc-top-edge'

    const blocRow = document.createElement('div')
    blocRow.className = 'row'

    const colBlock = document.createElement('div')
    colBlock.className = 'col-12'

    blocRow.append(colBlock)
    blocTop.append(blocRow)

    return blocTop
  }

  #renderRow() {
    const blockRow = document.createElement('div')
    blockRow.className = 'row'

    const divColCenter = document.createElement('div')
    divColCenter.className = 'col-lg-6 align-self-center col-md-7'

    const titleH1 = document.createElement('h1')
    titleH1.className = `mg-md text-center tc-white h1-style text-md-start`
    titleH1.textContent = 'THE FUTURE OF MOBILITY IS HERE'

    const titleH3 = document.createElement('h3')
    titleH3.className = `mg-md float-none text-center tc-white h3-bloc-0-style text-md-start`
    titleH3.textContent = `Discover the safest self-driving experience with Autodrive.`

    const divCenter = document.createElement('div')
    divCenter.className = `text-center d-block text-lg-start text-md-start`

    const btnLg = document.createElement('a')
    btnLg.className = `btn btn-lg btn-wire wire-btn-white`
    btnLg.href = 'index.html'
    btnLg.textContent = `Explore&nbsp;`

    const btnScroll = this.#blockButton()

    divCenter.append(btnLg)
    divColCenter.append(titleH1, titleH3, divCenter)
    blockRow.append(divColCenter, btnScroll)

    return blockRow
  }

  #renderFillBlock() {
    const fillBlock = document.createElement('div')
    fillBlock.className = `container fill-bloc-bottom-edge`

    const blockRow = document.createElement('div')
    blockRow.className = 'row'

    const colBlock12 = document.createElement('div')
    colBlock12.className = 'col-12'

    const blockText = document.createElement('div')
    blockText.className = 'text-center'

    const clickButton = document.createElement('a')
    clickButton.href = '#'
    clickButton.setAttribute('data-scroll-speed', '1000')
    clickButton.setAttribute('onclick', `scrollToTarget('0', this)`)

    const spanInButton = document.createElement('span')
    spanInButton.className = `fa fa-angle-down icon-md animated bounce animDelay08`

    clickButton.append(spanInButton)
    blockText.append(clickButton)
    colBlock12.append(blockText)
    blockRow.append(colBlock12)
    fillBlock.append(blockRow)

    return fillBlock
  }

  #blockButton() {
    const btnA = document.createElement('a')
    btnA.className = `bloc-button btn btn-d scrollToTop`
    btnA.setAttribute('click', `scrollToTarget('1',this)`)

    const elemSVG = document.createElement('svg')
    elemSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    elemSVG.setAttribute('width', '22')
    elemSVG.setAttribute('height', '22')
    elemSVG.setAttribute('viewBox', '0 0 32 32')

    const pathStr = document.createElement('path')
    pathStr.className = `scroll-to-top-btn-icon`
    pathStr.setAttribute('d', 'M30,22.656l-14-13-14,13')

    elemSVG.append(pathStr)
    btnA.append(elemSVG)

    return btnA
  }
}
