// Entry App
import { ProjectInput } from './components/project-input';
const prj = new ProjectInput();

prj.toggleBtn.addEventListener("click", () => {
  // if (prj.sidebar.classList.contains("show-sidebar")) {
  //   prj.sidebar.classList.remove("show-sidebar");
  // } else {
  //   prj.sidebar.classList.add("show-sidebar");
  // }
  prj.sidebar.classList.toggle("show-sidebar");
});

prj.closeBtn.addEventListener("click", () => {
  prj.sidebar.classList.remove("show-sidebar");
});
