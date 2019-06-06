$(function () {
    var header = $(".desktop-nav");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scroll")
        } else {
            header.removeClass("scroll")
        }
    })
});
document.addEventListener("DOMContentLoaded", start);
let forside = {};
let footerSektion = [];

function start() {
    document.querySelector(".animate").addEventListener("animationend", fjernAnimation);

    function fjernAnimation() {
        console.log("Animation end");
        document.querySelector(".animation-container").classList.add("fade");

        setTimeout(fjernContainer, 800);
    }

    function fjernContainer() {
        console.log("Fjern container")
        document.querySelector("#Lene_path").classList.remove("animate");
        document.querySelector(".animation-container").style.display = "none"
    }
    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu)
    }

    function visForsideIndhold() {
        footerSektion.forEach(footer => {
            console.log(footerSektion);
            document.querySelector(".open-hours").innerHTML = footerSektion[0].aabningstider;
            document.querySelector(".noget-andet").innerHTML = footerSektion[0].kontakt;
            document.querySelector(".facebook").href = footerSektion[0].facebook;
            document.querySelector(".instagram").href = footerSektion[0].instagram
        });
        forside.forEach(forside => {
            document.querySelector("video").src = forside.baggrunds_video.guid;
            document.querySelector(".header-content").innerHTML = forside.velkommen_tekst;
            document.querySelector(".header-content").innerHTML += `<div class="scroll_center">
                        <a href="#info-container">
                            <i class="fas fa-chevron-down scroll_down"></i>
                        </a>
                    </div>`
            document.querySelector("#info-container .info_tekst1").innerHTML = forside.intro_tekst;
            document.querySelector("#info-container .info_tekst2").innerHTML = forside.beskrivelse_tekst;
            document.querySelector("#info-container .billede1").src = forside.intro_billede1.guid;
            document.querySelector("#info-container .billede2").src = forside.intro_billede2.guid;
            document.querySelector("#kurser-container").style.backgroundImage = `url('${forside.kurser_billeder.guid}')`;
            document.querySelector("#kurser-container .content .top").innerHTML = forside.kurser_teskt;
            document.querySelector("#mest-solgte-container .billede1 img").src = forside.mest_solgt_billede_et.guid;
            document.querySelector("#mest-solgte-container .billede1 + span h3").innerHTML = forside.mest_solgte_vare_navn;
            document.querySelector("#mest-solgte-container .billede1 + span p").innerHTML = forside.mest_solgte_vare_pris;
            document.querySelector("#mest-solgte-container .billede2 img").src = forside.mest_solgte_billede_to.guid;
            document.querySelector("#mest-solgte-container .billede2 + span h3").innerHTML = forside.mest_solgte_vare_navn_2;
            document.querySelector("#mest-solgte-container .billede2 + span p").innerHTML = forside.mest_solgte_vare_pris_2;
            document.querySelector("#mest-solgte-container .billede3 img").src = forside.mest_solgte_billede_tre.guid;
            document.querySelector("#mest-solgte-container .billede3 + span h3").innerHTML = forside.mest_solgte_vare_navn_3;
            document.querySelector("#mest-solgte-container .billede3 + span p").innerHTML = forside.mest_solgte_vare_pris_3;
            document.querySelector("#flakkebjerg-container").style.backgroundImage = `url('${forside.flakkebjerg_billede.guid}')`;
            document.querySelector("#flakkebjerg-container .content").innerHTML = forside.flakkebjerg_tekst;
            document.querySelector("#flakkebjerg-container-mobile .content").innerHTML = forside.flakkebjerg_tekst;
            document.querySelector("#flakkebjerg-container-mobile img").src = forside.flakkebjerg_billede.guid
        })
    }
    async function getJson() {
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/forside"
        let footerUrl = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/footer";
        let jsonData = await fetch(url);
        let footerJson = await fetch(footerUrl);
        forside = await jsonData.json();
        footerSektion = await footerJson.json();
        visForsideIndhold()
    }
    getJson()
}
