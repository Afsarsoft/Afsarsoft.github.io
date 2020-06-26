import { Component } from './base-component.js';
import { ValidateStuff, validate } from '../util/validation.js';
import { AutoBind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';

// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
    this.configure();
  }

  configure() {
    // Using decorator to no need to bind
    this.element.addEventListener('submit', this.submitHandler);
    // this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  renderContent() { }

  private gatherUserInput = (): [string, string, number] | void => {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    // Better validation
    const titleValidateStuff: ValidateStuff = {
      value: enteredTitle,
      required: true
    };

    const descriptionValidateStuff: ValidateStuff = {
      value: enteredDescription,
      required: true,
      minLength: 5
    };

    const peopleValidateStuff: ValidateStuff = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5
    };

    if (
      !validate(titleValidateStuff) ||
      !validate(descriptionValidateStuff) ||
      !validate(peopleValidateStuff)
    ) {
      alert('Invalid input, enter all values. Please try again.')
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]; // converting enteredPeople to number
    }


    /*
    // Simple validation.
    if (
      enteredTitle.trim().length == 0 ||
      enteredDescription.trim().length == 0 ||
      enteredPeople.trim().length == 0
    ) {
      alert('Invalid input, enter all values. Please try again.')
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]; // converting enteredPeople to number
    }
    */

  }

  private clearInputs = () => {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @AutoBind
  // Not working with arrow function!
  private submitHandler(event: Event) {
    event.preventDefault();

    // console.log(this.titleInputElement.value);
    const userInput = this.gatherUserInput();

    // Checking for tuple
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      // console.log(title, desc, people);
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }

}
