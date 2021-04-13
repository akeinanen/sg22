/// <reference path="jquery-3.6.0.min.js" />

// Matleena Autio

$(function(){

    $("#vastaa1").on("click", function(){

        let valinta = $("[name=vastaus]:checked").val();

        if (valinta === "1") {
            $("#tulos1").html("Hienoa! Vastauksesi on oikein.");
        } else {
            $("#tulos1").html("Höh! Vastasit väärin.");
        }
    });

    $("#vastaa2").on("click", function(){

        let valinta = $("[name=vastaus2]:checked").val();

        if (valinta === "1") {
            $("#tulos2").html("Jes! Vastasit oikein.");
        } else {
            $("#tulos2").html("Voi harmi! Väärin meni.");
        }
    });

    $("#vastaa3").on("click", function(){

        let valinta = $("[name=vastaus3]:checked").val();

        if (valinta === "1") {
            $("#tulos3").html("Hyvä!");
        } else {
            $("#tulos3").html(".");
        }
    });

    $("#vastaa4").on("click", function(){

        let valinta = $("[name=vastaus4]:checked").val();

        if (valinta === "1") {
            $("#tulos4").html("Hienoa! Oikein meni.");
        } else {
            $("#tulos4").html("Höh! Vastaus on väärin.");
        }
    });

    $("#vastaa5").on("click", function(){

        let valinta = $("[name=vastaus5]:checked").val();

        if (valinta === "1") {
            $("#tulos5").html("Jes! Vastaus on oikein.");
        } else {
            $("#tulos5").html("Höh! Nyt meni mönkään.");
        }
    });

});