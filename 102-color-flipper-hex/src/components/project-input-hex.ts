export class ProjectInputHex {
  private _hexes: (number | string)[];

  _element: HTMLInputElement;
  _color: Element;

  constructor() {
    this._hexes = [];
    this._element = document.getElementById("btn") as HTMLInputElement;
    this._color = document.querySelector(".color") as Element;
  }

  set hexList(hexes: (number | string)[]) {
    this._hexes = hexes;
  }

  get getHexList() {
    return this._hexes;
  }
}
