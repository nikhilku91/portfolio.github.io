$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Web Designer", "React Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // contact form
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbZlaPXVeYFCfnmvbSJEUVnKTLdI0BsSZp3SQSeujYbgbviDmcVrShMeIYxfZsU48ysw/exec'
    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => alert("Thanks for Contacting me..! I Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
    })
});