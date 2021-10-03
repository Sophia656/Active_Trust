// slider 
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:1000,
        easing:'swing',
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        waitForAnimate:false,
        centerMode:true,
        
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode:false,
                }
            },{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.slider').slick('setPosition');
});

// menu - scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    const isHeaderFixed = window.document.documentElement.clientWidth < 769;

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = isHeaderFixed ? 
                (gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight) : 
                (gotoBlock.getBoundingClientRect().top + pageYOffset);

            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();

        }
    }
}

// menu burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function() {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
