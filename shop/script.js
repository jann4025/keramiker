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

let shop = [];
document.addEventListener("DOMContentLoaded", start);


function start() {
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
            klon.querySelector(".beskrivelse").innerHTML = produkt.beskrivelse;
            klon.querySelector(".pris").innerHTML = produkt.pris;

            dest.appendChild(klon);
        })

    }

    async function getJson() {
        console.log("hent data");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/produkter";
        let jsonData = await fetch(url);
        shop = await jsonData.json();
        showShop();
    }

    getJson();

}
