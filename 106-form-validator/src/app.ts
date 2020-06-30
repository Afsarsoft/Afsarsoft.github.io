// Entry App
import { ProjectInput } from './components/project-input';
const prj = new ProjectInput();

// Event listeners
// We are listening to submit event and we will run a function
prj.form.addEventListener('submit', (e): void => {
  // to prevent it from submitting
  e.preventDefault();
  // console.log('submit')
  // To check out the values being submitted.
  // console.log(prj.username.value);
  prj.checkRequired([prj.username, prj.email, prj.password1, prj.password2]);
  prj.checkLength(prj.username, 3, 15);
  prj.checkLength(prj.password1, 6, 25);
  prj.checkEmail(prj.email);
  prj.checkPasswordsMatch(prj.password1, prj.password2);
});


