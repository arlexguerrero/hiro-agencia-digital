$(document).ready(function(){
    $('.carousel1').owlCarousel({
        loop:true,
        dots:true,
        smartSpeed:700,
        items:1,
        // navText:['<', '>'],
        responsive:{
            0:{
                
                nav:false
            },
            600:{
              
                nav:false
            },
            1000:{
               
                nav:true
               
                
            }
        }
    });

    $('.carousel2').owlCarousel({
    
        margin:20,
        dots: true,
        autoWidth:true,
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause: true,
      
       // Activar los dots
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true,
                
            }
        }
    });

    $('.owl-proyectos__brand').owlCarousel({
        loop:true,
        margin:1,
        dots: true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause: true,
        autoWidth:true,
       // Activar los dots
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

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

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remover la clase 'active' de todos los botones y paneles
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // Agregar la clase 'active' al botón y panel correspondiente
    button.classList.add('active');
    tabPanes[index].classList.add('active');
  });
});

// Inicializa Simple Lightbox
    var gallery = new SimpleLightbox('.gallery a');
