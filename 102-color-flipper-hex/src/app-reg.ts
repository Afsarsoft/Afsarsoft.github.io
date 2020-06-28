// Entry App
import { ProjectInputReg } from './components/project-input-reg';

const prjReg = new ProjectInputReg();
prjReg.colorList = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colors = prjReg.getColorList;

prjReg._element.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  prjReg._color.textContent = colors[randomNumber];
});

const getRandomNumber = (): number => Math.floor(Math.random() * colors.length);
