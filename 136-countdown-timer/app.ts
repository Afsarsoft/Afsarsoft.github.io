class ProjectInput {

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  tempDate = new Date();

  subject: HTMLElement;
  target: HTMLElement;
  deadline: HTMLElement;
  items: NodeListOf<HTMLElement>;

  constructor() {
    this.subject = document.querySelector(".subject")! as HTMLElement;
    this.target = document.querySelector(".target")! as HTMLElement;
    this.deadline = document.querySelector(".deadline")! as HTMLElement;
    this.items = document.querySelectorAll(".deadline-format h4")! as NodeListOf<HTMLElement>;
  }

  getCurrentYear(): number {
    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();

    return tempYear;
  }

  getFutureDate(): Date {
    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();
    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

    return futureDate;
  }

  getTargetMessage(futureDate: Date): string {
    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();

    let tempMonth = futureDate.getMonth();
    // type conversion
    let month = tempMonth.toString();
    // months are ZERO index based;
    month = this.months[month];
    const weekday = this.weekdays[futureDate.getDay()];
    const date = futureDate.getDate();
    const message = `${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

    return message;
  }

}

const prj = new ProjectInput();
const futureDate = prj.getFutureDate();

// Note: JavaScript counts months from 0 to 11.
// So, January is 0. December is 11.
// const futureDate = new Date(2020, 11, 25, 0, 0, 0);
// const currentYear = prj.getCurrentYear();
// prj.subject.textContent = `Count down to Christmas ${currentYear}`

prj.subject.textContent = 'Old iPhone giveaway!'

let targetMessage = prj.getTargetMessage(futureDate);
prj.target.textContent = `Target ${targetMessage}`;

const futureTime = futureDate.getTime();
// let countdown = setInterval(getRemainingTime, 1000);

const getRemainingTime = () => {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in milliseconds

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  // Hard to define types in here!!!
  const values = [days, hours, minutes, seconds];
  const format = (item) => {
    if (+item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  prj.items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    prj.deadline.innerHTML = `<h4 class="expired">sorry, target date has expired!</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();


