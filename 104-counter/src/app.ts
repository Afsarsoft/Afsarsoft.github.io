// Entry App
import { ProjectInput } from './components/project-input';

const prj = new ProjectInput();

const changeCounter = (styles: any): void => {
  if (styles.contains("decrease")) {
    prj.count--;
  } else if (styles.contains("increase")) {
    prj.count++;
  } else {
    prj.count = 0;
  }
}

const changeColor = (): void => {
  if (prj.count > 0) {
    prj.value.style.color = "green";
  }
  if (prj.count < 0) {
    prj.value.style.color = "red";
  }
  if (prj.count === 0) {
    prj.value.style.color = "#222";
  }
  prj.value.textContent = prj.count.toString();
}

prj.btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = (<HTMLInputElement>e.target)!.classList
    changeCounter(styles);
    changeColor();
  });
});


