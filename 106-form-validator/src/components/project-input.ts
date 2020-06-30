export class ProjectInput {
  // Getting all the HTML IDs
  form: HTMLElement;
  username: HTMLInputElement;
  email: HTMLInputElement;
  password1: HTMLInputElement;
  password2: HTMLInputElement;

  constructor() {
    this.form = document.getElementById('form')! as HTMLElement;
    this.username = document.getElementById('username')! as HTMLInputElement;
    this.email = document.getElementById('email')! as HTMLInputElement;
    this.password1 = document.getElementById('password1')! as HTMLInputElement;
    this.password2 = document.getElementById('password2')! as HTMLInputElement;
  }

  // Show input error message
  private showError = (input: HTMLInputElement, message: string): void => {
    const formControl = input.parentElement;
    formControl!.className = 'form-control error';
    const small = formControl!.querySelector('small');
    small!.innerText = message;
  }

  // Show success outline
  private showSuccess = (input: HTMLInputElement): void => {
    const formControl = input.parentElement;
    formControl!.className = 'form-control success';
  }

  // Get field name
  private getFieldName = (input: HTMLInputElement): string => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  // Check email is valid
  checkEmail = (input: HTMLInputElement): void => {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      this.showSuccess(input);
    } else {
      this.showError(input, 'Email is not valid');
    }
  }

  // Check required fields
  checkRequired = (inputArr: HTMLInputElement[]): void => {
    inputArr.forEach((input: HTMLInputElement) => {
      // console.log(input.value);
      if (input.value.trim() === '') {
        this.showError(input, `${this.getFieldName(input)} is required`);
      } else {
        this.showSuccess(input);
      }
    });
  }

  // Check input length
  checkLength = (input: HTMLInputElement, min: number, max: number): void => {
    if (input.value.length < min) {
      this.showError(input, `${this.getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
      this.showError(input, `${this.getFieldName(input)} must be less than ${max} characters`);
    } else {
      this.showSuccess(input);
    }
  }

  // Check passwords match
  checkPasswordsMatch = (input1: HTMLInputElement, input2: HTMLInputElement): void => {
    if (input1.value !== input2.value) {
      this.showError(input2, 'Passwords do not match');
    }
  }

}
