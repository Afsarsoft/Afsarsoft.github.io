class ProjectInput {
  // Getting all the HTML Info
  btn: HTMLElement;
  video: HTMLMediaElement;

  constructor() {
    this.btn = document.querySelector(".switch-btn")! as HTMLElement;
    this.video = document.querySelector(".video-container")! as HTMLMediaElement;
  }

}

const prj = new ProjectInput();

prj.btn.addEventListener("click", () => {
  if (!prj.btn.classList.contains("slide")) {
    prj.btn.classList.add("slide");
    prj.video.pause();
  } else {
    prj.btn.classList.remove("slide");
    prj.video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});


