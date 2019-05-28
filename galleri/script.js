$(function () {
    var header = $(".desktop-nav");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scroll");
        } else {
            header.removeClass("scroll");
        }
    });

});
document.addEventListener("DOMContentLoaded", start);

function start() {

    function visGalleriIndhold() {

    }

    async function getJson() {
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/galleri";
        let jsonData = await fetch(url);
        forside = await jsonData.json();
        visGalleriIndhold();
    }

    getJson();

}
