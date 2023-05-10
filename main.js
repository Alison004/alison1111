document.querySelector(".menu-btn").addEventListener("click", () => {
   document.querySelector(".nav-menu").classList.toggle("show")

})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:  500 });
ScrollReveal().reveal('.cards-banner-one', {delay:  500 });
ScrollReveal().reveal('.cards-banner-two', {delay:  500 });

// $(ducument).ready(main);

// var contador = 1 ;

// function main(){
//    $(".menu-btn").click(function(){
//       $(".nav-menu").classList.toggle("show")

//       if(contador == 1){
//          $(".nav-menu ").animate({
//             left: "0"
//          });
//       }else {
//          if(contador == 1){
//             $(".nav-menu").animate({
//                left: "-100%"
//             });
//       }

//    });
// }