// Too many error, work on this later

class ProjectInput {

  form: HTMLElement;
  alert: HTMLElement;
  grocery: HTMLInputElement;
  submitBtn: HTMLElement;
  container: HTMLElement;
  list: HTMLElement;
  clearBtn: HTMLElement;

  constructor() {
    this.form = document.querySelector(".grocery-form")! as HTMLElement;
    this.alert = document.querySelector(".alert")! as HTMLElement;
    this.grocery = document.getElementById("grocery")! as HTMLInputElement;
    this.submitBtn = document.querySelector(".submit-btn")! as HTMLElement;
    this.container = document.querySelector(".grocery-container")! as HTMLElement;
    this.list = document.querySelector(".grocery-list")! as HTMLElement;
    this.clearBtn = document.querySelector(".clear-btn")! as HTMLElement;
  }

}

// edit option
let editElement: HTMLInputElement;
let editFlag = false;
let editID = "";

const prj = new ProjectInput();

// submit form
// prj.form.addEventListener("submit", addItem);

// clear list
// prj.clearBtn.addEventListener("click", clearItems);

// display items onload
// window.addEventListener("DOMContentLoaded", setupItems);

// add item
function addItem(e: Event) {
  e.preventDefault();
  const value = prj.grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    prj.list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}


// delete item

function deleteItem(e: Event) {
  const element = (<HTMLInputElement>e.currentTarget).parentElement.parentElement;
  const id = element.dataset.id;

  prj.list.removeChild(element);

  if (prj.list.children.length === 0) {
    prj.container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}


// display alert
function displayAlert(text: String, action: String) {

  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}