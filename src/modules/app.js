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
    this.numbers = new Numbers();
    this.patners = new Partners();
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
      this.patners.render(),
      this.form.render(),
      this.footer.render()
    );
  }
}
