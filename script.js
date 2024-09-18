
//inspired by https://www.w3schools.com/howto/howto_css_modals.asp

let modal = document.querySelector(".myModal");


let buttons = document.querySelectorAll(".myBtn");


let span = document.getElementsByClassName("close")[0];


let modalTitle = document.querySelector(".modal-title");

let content = document.querySelector(".button-container");
let contentH2 = document.querySelector(".container");

buttons.forEach(button => {
  button.onclick = function() {
  
    modalTitle.textContent =`I'm the ${button.textContent}`;
    content.classList.add("blur-background");
      //!!!! nu e crestineste sa fac asta din nou cu timpul poate o voi modifica
    contentH2.classList.add("blur-background");
    modal.style.display = "block";
    
  }
});


span.onclick = function() {
  modal.style.display = "none";
  content.classList.remove("blur-background");
    //!!!! nu e crestineste sa fac asta din nou cu timpul poate o voi modifica
  contentH2.classList.remove("blur-background");
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    content.classList.remove("blur-background");
       //!!!! nu e crestineste sa fac asta din nou cu timpul poate o voi modifica
    contentH2.classList.remove("blur-background");
  }
}

