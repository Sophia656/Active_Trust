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
const menuLinks = document.querySelectorAll('.menu__link[data-goto');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

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
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle(!'_lock');
        iconMenu.classList.toggle(!'_active');
        menuBody.classList.toggle('_active');
    });
} 

// const slider = document.querySelector('.slider')
// const sliderline = document.querySelector('.slider__line')
// const sliderItem = document.querySelectorAll('.slider__item')
// let count = 0;
// let width;

// const goLeft = () => {
//     console.log('left')
// }

// const left = document.querySelector('.slider-prev')
// console.log('left', left)
// left.addEventListener('click', goLeft)


// const goRight = () => {
//     console.log('right')
// }

// const right = document.querySelector('.slider-next')
// console.log('right', right)
// right.addEventListener('click', goRight)

// function init(){
//     console.log('resize');
//     width = document.querySelectorAll('.slider').offsetWidth;
//     sliderline.style.width = width*sliderItem.length + 'px';
//     sliderItem.forEach(item =>{
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     }) 
// }

// window.onload = () => {
//     slider.slick({
//         arrows:true,
//         dots:true,
//         adaptiveHeight:true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed:1000,
//         easing:'swing',
//         initialSlide: 0,
//         autoplay:true,
//         autoplaySpeed:1500,
//         pauseOnFocus:true,
//         pauseOnHover:true,
//         pauseOnDotsHover:true,
//         waitForAnimate:false,
//         centerMode:true,
        
//         responsive:[
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             },{
//                 breakpoint: 1025,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             }
//         ]
//     });
//     slider.slick('setPosition');
// }

// window.addEventListener('resize', init);
// init();


// function rollslider(){
//     sliderline.style.transform = 'translate(-'+count*width+'px';
// }

// let header = document.querySelector('.header__menu');
// let menu = document.querySelectorAll('.header__nav__top');
// let list = document.querySelectorAll('.header__nav__list');

// if(menu) {
//     menu.forEach((element, i) => {
//         element.addEventListener('mouseenter', function() {
//             list[i].classList.toggle('open');
//     });
// });
//     menu.forEach((element, i) => {
//         element.addEventListener('mouseleave', function() {
//             list[i].classList.toggle('open');
// });
// });

// };

// // order open by click
// let basket = document.querySelector('.header__basket');
// let bTop = basket.querySelector('.header__basket_top');

// bTop.onclick = function() {
//     basket.classList.toggle('open');
// };



// // $(document).ready(function(){
// //     $('.header__slider-box').slick({
    
// //     });
// // });
// const body = document.querySelector("body");
// const checkBox = document.getElementById('menu__burger_check')
// const headerMenu = document.querySelector('.header__menu')

// if(body && checkBox) {
//   body.addEventListener('click', function() {
//     if(checkBox.checked){
//       console.log('123')
//       checkBox.checked = false;
//     }
//   })
//   headerMenu.addEventListener('click', function(e) {
//     e.stopPropagation()
//   })
// }