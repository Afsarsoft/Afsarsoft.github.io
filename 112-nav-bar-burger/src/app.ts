// Entry App
import { ProjectInput } from './components/project-input';
const prj = new ProjectInput();

prj.navToggle.addEventListener("click", () => {
  // console.log(prj.links.classList);
  // console.log(prj.links.classList.contains("random"));
  // console.log(prj.links.classList.contains("links"));
  // if (prj.links.classList.contains("show-links")) {
  //   prj.links.classList.remove("show-links");
  // } else {
  //   prj.links.classList.add("show-links");
  // }
  prj.links.classList.toggle("show-links");
});
