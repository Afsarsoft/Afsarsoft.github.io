class ProjectInput {
  // Getting all the HTML Info
  btns: NodeListOf<Element>;

  constructor() {
    this.btns = document.querySelectorAll(".question-btn")! as NodeListOf<Element>;
  }

}

const prj = new ProjectInput();

prj.btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const question = (<HTMLInputElement>e.currentTarget).parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});

