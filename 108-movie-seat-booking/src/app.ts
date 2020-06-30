// Entry App
import { ProjectInput } from './components/project-input';
const prj = new ProjectInput();

prj.populateUI();

prj.ticketPrice = +prj.movieSelect.value; //changing the type to numeric
// console.log(ticketPrice);

// Movie select event
prj.movieSelect.addEventListener('change', e => {
  // https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
  prj.ticketPrice = +(<HTMLInputElement>e.target).value;

  // Saving it to local storage
  // console.log(e.target.selectedIndex, e.target.value);
  prj.setMovieData((<HTMLSelectElement>e.target).selectedIndex.toString(), (<HTMLInputElement>e.target).value);
  prj.updateCountAndTotal();
});

// Seat click event
prj.container.addEventListener('click', e => {
  // console.log(e.target);

  if (
    (<HTMLInputElement>e.target).classList.contains('seat') &&
    !(<HTMLInputElement>e.target).classList.contains('occupied')
  ) {
    // console.log(e.target);
    (<HTMLInputElement>e.target).classList.toggle('selected');

    prj.updateCountAndTotal();
  }

});

// Initial count and total set
prj.updateCountAndTotal();

