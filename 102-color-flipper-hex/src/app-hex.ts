// Entry Hex App
import { ProjectInputHex } from './components/project-input-hex';

const prjHex = new ProjectInputHex();
prjHex.hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexes = prjHex.getHexList;

prjHex._element.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexes[getRandomNumber()];
  }
  console.log(hexColor);

  prjHex._color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

const getRandomNumber = (): number => Math.floor(Math.random() * hexes.length);
