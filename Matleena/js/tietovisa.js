/// <reference path="jquery-3.6.0.min.js" />

// Matleena Autio

$(function(){

    $("[name=kysymys1]").on("click", function(){

        let valinta = $("this").val();

        if (valinta === 1) {
            $("#tulos1").html("Hienoa! Vastasit oikein!");
        } else {
            $("#tulos1").html("Höh! Vastasit valitettavasti väärin.");
        }
    });




});