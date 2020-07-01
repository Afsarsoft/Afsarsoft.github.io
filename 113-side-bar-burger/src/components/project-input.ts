export class ProjectInput {
  // Getting all the HTML Info
  toggleBtn: Element;
  closeBtn: Element;
  sidebar: Element;

  constructor() {
    this.toggleBtn = document.querySelector(".sidebar-toggle")! as Element;
    this.closeBtn = document.querySelector(".close-btn")! as Element;
    this.sidebar = document.querySelector(".sidebar")! as Element;
  }

}
