// ! Question 1
function showCustomAlert() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("customAlert").style.display = "block";
}

function closeCustomAlert() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("customAlert").style.display = "none";
}
//? Question 3
function toggle() {
  const food = document.querySelector(".food");
  food.classList.toggle("d-none");
}
// ! Question 4
function Onmouse(){
  const drinkImage = document.getElementById("drinkImage");

drinkImage.addEventListener("mouseover", function () {
  drinkImage.src = "image/Group.png";
});

drinkImage.addEventListener("mouseout", function () {
  drinkImage.src = "image/food.png";
});
}

// ! Question 5
let currentItemCount = 0;
const maxItems = 16;
const itemsPerClick = 4;
function showMore() {
  const list = document.getElementById("item-list");
  const message = document.getElementById("message");
  const button = document.getElementById("show-more-btn");

  for (let i = 0; i < itemsPerClick; i++) {
    if (currentItemCount >= maxItems) {
      break;
    } // يوقف بدقة عند 16 عنصر

    currentItemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + currentItemCount;
    li.style.listStyleType = "none";

    li.style.marginLeft = "0";
    li.style.paddingLeft = "0";
    list.appendChild(li);
  }

  if (currentItemCount >= maxItems) {
    message.textContent = "No more items";
    message.style.display = "block";
    button.style.display = "none";
  }
}
window.onload = function () {
  showMore();
};
// TODO Qusetion 6
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const alertMsg = document.getElementById("alertMsg");

 
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      alertMsg.classList.remove("d-none");
    }
    
    else if (phone.length !== 8 || !/^\d{8}$/.test(phone)) {
       alertMsg.textContent = "invalid fields:Valid 8-digit Phone Number";
      alertMsg.classList.remove("d-none");
    }
  
    else {
      alertMsg.classList.add("d-none");
     alertMsg.textContent = " Success";
      alertMsg.className = "alert alert-success"; 
      alertMsg.classList.remove("d-none");
    }
  });
});
//! Question 7

  const colors = ['green', 'red', 'yellow', 'black'];
  let currentColorIndex = 0;

  function setupColorCycling() {
    const pinkSection = document.getElementById('pink-section');
    
    pinkSection.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }
//TODO Question 8
 window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
navbar.style.zIndex="800"

    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
      navbar.style.background="#F4F4F4"
    } else {
      navbar.classList.remove('sticky');
      navbar.style.background="#ffff"
    }
  });
  //! Question 9
  const toggleSwitch = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
toggleSwitch.addEventListener('change', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});
//? Question 10
let timeLeft = 3600;
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  const hoursStr = '00';
  const minutesStr = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secondsStr = String(timeLeft % 60).padStart(2, '0');

  const formatted = `${hoursStr}:${minutesStr}:${secondsStr}`;
  countdownEl.textContent = formatted;

  if (timeLeft <= 0) {
    clearInterval(timerId);
    countdownEl.textContent = "Offer expired!";
  }

  timeLeft--;
}

updateCountdown();
const timerId = setInterval(updateCountdown, 500);
//! Question 12
   async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
          const nine = posts.slice(0, 9);
      console.log(nine)}
        catch (error){
           console.error('Error fetching posts:', error);
        }
      }
        fetchPosts();

