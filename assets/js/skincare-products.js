// variable slideIndex that sets parameter of showSlides(n) to 1
let slideIndex = 1;
showSlides(slideIndex);

// takes n as parameter which changes slideIndex parameter to add n
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // if parameter n is less than the length of slides, set it equal to 1
  if (n > slides.length) {
    slideIndex = 1
  }
  // if n is less than 1, set slide index equal to slides length
  if (n < 1) {
    slideIndex = slides.length
  }
  // set i equal to 0 and if it is less than the slides length, add itself
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  console.log(n, slideIndex - 1);
  

}



