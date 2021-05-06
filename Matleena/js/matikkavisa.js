/// <reference path="jquery-3.6.0.min.js" />

// Matleena Autio, matikkavisa

$(function(){

    let oikeat_vastaukset = 0;
    let vastatut = 0;

    $("#vastaa1").on("click", function(){

        let valinta = $("[name=vastaus]:checked").val();

        if (valinta === "1") {
            $("#tulos1").html("Hienoa! Vastauksesi on oikein.");
            oikeat_vastaukset++;
            vastatut++;
        } else {
            $("#tulos1").html("Höh! Vastasit väärin. Oikea vastaus olisi ollut 15.");
            vastatut++;
        }

        $(".kysymys1").prop("disabled", true);

    });

    $("#vastaa2").on("click", function(){

        let valinta = $("[name=vastaus2]:checked").val();

        if (valinta === "1") {
            $("#tulos2").html("Jes! Vastasit oikein.");
            oikeat_vastaukset++;
            vastatut++;
        } else {
            $("#tulos2").html("Voi harmi! Väärin meni. Oikea vastaus olisi ollut 24.");
            vastatut++;
        }

        $(".kysymys2").prop("disabled", true);

    });

    $("#vastaa3").on("click", function(){

        let valinta = $("[name=vastaus3]:checked").val();

        if (valinta === "1") {
            $("#tulos3").html("Hyvä!");
            oikeat_vastaukset++;
            vastatut++;
        } else {
            $("#tulos3").html("Voi harmi. Nyt meni väärin. Oikea vastaus olisi ollut 42.");
            vastatut++;
        }

        $(".kysymys3").prop("disabled", true);

    });

    $("#vastaa4").on("click", function(){

        let valinta = $("[name=vastaus4]:checked").val();

        if (valinta === "1") {
            $("#tulos4").html("Hienoa! Oikein meni.");
            oikeat_vastaukset++;
            vastatut++;
        } else {
            $("#tulos4").html("Höh! Vastaus on väärin. Oikea vastaus olisi ollut 40.");
            vastatut++;
        }

        $(".kysymys4").prop("disabled", true);

    });

    $("#vastaa5").on("click", function(){

        let valinta = $("[name=vastaus5]:checked").val();

        if (valinta === "1") {
            $("#tulos5").html("Jes! Vastaus on oikein.");
            oikeat_vastaukset++;
            vastatut++;
        } else {
            $("#tulos5").html("Höh! Nyt meni mönkään. Oikea vastaus olisi ollut 72.");
            vastatut++;
        }

        $(".kysymys5").prop("disabled", true);

    });

    $("#vastaa6").on("click", function(){

        let valinta = $("[name=vastaus6]:checked").val();

        if (valinta === "1") {
            $("#tulos6").html("Hyvä! Vastaus on oikein.");
            oikeat_vastaukset++;
            vastatut++;
        } else {
            $("#tulos6").html("Höh! Nyt meni mönkään. Oikea vastaus olisi ollut 21.");
            vastatut++;
        }

        $(".kysymys6").prop("disabled", true);

    });

    // Palkintojen lunastus
    $("#lunasta").on("click", function(){

        if (vastatut < 6) {
            myModal();
        } else if (vastatut === 6) {
            if (oikeat_vastaukset > 5) {
                $("#lunasta").addClass("hided");
                $("#smiley").removeClass("hided");
                $(".total").html("Pisteesi: " + oikeat_vastaukset + "/6");
                $("#uusipeli").removeClass("hided");
            } else if (oikeat_vastaukset >= 3) {
                $("#lunasta").addClass("hided");
                $("#ok").removeClass("hided");
                $(".total").html("Pisteesi: " + oikeat_vastaukset + "/6");
                $("#uusipeli").removeClass("hided");
            } else {
                $("#lunasta").addClass("hided");
                $("#sad").removeClass("hided");
                $(".total").html("Pisteesi: " + oikeat_vastaukset + "/6");
                $("#uusipeli").removeClass("hided");
            }
        }

    });

    $("#uusipeli").on("click", function(){

        window.location.reload();
    });

    function myModal() {
        let myModal = new bootstrap.Modal(document.getElementById('myModal'))
        myModal.show();
    }

});