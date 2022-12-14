$('.banner-slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.only-slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    autoplayHoverPause: false,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 6
        },
        1000: { 
            items: 6
        }
    }
});  


// portfolio section

var containerEl = document.querySelector(".portfolio-item");
var mixer = mixitup(containerEl, {
    animation: {
        effects: "fade translateZ(-100px)",
        effectsIn: "fade translateY(-100%)",
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
    }
});


// accordion 

// let btn_1 = document.querySelector('.button-1')
//         let icon_1 = document.querySelector('.icon-1')
//         console.log(icon_1)


//         btn_1.addEventListener('click', function () {
//             icon_1.classList.toggle('active-icon')
//         })