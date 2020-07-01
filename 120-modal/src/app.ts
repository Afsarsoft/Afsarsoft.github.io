// Entry App
import { ProjectInput } from './components/project-input';
const prj = new ProjectInput();

prj.modalBtn.addEventListener("click", () => {
  prj.modal.classList.add("open-modal");
});

prj.closeBtn.addEventListener("click", () => {
  prj.modal.classList.remove("open-modal");
});
