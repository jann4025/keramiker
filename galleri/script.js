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
let vaerkstedet;
let vaerkstedetGalleri = {};
let brugskunst;
let brugskunstGalleri = {};



function start() {

    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu);
    }



    function visVaerkstedsIndhold() {
        console.log(vaerkstedetGalleri);
        document.querySelector(".container-galleri-vaerkstedet h1").innerHTML = vaerkstedet.title.rendered;
        document.querySelector(".container-galleri-vaerkstedet p").innerHTML = vaerkstedet.tekst;
        document.querySelector(".container-galleri-vaerkstedet .billede img").src = vaerkstedet.billede.guid;
    }


    function visVaerkstedGalleri() {
        vaerkstedetGalleri.forEach(galleri => {
            document.querySelector(".container-galleri-vaerkstedet .galleri").innerHTML += `<div class="billede"><img src="${galleri.media_details.sizes.medium.source_url}" alt=""></div>`;
        });
    }


    function visBrugsKunstIndhold() {

        document.querySelector(".container-galleri-brugskunst h1").innerHTML = brugskunst.title.rendered;
        document.querySelector(".container-galleri-brugskunst p").innerHTML = brugskunst.tekst;
        document.querySelector(".container-galleri-brugskunst .billede img").src = brugskunst.billede.guid;
    }

    function visBrugsKunstGalleri() {
        console.log("hej");
        brugskunstGalleri.forEach(galleri => {
            document.querySelector(".container-galleri-brugskunst .galleri").innerHTML += `<div class="billede"><img src="${galleri.media_details.sizes.medium.source_url}" alt=""></div>`;
        });
    }

    async function getJsonvaerkstedet() {
        let url1 = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/galleri/108";
        let jsonData = await fetch(url1);
        vaerkstedet = await jsonData.json();
        visVaerkstedsIndhold();
    }

    getJsonvaerkstedet();

    async function getJsonGallerivaerkstedet() {
        let url2 = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/media?parent=108";
        let jsonData = await fetch(url2);
        vaerkstedetGalleri = await jsonData.json();
        visVaerkstedGalleri();
    }

    getJsonGallerivaerkstedet();

    async function getJsonBrugsKunst() {
        let url3 = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/galleri/107";
        let jsonData = await fetch(url3);
        brugskunst = await jsonData.json();
        visBrugsKunstIndhold();
    }

    getJsonBrugsKunst();

    async function getJsonGalleriBrugsKunst() {
        console.log("hej")
        let url4 = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/media?parent=107";
        let jsonData = await fetch(url4);
        brugskunstGalleri = await jsonData.json();
        visBrugsKunstGalleri();
    }

    getJsonGalleriBrugsKunst();


}
