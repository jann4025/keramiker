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
let forside = {};


function start() {
    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu);
    }

    function visForsideIndhold() {
        forside.forEach(forside => {
            document.querySelector("video").src = forside.baggrunds_video.guid;
            document.querySelector(".header-content").innerHTML = forside.velkommen_tekst;
            document.querySelector("#info-container .content p").innerHTML = forside.intro_tekst;
            document.querySelector("#kurser-container").style.backgroundImage = `url('${forside.kurser_billeder.guid}')`;
            document.querySelector("#kurser-container .content .top").innerHTML = forside.kurser_teskt;
            document.querySelector("#mest-solgte-container .billede1 img").src = forside.mest_solgt_billede_et.guid;
            document.querySelector("#mest-solgte-container .billede2 img").src = forside.mest_solgte_billede_to.guid;
            document.querySelector("#mest-solgte-container .billede3 img").src = forside.mest_solgte_billede_tre.guid;
            document.querySelector("#flakkebjerg-container").style.backgroundImage = `url('${forside.flakkebjerg_billede.guid}')`;
            document.querySelector("#flakkebjerg-container .content").innerHTML = forside.flakkebjerg_tekst;

        });

    }

    async function getJson() {
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/forside";
        let jsonData = await fetch(url);
        forside = await jsonData.json();
        visForsideIndhold();
    }

    getJson();


}
