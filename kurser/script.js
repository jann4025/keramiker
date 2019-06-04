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


document.addEventListener("DOMContentLoaded", start); /* Tilføjer en Eventlistener som skal sikre at vores html (DOM) er loadet inden vi kalder på start funktionen */
let kurser = {}; /* Variabel med et tomt array*/


function start() {

    document.querySelector(".uil-bars").addEventListener("click", visMenu); /* */

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav"); /* Toggler classen hide-mobile-nav, som skjuler vores Nav bar når den siden ses på en mindre skærm */
        document.querySelector(".uil").classList.toggle("fa-bars"); /* Toggler de tre streger i burgermenuen*/
        document.querySelector(".uil").classList.toggle("uil-multiply"); /* Toggler et kryds i burgermeneun */
        document.querySelector(".uil-multiply").addEventListener("click", visMenu); /* Gør at funktionen går i ring */
    }



    function showKurser() {
        console.log("Kurser");
        console.log(kurser);

        let dest = document.querySelector(".kurser-container"); /* Variabel hvor vi angiver hvor vores inhold skal placeres i html */
        let temp = document.querySelector("template"); /* Varibel hvor vi angiver hvilken template funktionen skal bruge i html */

        kurser.forEach(kursus => { /* Et loop hvor vi får sat alle vores array elementer ind i hver deres template */
            let klon = temp.cloneNode(true).content; /*Variabel som siger at kloning af template taggets indhold sker */

            klon.querySelector(".beskrivelse1").innerHTML = kursus.kurser_beskrivelse_1;
            klon.querySelector(".billede p").innerHTML = kursus.kursus_beskrivelse_2;
            klon.querySelector(".pris").innerHTML = "Pris pr. deltager: " + kursus.kursus_pris;
            klon.querySelector(".billede").style.backgroundImage = `url('${kursus.kursus_billede.guid}')`;
            klon.querySelector(".tilmelding").innerHTML = kursus.content.rendered;

            dest.appendChild(klon); /* Tilføj klonen til dest varialben (main variablen) */
        })
    }

    async function getJson() { /* Async funktion som henter vores JSON ned */
        console.log("hent data");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/kurser"; /* En variabel med et link som indeholder vores indhold fra en json side */
        let jsonData = await fetch(url); /* Variabel som henter vores JSON indhold ned fra vores url variabl */
        kurser = await jsonData.json(); /* Henter vores JSON indhold og putter det ind i vores tomme array */
        showKurser(); /* Kalder funktionen som skal vise vores indhold */
    }

    getJson(); /* Kalder funktionen som skal hente vores indhold */









}
