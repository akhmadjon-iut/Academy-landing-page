$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        navConteiner: true,
        responsive:{
            0:{
                items:1,
                dots: true,
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






menu.onclick = function myFunction() {
    var x = document.getElementById("myMain-nav");
    if(x.className === "main-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "main-nav";
    }
}
const onNavItemClick = () => {
    const navItemList = document.querySelectorAll(".aw-section-link");
    const navItems = [...navItemList];

    navItems.forEach(item => {
        item.addEventListener("click", event => {
            event.preventDefault();

            const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

            scrollToSection(sectionId);
        })
    })
}
