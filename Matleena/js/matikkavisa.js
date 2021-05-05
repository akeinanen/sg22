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
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos1").html("Höh! Vastasit väärin.");
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
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos2").html("Voi harmi! Väärin meni.");
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
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos3").html("Voi harmi. Nyt meni väärin.");
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
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos4").html("Höh! Vastaus on väärin.");
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
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos5").html("Höh! Nyt meni mönkään.");
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
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos6").html("Höh! Nyt meni mönkään.");
            vastatut++;
        }

        $(".kysymys6").prop("disabled", true);

    });

    // Palkintojen lunastus
    $("#lunasta").on("click", function(){

        if (oikeat_vastaukset < 2) {
            $("#sad").removeClass("hided");
            $("#lunasta").addClass("hided");
        } else if (oikeat_vastaukset < 4) {
            $("#ok").removeClass("hided");
        } else if (oikeat_vastaukset < 6) {
            $("#smiley").removeClass("hided");
        }
    });

});