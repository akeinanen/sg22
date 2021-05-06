/// <reference path="jquery-3.6.0.min.js" />

/* Author - Vadim Panfilov */

$(function () {

    let question1 = true, question2 = true, question3 = true, question4 = true, question5 = true;

    let counter = 0;
    let answers = 0;

    $(".btn").on("click", function () {

        if ($(this).hasClass("first")) {

            let vastaus = Number($('input[name=first]:checked').val());

            if (question1) {
                question1 = false;
                $('input[name=first]').prop("disabled", true);
                answers++;

                if (vastaus === 1) {

                    $("#result1").html("Oikea vastaus!");
                    $("#result1").addClass("right_answer");

                    counter++

                } else {

                    $('#result1').html("Hups! Väärä vastaus.");
                    $("#result1").removeClass("right_answer");
                    $("#result1").addClass("false_answer");
                    $('input[name=first][value="1"]').parent().addClass("oikea_vastaus_for_yleistietovisa");

                }
            }

        } else if ($(this).hasClass("second")) {

            let vastaus = Number($('input[name=second]:checked').val());

            if (question2) {
                question2 = false;
                $('input[name=second]').prop("disabled", true);
                answers++;

                if (vastaus === 1) {

                    $("#result2").html("Oikea vastaus!");
                    $("#result2").addClass("right_answer");

                    counter++
                } else {

                    $('#result2').html("Hups! Väärä vastaus.");
                    $("#result2").removeClass("right_answer");
                    $("#result2").addClass("false_answer");
                    $('input[name=second][value="1"]').parent().addClass("oikea_vastaus_for_yleistietovisa");

                }
            }

        } else if ($(this).hasClass("third")) {

            let vastaus = Number($('input[name=third]:checked').val());

            if (question3) {
                question3 = false;
                $('input[name=third]').prop("disabled", true);
                answers++;

                if (vastaus === 1) {

                    $("#result3").html("Oikea vastaus!");
                    $("#result3").addClass("right_answer");
                    counter++
                } else {

                    $('#result3').html("Hups! Väärä vastaus.");
                    $("#result3").removeClass("right_answer");
                    $("#result3").addClass("false_answer");
                    $('input[name=third][value="1"]').parent().addClass("oikea_vastaus_for_yleistietovisa");

                }
            }

        } else if ($(this).hasClass("fourth")) {

            let vastaus = Number($('input[name=fourth]:checked').val());

            if (question4) {
                question4 = false;
                $('input[name=fourth]').prop("disabled", true);
                answers++;

                if (vastaus === 1) {

                    $("#result4").html("Oikea vastaus!");
                    $("#result4").addClass("right_answer");
                    counter++

                } else {

                    $('#result4').html("Väärä vastaus.");
                    $("#result4").removeClass("right_answer");
                    $("#result4").addClass("false_answer");
                    $('input[name=fourth][value="1"]').parent().addClass("oikea_vastaus_for_yleistietovisa");

                }
            }

        } else if ($(this).hasClass("fifth")) {

            let vastaus = Number($('input[name=fifth]:checked').val());

            if (question5) {
                question5 = false;
                $('input[name=fifth]').prop("disabled", true);
                answers++;

                if (vastaus === 1) {

                    $("#result5").html("Oikea vastaus!");
                    $("#result5").addClass("right_answer");
                    counter++

                } else {

                    $('#result5').html("Hups! Väärä vastaus.");
                    $("#result5").removeClass("right_answer");
                    $("#result5").addClass("false_answer");
                    $('input[name=fifth][value="1"]').parent().addClass("oikea_vastaus_for_yleistietovisa");

                }
            }
        }
    });

    // Näyttää pisteitä button
    $("#result_pisteet").on("click", function () {
        if (answers < 5 && answers) {
            myModal();
        } else if (counter === 5) {
        } else if (counter < 3) {
            $("#pisteet").html("Pisteet: " + counter + "/5" + "<br>" + "Kokeile uudelleen. Paina 'Aloittaa uudelleen' nappi.");
        } if (counter >= 3) {
            $("#pisteet").html("Pisteet: " + counter + "/5");
            $("#man1").show(); // palkinto if yli 3 osp
        }
    });

    function myModal() {
        let myModal = new bootstrap.Modal(document.getElementById('myModal'))
        myModal.show();
    }

    // Aloittaa uudelleen button
    $("#uudelleen_button").on("click", function () {
        window.location.reload();
        /*      question1 = true;
                question2 = true;
                question3 = true;
                question4 = true;
                question5 = true;
        
                $('input[name=first]').prop("disabled", false);
                $('input[name=second]').prop("disabled", false);
                $('input[name=third]').prop("disabled", false);
                $('input[name=fourth]').prop("disabled", false);
                $('input[name=fifth]').prop("disabled", false);
        
                counter = 0;
                answers = 0;
        
                // tyhjennetaan edelliset resultit
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
        
                $("#pisteet").html(" ");
                $("#man1").hide();
        
                $('input[name=first][value="1"]').parent().removeClass("oikea_vastaus_for_yleistietovisa");
                $('input[name=second][value="1"]').parent().removeClass("oikea_vastaus_for_yleistietovisa");
                $('input[name=third][value="1"]').parent().removeClass("oikea_vastaus_for_yleistietovisa");
                $('input[name=fourth][value="1"]').parent().removeClass("oikea_vastaus_for_yleistietovisa");
                $('input[name=fifth][value="1"]').parent().removeClass("oikea_vastaus_for_yleistietovisa");
                */

    });



});