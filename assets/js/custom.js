//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(document).ready(function () {
    quoteSwiper.controller.control = imageSwiper;
    imageSwiper.controller.control = quoteSwiper;
});

//Ybug code start

(function () {
    window.ybug_settings = {"id": "cpz575zzdkn9ny2sc1xj"};
    var ybug = document.createElement('script');
    ybug.type = 'text/javascript';
    ybug.async = true;
    ybug.src = 'https://widget.ybug.io/button/' + window.ybug_settings.id + '.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ybug, s);
})();
//Ybug code end