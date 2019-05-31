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

    function visGalleriIndhold() {
        console.log(galleri);
        let gal = "";
        let dest = document.querySelector(".container-galleri");
        let temp = document.querySelector("template");
        galleri.forEach(galleri => {
            let klon = temp.cloneNode(true).content;
            klon.querySelector("h1").innerHTML = galleri.title.rendered;
            klon.querySelector("p").innerHTML = galleri.tekst;
            klon.querySelector(".billede img").src = galleri.billede.guid;
            //            klon.querySelector(".galleri").innerHTML = galleri.galleri_billeder;

            let galleriarray = galleri.galleri_billeder;

            galleriarray.forEach(img => {
                gal += `<div class="billede">
    <img src="${img.guid}" alt="">
</div>`;
            })
            klon.querySelector(".galleri").innerHTML = gal;
            console.log(gal);
            dest.appendChild(klon);
        });
    }

    async function getJson() {
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/galleri";
        let jsonData = await fetch(url);
        galleri = await jsonData.json();
        visGalleriIndhold();
    }

    getJson();

}
