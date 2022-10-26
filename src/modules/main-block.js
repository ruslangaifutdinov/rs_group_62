import car_template_blocs_12 from '../img/car_template_blocs_12.jpg'
import car_template_blocs_13 from '../img/car_template_blocs_13.jpg'
import car_template_blocs_14 from '../img/car_template_blocs_14.jpg'

export default class Main {
  #URL
  constructor() {
    this.#URL = 'http://1067407-ck20566.tmweb.ru:3000/api/main'
  }

  #createBlock(id, header, paragraph) {
    let carImg = ''
    switch(+id) {
      case 0:
        carImg = car_template_blocs_12
        break
      case 1:
        carImg = car_template_blocs_13
        break
      case 2:
        carImg = car_template_blocs_14
        break
    }
    const div = document.createElement('div')
    div.className = 'bloc tc-black'
    div.id = `bloc-${id+4}`
    div.innerHTML = 
                        `<div class="container bloc-lg">
                          <div class="row">
                            <div class="col-md-6 ${id == 1 ? '' : 'order-md-1'}">
                              <img
                                src="${carImg}"
                                class="img-fluid mx-auto d-block animated ${id == 1 ? 'fadeInLeft' : 'fadeInRight'}"
                                alt="car_template_blocs_${+id+12}"
                                data-appear-anim-style="${id == 1 ? 'fadeInLeft' : 'fadeInRight'}"
                              />
                            </div>
                            <div class="align-self-center col-md-6">
                              <h2 class="mg-md h2-${+id+2}-style tc-black">${header}</h2>
                              <p class="p-${+id+2}-style">
                                ${paragraph}
                              </p>
                              <a href="index.html" class="btn btn-lg btn-wire wire-btn-black">Read more</a>
                            </div>
                          </div>
                        </div>`
    return div
  }

  render() {
    const container = document.createElement('div')
    fetch(this.#URL)
      .then(response => response.json())
      .then(response => response
        .forEach(i => container.append(this.#createBlock(i.id, i.header, i.paragrapth))))
      .catch(error => console.error(error))
    return container
  }
}
