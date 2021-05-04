/// <reference path="jquery-3.6.0.min.js" />

// Matleena Autio, matikkavisa

$(function(){

    let oikeat_vastaukset = 0;

    $("#vastaa1").on("click", function(){

        let valinta = $("[name=vastaus]:checked").val();

        if (valinta === "1") {
            $("#tulos1").html("Hienoa! Vastauksesi on oikein.");
            oikeat_vastaukset = oikeat_vastaukset + 1;
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos1").html("Höh! Vastasit väärin.");
        }

        $(".kysymys1").prop("disabled", true);

    });

    $("#vastaa2").on("click", function(){

        let valinta = $("[name=vastaus2]:checked").val();

        if (valinta === "1") {
            $("#tulos2").html("Jes! Vastasit oikein.");
            oikeat_vastaukset = oikeat_vastaukset + 1;
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos2").html("Voi harmi! Väärin meni.");
        }

        $(".kysymys2").prop("disabled", true);

    });

    $("#vastaa3").on("click", function(){

        let valinta = $("[name=vastaus3]:checked").val();

        if (valinta === "1") {
            $("#tulos3").html("Hyvä!");
            oikeat_vastaukset = oikeat_vastaukset + 1;
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos3").html("Voi harmi. Nyt meni väärin.");
        }

        $(".kysymys3").prop("disabled", true);

    });

    $("#vastaa4").on("click", function(){

        let valinta = $("[name=vastaus4]:checked").val();

        if (valinta === "1") {
            $("#tulos4").html("Hienoa! Oikein meni.");
            oikeat_vastaukset = oikeat_vastaukset + 1;
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos4").html("Höh! Vastaus on väärin.");
        }

        $(".kysymys4").prop("disabled", true);

    });

    $("#vastaa5").on("click", function(){

        let valinta = $("[name=vastaus5]:checked").val();

        if (valinta === "1") {
            $("#tulos5").html("Jes! Vastaus on oikein.");
            oikeat_vastaukset = oikeat_vastaukset + 1;
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos5").html("Höh! Nyt meni mönkään.");
        }

        $(".kysymys5").prop("disabled", true);

    });

    $("#vastaa6").on("click", function(){

        let valinta = $("[name=vastaus6]:checked").val();

        if (valinta === "1") {
            $("#tulos6").html("Hyvä! Vastaus on oikein.");
            oikeat_vastaukset = oikeat_vastaukset + 1;
            $("#total").html(oikeat_vastaukset + " kysymykseen!");
        } else {
            $("#tulos6").html("Höh! Nyt meni mönkään.");
        }

        $(".kysymys6").prop("disabled", true);

        $(".tulokset").removeClass("hided");

    });


});