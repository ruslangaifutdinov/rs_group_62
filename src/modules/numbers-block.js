
// Скрипт анимации числа
function renderNumbersAnimation(maxNum, container, animationTime) {
  for (let i = 1; i <= maxNum; i++) {
    setTimeout(() => {
      container.innerHTML = i
    }, animationTime * i)
  }
}

export default class Numbers {
  #dataUrl

  constructor(dataUrl) {
    this.container = document.createElement('div')
    this.#dataUrl = dataUrl
  }

  // Фетчит число и вызывает анимацию для него
  async #numberAnimation(index, animationTime) {
    try {
      const dataRes = await fetch(this.#dataUrl).then(res => res.json())      
      renderNumbersAnimation(dataRes[index].value, document.querySelector(`[data-numbers-number='${index}']`), animationTime)
    } catch(error) {
      console.error(error)
    }
  }

  // Все выводы чисел в одном месте для удобства (можно сделать короче и универсальнее, если скорость везде будет одна)
  #numbersAnimations() {
    this.#numberAnimation(0, 5)
    this.#numberAnimation(1, 100)
    this.#numberAnimation(2, 30)
    this.#numberAnimation(3, 25)
  }

  // Когда блок в поле зрения, тригерит анимации чисел
  triggerNumbersAnimations() {

    // Локал стораж используется, чтобы проиграть анимацию один раз при заходе на сайт
    localStorage.removeItem('watched')
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && !localStorage.getItem('watched')) {
        this.#numbersAnimations()
        localStorage.setItem('watched', 'yes')
      }
    })
    observer.observe(this.container)
  }
 
  render() {
    this.container.innerHTML = `
      <div class="bloc full-width-bloc tc-black-2" id="bloc-7">
      <div class="container bloc-no-padding">
        <div class="row voffset-lg">
          <div class="col-md-12 offset-lg--1 col-lg-6 number-block-img">
          </div>
          <div
            class="align-self-center offset-md-1 col-md-10 col-sm-10 offset-sm-1 offset-1 col-10 offset-lg-1 col-lg-4"
          >
            <h6 class="mg-md h6-the-company-style tc-black">
              THE COMPANY<br />
            </h6>
            <h2 class="mg-md h2-our-numbers-style tc-black">
              Our Numbers<br />
            </h2>
            <div class="row">
              <div class="col">
                <h2 data-numbers-number='0' class="mg-md btn-resize-mode h2-bloc-7-style tc-black">
                  0
                </h2>
                <div class="divider-h"></div>
                <h4 class="mg-md tc-black">EMPLOYERS</h4>
              </div>
              <div class="col">
                <h2 data-numbers-number='1' class="mg-md btn-resize-mode h2-bloc-7-style tc-black">
                  0
                </h2>
                <div class="divider-h"></div>
                <h4 class="mg-md">CORE TEAMS</h4>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2 data-numbers-number='2' class="mg-md btn-resize-mode h2-bloc-7-style tc-black">
                  0
                </h2>
                <div class="divider-h"></div>
                <h4 class="mg-md tc-black">STORES</h4>
              </div>
              <div class="col">
                <h2 data-numbers-number='3' class="mg-md btn-resize-mode h2-bloc-7-style tc-black">
                  0
                </h2>
                <div class="divider-h"></div>
                <h4 class="mg-md">PARTNERS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `
    
    return this.container
  }
}