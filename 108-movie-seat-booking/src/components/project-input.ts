export class ProjectInput {
  ticketPrice: number

  // Getting all the HTML Info
  container: HTMLElement;
  seats: NodeListOf<Element>;
  count: HTMLInputElement;
  total: HTMLInputElement;
  movieSelect: HTMLSelectElement;

  constructor() {
    this.ticketPrice = 0;
    this.container = document.querySelector('.container')! as HTMLElement;
    this.seats = document.querySelectorAll('.row .seat:not(.occupied)')! as NodeListOf<Element>;
    this.count = document.getElementById('count')! as HTMLInputElement;
    this.total = document.getElementById('total')! as HTMLInputElement;
    this.movieSelect = document.getElementById('movie')! as HTMLSelectElement;
  }

  // Update total and count
  updateCountAndTotal() {
    let totalTicketPrice = 0;

    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);

    // 1-Copy selected seats in array, [...selectedSeats]
    // 2-Map through array
    // 3-Return a new array of indexes
    const seatsIndex = [...selectedSeats].map(seat => [...this.seats].indexOf(seat));
    // console.log(seatsIndex)

    // Saving the info in local storage incase of refreshing the page
    // Key value pare, since it is an array wrapping it
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    this.count.innerText = selectedSeatsCount.toString();
    totalTicketPrice = selectedSeatsCount * this.ticketPrice;
    this.total.innerText = totalTicketPrice.toString();
  }

  // Get data from local storage and populate UI
  populateUI() {
    // since it is an array, doing opposite of JSON.stringify
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')!);
    // console.log(selectedSeats);

    // Making sure we have some info
    if (selectedSeats !== null && selectedSeats.length > 0) {
      this.seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
      this.movieSelect.selectedIndex = +selectedMovieIndex;
    }
  }

  // Save selected movie index and price
  setMovieData(movieIndex: string, moviePrice: string) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }

}
