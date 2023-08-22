

var slideIndex;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
          
  slideIndex++;   //chuyển đến slide tiếp theo
          
  if (slideIndex > slides.length - 1) {   //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    slideIndex = 0
  }    
         
  setTimeout(showSlides, 3000);
}
      


window.onload = function() {
  showSlides(slideIndex = 0); //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = n);
}


$(document).ready(function(){

  $(window).scroll(function() {
      if($(this).scrollTop()){
        $("#go").fadeIn();
      } else {
        $("#go").fadeOut();
      }
  });

  $("#go").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
  
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 185) {
      $("#menu").css({
        "position" : "fixed",
        "top" : 0,
        "left" : 0,
        "right" : 0,
        "z-index" : 999,
      })
    } else{
      $("#menu").css({
        "position": "static",
      })
    }
  });
});


