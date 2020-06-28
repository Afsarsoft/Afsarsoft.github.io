export class ProjectInputReg {
  private _colors: string[];
  _element: HTMLInputElement;
  _color: Element;

  constructor() {
    this._colors = [];
    this._element = document.getElementById("btn") as HTMLInputElement;
    this._color = document.querySelector(".color") as Element;
  }

  set colorList(colors: string[]) {
    this._colors = colors;
  }

  get getColorList() {
    return this._colors;
  }
}
