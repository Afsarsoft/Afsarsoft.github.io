export class ProjectInput {
  count: number;
  value: HTMLInputElement;
  btns: NodeList;

  constructor() {
    this.count = 0;
    this.value = document.querySelector("#value")! as HTMLInputElement;
    this.btns = document.querySelectorAll(".btn")! as NodeList;
  }

}
