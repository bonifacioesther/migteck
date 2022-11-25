var ul = document.querySelector('header ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
   if (ul.classList.contains('open')) {
      ul.classList.remove('open');
   }
   else{
      ul.classList.add('open');
   }
}



function myFunctionc() {
    var element = document.body;
    document.body.style.background = "#fff";
    document.getElementById("teste").style.color = "#000";
    document.getElementById("text").style.color = "#000";
    document.getElementById("text2").style.color = "#000";
    document.getElementById("text3").style.color = "#000";
    document.getElementById("produtos").style.background = "#010012";
    document.getElementById("produtos2").style.background = "#010012";
    document.getElementById("produtos3").style.background = "#010012";
 }

 function myFunctione() {
    var element = document.body;
    document.body.style.background = "#010012";
    document.getElementById("teste").style.color = "#000";
    document.getElementById("dark_mode").style.color = "#000";
 }


//MASCARA CELULAR
const phone = document.getElementById("phone");

phone.addEventListener("keypress", () => {
  let phonelength = phone.value.length;

  if (phonelength === 0) {
    phone.value += "(";
  } else if (phonelength === 3) {
    phone.value += ") ";
  } else if (phonelength === 10) {
    phone.value += "-";
  }
});
