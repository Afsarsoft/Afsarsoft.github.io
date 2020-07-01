// Entry App
import { ProjectInput } from './components/project-input';
const prj = new ProjectInput();

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  prj.initItem();
});

// show next person
prj.nextBtn.addEventListener("click", () => {
  prj.addItem();
  prj.showPerson(prj.currentItem);
});

// show prev person
prj.prevBtn.addEventListener("click", () => {
  prj.reduceItem();
  prj.showPerson(prj.currentItem);
});

// show random person
prj.randomBtn.addEventListener("click", () => {
  prj.randomItem();
  prj.showPerson(prj.currentItem);
});
