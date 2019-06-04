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
let kurser = {};


function start() {
    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu);
    }

    function showKurser() {
        console.log("Kurser");
        console.log(kurser);

        let dest = document.querySelector(".kurser-container");
        let temp = document.querySelector("template");
        kurser.forEach(kursus => {
            let klon = temp.cloneNode(true).content;

            klon.querySelector(".beskrivelse1").innerHTML = kursus.kurser_beskrivelse_1;
            klon.querySelector(".billede p").innerHTML = kursus.kursus_beskrivelse_2;
            klon.querySelector(".pris").innerHTML = "Pris pr. deltager: " + kursus.kursus_pris;
            klon.querySelector(".billede").style.backgroundImage = `url('${kursus.kursus_billede.guid}')`;
            klon.querySelector(".tilmelding").innerHTML = kursus.content.rendered;

            dest.appendChild(klon);
        })
    }

    async function getJson() {
        console.log("hent data");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/kurser";
        let jsonData = await fetch(url);
        kurser = await jsonData.json();
        showKurser();
    }

    getJson();

}
