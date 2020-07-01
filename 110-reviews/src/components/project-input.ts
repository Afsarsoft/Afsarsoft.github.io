export class ProjectInput {

  private reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.
      Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v
      vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`,
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat
       offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`,
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo
       actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`,
    },
  ];

  // Getting all the HTML Info
  private img: HTMLInputElement;
  private author: HTMLElement;
  private job: HTMLElement;
  private info: HTMLElement;

  prevBtn: Element;
  nextBtn: Element;
  randomBtn: Element;

  // set current item
  currentItem = 0;

  constructor() {
    this.currentItem = 0;

    this.img = document.getElementById("person-img")! as HTMLInputElement;
    this.author = document.getElementById("author")! as HTMLElement;
    this.job = document.getElementById("job")! as HTMLElement;
    this.info = document.getElementById("info")! as HTMLElement;

    this.prevBtn = document.querySelector(".prev-btn")! as Element;
    this.nextBtn = document.querySelector(".next-btn")! as Element;
    this.randomBtn = document.querySelector(".random-btn")! as Element;
  }

  // show person based on item
  showPerson(person: number) {
    const item = this.reviews[person];
    this.img.src = item.img;
    this.author.textContent = item.name;
    this.job.textContent = item.job;
    this.info.textContent = item.text;
  }

  initItem() {
    const item = this.reviews[this.currentItem];
    this.img.src = item.img;
    this.author.textContent = item.name;
    this.job.textContent = item.job;
    this.info.textContent = item.text;
  }

  addItem() {
    this.currentItem++;
    if (this.currentItem > this.reviews.length - 1) {
      this.currentItem = 0;
    }
  }

  reduceItem() {
    this.currentItem--;
    if (this.currentItem < 0) {
      this.currentItem = this.reviews.length - 1;
    }
  }

  randomItem() {
    this.currentItem = Math.floor(Math.random() * this.reviews.length);
  }

}
