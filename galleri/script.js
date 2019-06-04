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
let galleri = [];



function start() {

    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu);
    }

    function visIndhold() {
        console.log(galleri);
        let dest = document.querySelector(".container-galleri");
        let temp = document.querySelector("template");
        galleri.forEach(indhold => {
            let klon = temp.cloneNode(true).content;
            klon.querySelector(".intro h1").innerHTML = indhold.title.rendered;
            klon.querySelector(".intro p").innerHTML = indhold.tekst;
            klon.querySelector(".intro .billede img").src = indhold.billede.guid;
            klon.querySelector(".galleri");

            console.log(klon)
            indhold.galleri_billeder.forEach(billeder => {
                klon.querySelector(".galleri").innerHTML += `<div class="billeder"><img src="${billeder.guid}" alt=""></div>`;
            });
            dest.appendChild(klon);


        });







    }


    async function getJson() {
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/galleri";
        let jsonData = await fetch(url);
        galleri = await jsonData.json();
        visIndhold();
    }

    getJson();


}
