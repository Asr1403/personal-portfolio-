jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        // background navbar color change script
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        // show scroll up btn script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0,
        });
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: [
            "Cloud Engineer",
            "DevOps Engineer",
            "Data Engineer",
            "Full Stack Developer"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1200,
        loop: true,
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        const fields = this.querySelectorAll('input, textarea');
        const body = `Name: ${fields[0].value}\nEmail: ${fields[1].value}\n\n${fields[3].value}`;
        window.location.href = 'mailto:Ayushsingh14005@gmail.com?subject=' + encodeURIComponent(fields[2].value) + '&body=' + encodeURIComponent(body);
    });
});
