/// <reference path="jquery-3.6.0.min.js" />

/* Author - Vadim Panfilov */
$(function () {

    let flagFirst = true, flagSecond = true, flagThird = true, flagFourth = true, flagFifth = true;

    let counter = 0;
    let answers = 0;

    $(".btn").on("click", function () {

        if ($(this).hasClass("first")) {

            let vastaus = Number($('input[name=first]:checked').val());

            if (flagFirst) {
                flagFirst = false;
                $('input[name=first]').prop("disabled", true);
                answers++;
                if (vastaus === 1) {

                    $("#result1").html("Oikea vastaus!");
                    $("#result1").addClass("selected");

                    counter++;

                } else {

                    $('#result1').html("Ei, oikea vastaus on Brazil");
                    $("#result1").removeClass("selected");
                    $('input[name=first][value="1"]').addClass("oikea_vastaus");

                }
            }

        } else if ($(this).hasClass("second")) {

            let vastaus = Number($('input[name=second]:checked').val());
            if (flagSecond) {
                $('input[name=second]').prop("disabled", true);
                flagSecond = false;
                answers++;
                if (vastaus === 1) {
                    $("#result2").html("Oikea vastaus!");
                    $("#result2").addClass("selected");
                    counter++;

                } else {

                    $('#result2').html("Ei, oikea vastaus on Italia");
                    $("#result2").removeClass("selected");
                    $('input[name=second][value="1"]').addClass("oikea_vastaus");
                }
            }

        } else if ($(this).hasClass("third")) {

            let vastaus = Number($('input[name=third]:checked').val());
            if (flagThird) {
                $('input[name=third]').prop("disabled", true);
                flagThird = false;
                answers++;
                if (vastaus === 1) {
                    $("#result3").html("Oikea vastaus!");
                    $("#result3").addClass("selected");
                    counter++;

                } else {

                    $('#result3').html("Ei, oikea vastaus on Iso-Britannia");
                    $("#result3").removeClass("selected");
                    $('input[name=third][value="1"]').addClass("oikea_vastaus");
                }
            }

        } else if ($(this).hasClass("fourth")) {

            let vastaus = Number($('input[name=fourth]:checked').val());
            if (flagFourth) {
                $('input[name=fourth]').prop("disabled", true);
                flagFourth = false;
                answers++;
                if (vastaus === 1) {
                    $("#result4").html("Hyvä!");
                    $("#result4").addClass("selected");
                    counter++;

                } else {

                    $('#result4').html("Ei, oikea vastaus on Diego Maradona");
                    $("#result4").removeClass("selected");
                    $('input[name=fourth][value="1"]').addClass("oikea_vastaus");

                }
            }

        } else if ($(this).hasClass("fifth")) {

            let vastaus = Number($('input[name=fifth]:checked').val());
            if (flagFifth) {
                $('input[name=fifth]').prop("disabled", true);
                flagFifth = true;
                answers++;
                if (vastaus === 1) {
                    $("#result5").html("Oikea vastaus!");
                    $("#result5").addClass("selected");
                    counter++;

                } else {

                    $('#result5').html("Ei, oikea vastaus on Venäjä");
                    $("#result5").removeClass("selected");
                    $('input[name=fifth][value="1"]').addClass("oikea_vastaus");
                }
            }
        }

    });

    $("#result10").on("click", function () { // laskea oikeat vastaukset button

        if (answers < 5) {

            myModal();

        } else if (counter < 3) {
            $("#pisteet").html("Pisteet: " + counter + "/5" + "<br>" + "Kokeile uudelleen. Paina 'Aloittaa uudelleen' nappi.");
        } else if (counter >= 3) {
            $("#pisteet").html("Pisteet: " + counter + "/5");
            $("#smiley").removeClass("smiley1");
        }

    });

    function myModal() {
        let myModal = new bootstrap.Modal(document.getElementById('myModal'))
        myModal.show();
    }

    $("#uudestaan").on("click", function () { // uudestaan nappi/button

        flagFirst = true;
        flagSecond = true;
        flagThird = true;
        flagFourth = true;
        flagFifth = true;

        $('input[name=first]').prop("disabled", false);
        $('input[name=second]').prop("disabled", false);
        $('input[name=third]').prop("disabled", false);
        $('input[name=fourth]').prop("disabled", false);
        $('input[name=fifth]').prop("disabled", false);

        $("#result1").html(" ");
        $("#result2").html(" ");
        $("#result3").html(" ");
        $("#result4").html(" ");
        $("#result5").html(" ");

        $('input[name=first]').prop("checked", false);
        $('input[name=second]').prop("checked", false);
        $('input[name=third]').prop("checked", false);
        $('input[name=fourth]').prop("checked", false);
        $('input[name=fifth]').prop("checked", false);

        counter = 0;
        answers = 0;

        $("#pisteet").html("Pisteet: ");

        $("#smiley").addClass("smiley1")

        $('input[name=first][value="1"]').removeClass("oikea_vastaus");
        $('input[name=second][value="1"]').removeClass("oikea_vastaus");
        $('input[name=third][value="1"]').removeClass("oikea_vastaus");
        $('input[name=fourth][value="1"]').removeClass("oikea_vastaus");
        $('input[name=fifth][value="1"]').removeClass("oikea_vastaus");

    });

    // attr for 1 element
    // prop for many elements

});