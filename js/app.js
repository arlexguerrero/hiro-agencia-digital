$(document).ready(function(){
    $('.carousel1').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });

    $('.carousel2').owlCarousel({
        loop:true,
        margin:1,
        responsiveClass:true,
        dots: true, // Activar los dots
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })
  });

  // Detecta el desplazamiento de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// Vuelve arriba al hacer clic en el botón
document.getElementById("back-to-top").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
});