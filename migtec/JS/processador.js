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
 }

 function myFunctione() {
    var element = document.body;
    document.body.style.background = "#010012";
    document.getElementById("teste").style.color = "#000";
    document.getElementById("dark_mode").style.color = "#000";
 }