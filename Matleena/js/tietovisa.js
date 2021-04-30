/// <reference path="jquery-3.6.0.min.js" />

// Matleena Autio

$(function(){

    let oikeat_vastaukset = 0;

    $(".kysymys1").on("click", function(){

        let valinta = Number($(this).val());

        if (valinta === 1) {
            $(".eka").addClass("hided");
            $(".toka").removeClass("hided");
            oikeat_vastaukset = oikeat_vastaukset + 1;
        } else {
            $(this).addClass("väärä");
            $("#tulos1").html("Valitettavasti vastauksesi oli väärin ja pelisi päättyy tähän.")
            $("#pisteet1").html("Pisteesti: " + oikeat_vastaukset + "/5");
            $("#uusipeli").removeClass("hided");
        }

        $(".kysymys1").prop("disabled", true);
    });

    $(".kysymys2").on("click", function(){

        let valinta = Number($(this).val());

        if (valinta === 1) {
            $(".toka").addClass("hided");
            $(".kolmas").removeClass("hided");
            oikeat_vastaukset = oikeat_vastaukset + 1;
        } else {
            $(this).addClass("väärä");
            $("#tulos2").html("Valitettavasti vastauksesi oli väärin ja pelisi päättyy tähän.")
            $("#pisteet2").html("Pisteesti: " + oikeat_vastaukset + "/5");
            $("#uusipeli2").removeClass("hided");
        }

        $(".kysymys2").prop("disabled", true);
    });

    $(".kysymys3").on("click", function(){

        let valinta = Number($(this).val());

        if (valinta === 1) {
            $(".kolmas").addClass("hided");
            $(".neljäs").removeClass("hided");
            oikeat_vastaukset = oikeat_vastaukset + 1;
        } else {
            $(this).addClass("väärä");
            $("#tulos3").html("Valitettavasti vastauksesi oli väärin ja pelisi päättyy tähän.")
            $("#pisteet3").html("Pisteesti: " + oikeat_vastaukset + "/5");
            $("#uusipeli3").removeClass("hided");
        }

        $(".kysymys3").prop("disabled", true);
    });

    $(".kysymys4").on("click", function(){

        let valinta = Number($(this).val());

        if (valinta === 1) {
            $(".neljäs").addClass("hided");
            $(".viides").removeClass("hided");
            oikeat_vastaukset = oikeat_vastaukset + 1;
        } else {
            $(this).addClass("väärä");
            $("#tulos4").html("Valitettavasti vastauksesi oli väärin ja pelisi päättyy tähän.")
            $("#pisteet4").html("Pisteesti: " + oikeat_vastaukset + "/5");
            $("#uusipeli4").removeClass("hided");
        }

        $(".kysymys4").prop("disabled", true);
    });

    $(".kysymys5").on("click", function(){

        let valinta = Number($(this).val());

        if (valinta === 1) {
            $(".viides").addClass("hided");
            $(".ohjeet").addClass("hided");
            $(".tulokset").removeClass("hided");
            oikeat_vastaukset = oikeat_vastaukset + 1;
        } else {
            $(this).addClass("väärä");
            $("#tulos5").html("Valitettavasti vastauksesi oli väärin ja pelisi päättyy tähän.")
            $("#pisteet5").html("Pisteesti: " + oikeat_vastaukset + "/5");
            $("#uusipeli5").removeClass("hided");
        }

        $(".kysymys5").prop("disabled", true);

        $("#total").html("Pisteesti: " + oikeat_vastaukset + "/5");

    });

    $(".aloita").on("click", function(){

        window.location.reload();
    });

});