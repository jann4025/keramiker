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
let om = {};

function start() {
    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu);
    }

    function visOmIndhold() {
        om.forEach(om => {
//            document.querySelector("").src = om.splash.guid;
            document.querySelector(".splash-content").innerHTML = om.overskrift;
            document.querySelector(".om-billede img").src = om.billede_om.guid;
            document.querySelector(".om-tekst").innerHTML = om.tekst;
            document.querySelector(".cv-tekst").innerHTML = om.cv;
            document.querySelector(".cv-billede img").src = om.cv_billede.guid;
            document.querySelector("#kontakt-container h1").innerHTML = om.kontakt_overskrift;
            document.querySelector("#kontakt-container p").innerHTML = om.kontakt_tekst;
            document.querySelector("#kontakt-container p").innerHTML = om.google_kort_tekst;


        });

    }
    async function getJson() {
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/om_lene_hansen";
        let jsonData = await fetch(url);
        om = await jsonData.json();
        visOmIndhold();
    }

    getJson();

}
