const tasksBox = document.querySelector(".tasks");
const input = document.querySelector(".inp");
const text = document.querySelector(".task__content");
const btnAdd = document.querySelector(".add");

//adding and removing element
function addNewElement() {
  tasksBox.style.padding = "10px 0";
  const tempInp = document.createElement("li");
  tempInp.classList.add("task");
  tempInp.innerHTML = `<p class="task__content">${input.value}</p>
        <button onclick="this.parentElement.remove()" class="remove">
            <svg class="remove-sv" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
                <path d="M6 6L14 14" stroke="#C4C4C4"/>
                <path d="M6 14L14 6" stroke="#C4C4C4"/>
            </svg>
        </button>`;
  input.value = "";
  tasksBox.insertBefore(tempInp, tasksBox.lastElementChild);
  remove = document.querySelectorAll(".remove");
  input.style.display = "none";
}

input.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addNewElement();
  }
});

btnAdd.addEventListener("click", () => {
  if (getComputedStyle(input).display != "none") {
    addNewElement();
  } else {
    input.style.display = "block";
  }
});

// sorting
const filterBtn = document.querySelector(".filter__btn");
let checkDU = false;

function sortItems(){
  var i, switching, b, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    b = tasksBox.getElementsByTagName("li");
    for (i = 0; i < (b.length - 2); i++) {
      shouldSwitch = false;
      
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


filterBtn.addEventListener("click", () => {
  if (checkDU == false) {
    filterBtn.innerHTML = `<svg class="filter-sv" width="25" height="15" viewBox="0 0 25 15"  xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" width="2.5" height="12.5"/>
    <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)"/>
    <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)"/>
    <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)"/>
    <path d="M3.75 15L0.502405 10.3125L6.9976 10.3125L3.75 15Z"/>
    </svg>`;
    checkDU = true;
    sortItems()
  } else {
    filterBtn.innerHTML = `<svg class="filter-sv" width="25" height="15" viewBox="0 0 25 15" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="15" width="2.5" height="12.5" transform="rotate(-180 5 15)"/>
    <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)"/>
    <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)"/>
    <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)"/>
    <path d="M3.75 6.55671e-07L6.99759 4.6875L0.502404 4.6875L3.75 6.55671e-07Z"/>
    </svg>`;
    checkDU = false;
    sortItems()
  }
});

