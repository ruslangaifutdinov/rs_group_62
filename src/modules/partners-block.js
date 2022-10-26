export default class Partners {
  constructor(dataUrl) {
    this.dataUrl = dataUrl
    this.container = document.createElement('div')
  }

  // Метод фетчит юрл картинки и добавляет на страницу
  async #getImg(index, container) {
    try {
      const data = await fetch(this.dataUrl).then(res => res.json())
  
      const img = document.createElement('img')
      img.className = 'img-fluid mx-auto d-block'
      img.alt = `car_template_blocs_${index}`
      img.src = data[index].img
      container.append(img)

    } catch(error) {
      console.error(error)
    }
  }

  // Метод вызывывает методы для всех контейнеров картинок
  renderImgs() {
    const imgContainers = document.querySelectorAll('[data-partners-img]')
    imgContainers.forEach((container, index) => {
      console.log(index)
      this.#getImg(index, container)
    })
  }

  render() {
    this.container.innerHTML = `
      <div class="bloc bgc-black-2 tc-white" id="bloc-8">
      <div class="container bloc-lg">
        <div class="row">
          <div class="col-md-6 order-md-1">
            <div class="row">
              <div class="col" data-partners-img="0">

              </div>
              <div class="col" data-partners-img="1">

              </div>
            </div>
            <div class="row">
              <div class="col" data-partners-img="2">
                
              </div>
              <div class="col" data-partners-img="3">

              </div>
            </div>
          </div>
          <div class="align-self-center col-md-6">
            <h6 class="mg-md h6-industry-style tc-white">INDUSTRY<br /></h6>
            <h2 class="mg-md h2-ourpartners-style tc-white">Our<br />Partners<br /></h2>
            <p class="p-5-style">
              I'm a paragraph. Click here to add your own text and edit me. It&rsquo;s easy. Just double click me to add your own content
              and make changes to the font. I&rsquo;m a great place for you to tell a story and let your users know a little more about
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
    `

    return this.container
  }
}
