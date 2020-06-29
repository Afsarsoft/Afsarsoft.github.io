// Entry App
// Final result is OK but need to figure out the TypeScript 2 errors!
import { ProjectInput } from './components/project-input';

const prj = new ProjectInput();

prj._btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget!.classList
    if (styles.contains("decrease")) {
      prj._count--;
    } else if (styles.contains("increase")) {
      prj._count++;
    } else {
      prj._count = 0;
    }

    if (prj._count > 0) {
      prj._value.style.color = "green";
    }
    if (prj._count < 0) {
      prj._value.style.color = "red";
    }
    if (prj._count === 0) {
      prj._value.style.color = "#222";
    }
    prj._value.textContent = prj._count;
  });
});


