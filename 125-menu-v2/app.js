class ProjectInput {
    constructor() {
        // https://stackoverflow.com/questions/35435042/how-can-i-define-an-array-of-objects
        // menuTest: {
        //   id: number,
        //   title: string
        // }[] = [
        //     {
        //       id: 1,
        //       title: "Some info"
        //     },
        //     {
        //       id: 2,
        //       title: "Some info"
        //     }
        //   ]
        this.menu = [
            {
                id: 1,
                title: "buttermilk pancakes",
                category: "breakfast",
                price: 15.99,
                img: "./images/item-1.jpeg",
                desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan `
            },
            {
                id: 2,
                title: "diner double",
                category: "lunch",
                price: 13.99,
                img: "./images/item-2.jpeg",
                desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings `
            },
            {
                id: 3,
                title: "godzilla milkshake",
                category: "shakes",
                price: 6.99,
                img: "./images/item-3.jpeg",
                desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth`
            },
            {
                id: 4,
                title: "country delight",
                category: "breakfast",
                price: 20.99,
                img: "./images/item-4.jpeg",
                desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch.`
            },
            {
                id: 5,
                title: "egg attack",
                category: "lunch",
                price: 22.99,
                img: "./images/item-5.jpeg",
                desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation`
            },
            {
                id: 6,
                title: "oreo dream",
                category: "shakes",
                price: 18.99,
                img: "./images/item-6.jpeg",
                desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia`
            },
            {
                id: 7,
                title: "bacon overflow",
                category: "breakfast",
                price: 8.99,
                img: "./images/item-7.jpeg",
                desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly `
            },
            {
                id: 8,
                title: "american classic",
                category: "lunch",
                price: 12.99,
                img: "./images/item-8.jpeg",
                desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo le`
            },
            {
                id: 9,
                title: "quarantine buddy",
                category: "shakes",
                price: 16.99,
                img: "./images/item-9.jpeg",
                desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb y`
            },
            {
                id: 10,
                title: "bison steak",
                category: "dinner",
                price: 22.99,
                img: "./images/item-10.jpeg",
                desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie`
            },
        ];
        this.sectionCenter = document.querySelector(".section-center");
        this.btnContainer = document.querySelector(".btn-container");
    }
}
const prj = new ProjectInput();
// display all items when page loads
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(prj.menu);
    displayMenuButtons();
});
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        // console.log(item);
        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    // To avoid error, "Type 'string' is not assignable to type 'string[]'.ts(2322)""
    // Need to typecast, https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
    // displayMenu = (displayMenu).join("");
    let strDisplayMenu = displayMenu.join("");
    console.log(strDisplayMenu);
    prj.sectionCenter.innerHTML = strDisplayMenu;
}
function displayMenuButtons() {
    const categories = prj.menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);
    const categoryBtns = categories
        .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
        .join("");
    prj.btnContainer.innerHTML = categoryBtns;
    const filterBtns = prj.btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // console.log((<HTMLInputElement>e.currentTarget).dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = prj.menu.filter((menuItem) => {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(prj.menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
