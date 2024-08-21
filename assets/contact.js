
const Button = document.querySelector("#submit");
const Inputs = document.querySelectorAll(".input");
const checkradio = document.querySelector("#radio");
const checkradio2 = document.querySelector("#radio2");
const succes=document.querySelector(".success");

const showSucces = () => {
      Inputs.forEach((item) => {
        if (item.type === "radio") {
          item.checked = false;
        } else {
          item.value = "";
        }
        checkradio2.style.display = "none";
      });
    setTimeout(() => {
      succes.classList.remove("errorFunction")
        succes.style.display="block";
        succes.innerHTML=`<div><p>Message sent!</p>
        <span>Thanks for compeleting the form !</span></div>`;
      }, 1000);
      setTimeout(() => {
        succes.style.display="none";
      }, 3000);
      
    }

const showError=()=>{
  setTimeout(() => {
    succes.style.display="block";
    succes.classList.add("errorFunction")
    succes.innerHTML=`<div><p>Message has an error!</p>
    <span>Please compelete the form !</span></div>`;
  }, 1000);
  setTimeout(() => {
    succes.style.display="none";
  }, 3000);
}

const start = () => {
  let isValid = true;

  Inputs.forEach((item) => {
    
    const filter = item.dataset.filter;

    if (filter === "name" || filter === "last name") {
      if (!item.value || !/[a-zA-Z]{2,30}/.test(item.value)) {
        item.nextElementSibling.style.display = "block";
        isValid = false;
      } else {
        item.nextElementSibling.style.display = "none";
      }
    }

    if (filter === "email") {
      if (!item.value.includes("@")) {
        item.nextElementSibling.style.display = "block";
        isValid = false;
      } else {
        item.nextElementSibling.style.display = "none";
      }
    }

    if (filter === "radio") {
      const radioSelected = document.querySelector('input[name="radio"]:checked');
      if (!radioSelected) {
        checkradio.style.display = "block";
        isValid = false;
      } else {
        checkradio.style.display = "none";
      }
    }

    if (filter === "message") {
      if (!item.value) {
        item.nextElementSibling.style.display = "block";
        isValid = false;
      } else {
        item.nextElementSibling.style.display = "none";
      }
    }

    if (filter === "accept") {
      if (!item.checked) {
        checkradio2.style.display = "block";
        isValid = false;
      } else {
        checkradio2.style.display = "none";
      }
    }
  });

  if (isValid) {
    showSucces();
  } else {
    showError();
  }
};

const onpaste=()=>{
  Inputs.forEach((item)=>{
    item.onpaste = e => e.preventDefault();
  })
}


Button.addEventListener("click", (e) => {
  e.preventDefault();
  start();
});

window.addEventListener("DOMContentLoaded" , onpaste)


