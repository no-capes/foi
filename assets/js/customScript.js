//Get the button
var mybutton = document.getElementById("goToTopBtn");

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
var goToTop = document.getElementById('goToTopBtn');
goToTop.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
    quoteSwiper.controller.control = imageSwiper;
    imageSwiper.controller.control = quoteSwiper;
});


//careers page js
//
// setTimeout(function () {
//     var element = document.getElementsByClassName('branding21')[0]
//     element.style.display = "none";
//     if (element === undefined || element.length == 0) {
//         //always return undefined on run
//         console.log("blah")
//         return;
//     }
//
// }, 1000);

//eo careers page js


//index page js

if ((document.getElementById('customerName') !== null) && (document.getElementById('customerReview') !== null)) {
    var curr_customer = -1,
        customerNames = [
            'Marilyn Kurtz',
            'Cory Laczko',
            'Bobbie',
            'Annie M',
            'Ruja Shah',
        ];

    var myInterval = setInterval(function () {
        document.getElementById('customerName').innerText = customerNames[(++curr_customer) % customerNames.length];
    }, 3000);


    var curr_review = -1,
        customerReviews = [
            'Flavours Of India is our favourite place to frequently visit! Every time we have been there it is always an awesome satisfying experience! Every dish that we have tried is amazingly yummy! You can taste the love and passion in every bite! It’s hard to recommend just one dish because every one of them is a ten out of ten!!! Thankyou Josan Family and staff for the top notch service and Oh So YUMMY Food! See you next time!',
            'Very delicious! We come here often and it\'s because every dish we try is great. Staff is friendly and remembers our order and our family. I highly recommend Flavors to all of our friends.',
            'Some of the best Indian food I\'ve had. The menu is all marked with which dishes are gluten-free and which are vegan, so it is very easy to eat here with food restrictions. Most of the menu is gluten-free, and they even have a gluten-free bread-like option',
            'Best Indian food in Regina. We have tried every Indian place and nothing compares to flavours of the food in this restaurant. Great prices for the delicious food. Friendly and hardworking staff. Offers gluten free options for those who are celiac. 100% recommend.',
            'Top Notch. Great Customer Service, Great Food and the Spice Levels. I had given them big orders twice and both the time no complaints. They are very flexible and accommodating to your needs. Support this restaurant you all.'
        ];

    var myInterval = setInterval(function () {
        document.getElementById('customerReview').innerText = customerReviews[(++curr_review) % customerReviews.length];
    }, 3000);
}

//eo index page js


//     (function () {
//     window.ybug_settings = {"id": "cpz575zzdkn9ny2sc1xj"};
//     var ybug = document.createElement('script');
//     ybug.type = 'text/javascript';
//     ybug.async = true;
//     ybug.src = 'https://widget.ybug.io/button/' + window.ybug_settings.id + '.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(ybug, s);
// })();
