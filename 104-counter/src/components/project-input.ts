export class ProjectInput {
  _count: number;
  _value: HTMLElement;
  _btns: NodeList;

  constructor() {
    this._count = 0;
    this._value = document.querySelector("#value")! as HTMLElement;
    this._btns = document.querySelectorAll(".btn")! as NodeList;
  }
}
