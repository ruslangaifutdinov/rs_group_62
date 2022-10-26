import Navbar from "./navbar";
import Header from "./header-site";

export default class App {
  constructor() {
    this.container = document.querySelector(".page-container");
    this.navbar = new Navbar();
    this.header = new Header();
  }

  run() {
    this.container.append(this.navbar.renderNavbar(), this.header.renderHeader());
  }
}
