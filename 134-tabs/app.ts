class ProjectInput {
  about: HTMLElement;
  btns: NodeListOf<Element>;
  articles: NodeListOf<Element>;

  constructor() {
    this.about = document.querySelector(".about")! as HTMLElement;
    this.btns = document.querySelectorAll(".tab-btn")! as NodeListOf<Element>;
    this.articles = document.querySelectorAll(".content")! as NodeListOf<Element>;
  }
}

const prj = new ProjectInput();

prj.about.addEventListener("click", (e) => {
  const id = (<HTMLInputElement>e.target).dataset.id;
  if (id) {
    // remove selected from other buttons
    prj.btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    (<HTMLInputElement>e.target).classList.add("active");
    // hide other articles
    prj.articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
