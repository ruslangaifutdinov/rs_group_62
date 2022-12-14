import Navbar from "./navbar";
import Header from "./header-site";
import Vision from "./vision-block";
import Service from "./service-block";
import Main from "./main-block";
import Numbers from "./numbers-block";
import Partners from "./partners-block";
import SubmitForm from "./form-block";
import Footer from "./footer-block";

export default class App {
  constructor() {
    this.container = document.querySelector(".page-container");
    this.navbar = new Navbar();
    this.header = new Header();
    this.vision = new Vision();
    this.service = new Service();
    this.main = new Main();
    this.numbers = new Numbers('http://1067407-ck20566.tmweb.ru:3000/api/numbers');
    this.partners = new Partners('http://1067407-ck20566.tmweb.ru:3000/api/pictures');
    this.form = new SubmitForm();
    this.footer = new Footer();
  }

  run() {
    this.container.append(
      this.navbar.render(),
      this.header.render(),
      this.vision.render(),
      this.service.render(),
      this.main.render(),
      this.numbers.render(),
      this.partners.render(),
      this.form.render(),
      this.footer.render()
    );

    // Вызывает метод, отвечающий за анимацию чисел в блоке numbers
    this.numbers.triggerNumbersAnimations()
    this.partners.renderImgs()
  }
}
