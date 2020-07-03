class ProjectInput {
    constructor() {
        this.about = document.querySelector(".about");
        this.btns = document.querySelectorAll(".tab-btn");
        this.articles = document.querySelectorAll(".content");
    }
}
const prj = new ProjectInput();
prj.about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // remove selected from other buttons
        prj.btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other articles
        prj.articles.forEach((article) => {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
