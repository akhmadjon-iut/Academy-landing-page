$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        dots: true,
        
        navConteiner: true,
        animateOut: 'fadeOut',

        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            },
            1336:{
                items:4
            }
        }
    });
    
  });
  (() => {
    const onresultsChange = () => {
      let firstChild, lastChild;
  
          document.addEventListener("click", () => {
            if(event.target === prevArrow) {
                  lastChild = results.lastElementChild;
                  results.insertAdjacentElement("afterbegin", lastChild);
            } else if (event.target === nextArrow) {
                  firstChild = results.firstElementChild;
                  results.insertAdjacentElement("beforeend", firstChild);
            }
          })
    }
    onresultsChange();
})();