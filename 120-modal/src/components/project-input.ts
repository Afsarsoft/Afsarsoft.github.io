export class ProjectInput {
  // Getting all the HTML Info
  modalBtn: Element;
  modal: Element;
  closeBtn: Element;

  constructor() {
    this.modalBtn = document.querySelector(".modal-btn")! as Element;
    this.modal = document.querySelector(".modal-overlay")! as Element;
    this.closeBtn = document.querySelector(".close-btn")! as Element;
  }

}
