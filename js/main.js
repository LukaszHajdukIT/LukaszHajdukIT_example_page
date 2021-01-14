document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
// dodaje cień do nawigacji
    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    }

    window.addEventListener('scroll', addShadow);

// skrypt naprawiający nawigację (zamyka się po kliknięciu w cokolwiek na mobilce)
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

// slick JS
    $('.your-class').slick({
        // setting - name: setting - value
    });
});