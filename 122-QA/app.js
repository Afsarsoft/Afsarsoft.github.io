class ProjectInput {
    constructor() {
        this.btns = document.querySelectorAll(".question-btn");
    }
}
const prj = new ProjectInput();
prj.btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});
