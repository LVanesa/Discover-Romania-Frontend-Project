// Define an array of image URLs
var imageUrls = [
  'contact_images/1.jpg',
  'contact_images/2.jpg',
  'contact_images/3.jpg',
  'contact_images/4.jpg',
  'contact_images/5.jpg',

];

function validateForm() {

  var lastNameInput = document.getElementById('lname');
  var firstNameInput = document.getElementById('fname');
  var emailInput = document.getElementById('email');
  
  var lname = lastNameInput.value.trim();
  var fname = firstNameInput.value.trim();
  var email = emailInput.value.trim();
  
  if (lname === '') {
    alert('Please enter your last name.');
    lastNameInput.focus();
    return false;
  }
  if (fname === '') {
    alert('Please enter your first name.');
    firstNameInput.focus();
    return false;
  }
  
  if (email === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  }
  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }
  
  return true;
}

function getRandomImageUrl() {
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function handleFormSubmit(event) {
  event.preventDefault(); 
  var isValid = validateForm();

  if (isValid) {
    var randomImageUrl = getRandomImageUrl();
    var randomImage = document.getElementById('randomImage');
    randomImage.src = randomImageUrl;

    var randomImageContainer = document.getElementById('randomImageContainer');
    randomImageContainer.style.display = 'block';
    alert("Your message was successfully submitted!");
    form.reset();
  }
}

window.onload = function(){
  const inputs = document.querySelectorAll(".contact-input");
  const toggleBtn = document.querySelector(".theme-toggle");
  const allElements = document.querySelectorAll("*");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    var theme;
    if(document.body.classList.contains("dark")){
      console.log("Dark Mode");
      theme="DARK";
    }
    else{
      console.log("Light mode");
      theme="LIGHT";
    }

    //SAVE OPTION TO LOCALSTORAGE
    localStorage.setItem("PageTheme", JSON.stringify(theme));
  
    const themeToggle = document.querySelector(".theme-toggle");
    const faMoon = themeToggle.querySelector(".fa-moon");

    if (document.body.classList.contains("dark")) {
      faMoon.style.display = "inline";
      faMoon.style.color = "#9e9e9e";
    }

    allElements.forEach((el) => {
      el.classList.add("transition");
      setTimeout(() => {
        el.classList.remove("transition");
      }, 1000);
    });
  });

  inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
      if (ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });

  let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
  console.log(GetTheme);
  if(GetTheme === "DARK"){
    document.body.classList.toggle("dark");
  }
  
  var form = document.getElementsByTagName('form')?.[0];
  form.addEventListener('submit', handleFormSubmit);
}