/// <reference path="jquery-3.6.0.min.js" />

$(".btn").on("click", function () {
    // Tarkistin, toimiiko funktio alert("Privet");
    if ($(this).hasClass("first")) {

        alert($('input[name=first]:checked').val());

    } else if ($(this).hasClass("second")) {

        alert($('input[name=second]:checked').val());

    } else if ($(this).hasClass("third")) {

        alert($('input[name=third]:checked').val());

    } else if ($(this).hasClass("fourth")) {

        alert($('input[name=fourth]:checked').val());

    } else if ($(this).hasClass("fifth")) {

        alert($('input[name=fifth]:checked').val());
    }
});
