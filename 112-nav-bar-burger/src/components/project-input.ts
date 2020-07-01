export class ProjectInput {
  // Getting all the HTML Info
  navToggle: Element;
  links: Element;

  constructor() {
    this.navToggle = document.querySelector(".nav-toggle")! as Element;
    this.links = document.querySelector(".links")! as Element;
  }

}
