const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{
    navLinks.classList.toggle('active')
})

const divActives = document.querySelector('.facility');
const navLocation = document.querySelector(".location-nav")



const text = document.querySelector('.circ_text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i* 9.2}deg)">${char}</span>`
).join("")


const logo = document.querySelectorAll("#logo path");







const buttons = document.querySelectorAll(".buttons button");

const tables = document.querySelectorAll(".tables table");

const selectList = (element, index = 0) => {
  tables.forEach((table) => table.classList.remove("active"));
  tables[index].classList.add("active");

  if (element) {
    buttons.forEach((button) => button.classList.remove("active"));
    element.classList.add("active");
  }
};

selectList();
    