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
let info = []; /* Variabel med et tomt array*/
let shop = []; /* Variabel med et tomt array*/
document.addEventListener("DOMContentLoaded", start); /* Tilføjer en Eventlistener som skal sikre at vores html (DOM) er loadet inden vi kalder på start funktionen */
let urlParams = new URLSearchParams(window.location.search);
let sejt = urlParams.get('sejt');


document.addEventListener("DOMContentLoaded", start);

function fadeIn() {
    document.querySelector(".se_mere").style.display = "block";
    document.querySelector(".se_mere").style.zIndex = "99";
}

function fadeOut() {
    document.querySelector(".se_mere").style.display = "none";
}



function start() {
    console.log(sejt);
    console.log("start");
    document.querySelector(".uil-bars").addEventListener("click", visMenu);



    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu);
    }



    function showShop() {
        console.log("shop");
        console.log(shop);

        let dest = document.querySelector(".produkter-container");
        let temp = document.querySelector("template");


        shop.forEach(produkt => {
            let klon = temp.cloneNode(true).content;

            klon.querySelector(".produkt h1").innerHTML = produkt.title.rendered;
            klon.querySelector(".produkt img").src = produkt.billede.guid;

            klon.querySelector(".pris").innerHTML = produkt.pris + (" ,-");

            dest.appendChild(klon);
            dest.lastElementChild.addEventListener("click", () => {
                /* Vælger det sidste element som kører igennem vores loop og tilføjer en adventlistener der lytter om der bliver klikket på den */
                location.href = "produkt.html?titel=" + produkt.title.rendered; /*Når der bliver klikket på elementet tager den os til en side ud fra hvilken titel elementet indeholder og overfører variablen til siden*/
            })
        })

    }

    function showInfo() {
        console.log(info);
        document.querySelector(".tekst p").innerHTML = info[0].content.rendered;
    }

    async function getJson() {
        console.log("hent data");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/produkter";
        let jsonData = await fetch(url);
        shop = await jsonData.json();
        showShop();
    }

    async function getInfo() {
        console.log("hent info");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/shop_beskrivelse";
        let jsonData = await fetch(url);
        info = await jsonData.json();
        showInfo();
    }
    getInfo();
    getJson();
}
