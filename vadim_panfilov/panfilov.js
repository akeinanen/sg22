/// <reference path="jquery-3.6.0.min.js" />

$(function () {

    $(".btn").on("click", function () {

        if ($(this).hasClass("first")) {

            let vastaus = Number($('input[name=first]:checked').val());

            if (vastaus === 1) {

                $("#result1").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
                $("#result1").addClass("selected");
            } else {

                $('#result1').html("Kokeile uudelleen");
                $("#result1").removeClass("selected");

            }


        } else if ($(this).hasClass("second")) {

            let vastaus = Number($('input[name=second]:checked').val());

            if (vastaus === 1) {

                $("#result2").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
                $("#result2").addClass("selected");
            } else {

                $('#result2').html("Kokeile uudelleen");
                $("#result2").removeClass("selected");
            }


        } else if ($(this).hasClass("third")) {

            let vastaus = Number($('input[name=third]:checked').val());

            if (vastaus === 1) {

                $("#result3").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
                $("#result3").addClass("selected");
            } else {

                $('#result3').html("Kokeile uudelleen");
                $("#result3").removeClass("selected");
            }

        } else if ($(this).hasClass("fourth")) {

            let vastaus = Number($('input[name=fourth]:checked').val());

            if (vastaus === 1) {

                $("#result4").html("Hyvä!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
                $("#result4").addClass("selected");
            } else {

                $('#result4').html("Kokeile uudelleen");
                $("#result4").removeClass("selected");
            }

        } else if ($(this).hasClass("fifth")) {

            let vastaus = Number($('input[name=fifth]:checked').val());

            if (vastaus === 1) {

                $("#result5").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
                $("#result5").addClass("selected");
            } else {

                $('#result5').html("Kokeile uudelleen");
                $("#result5").removeClass("selected");
            }
        }
    });

    // tyhjennetaan edellisen resultit
    $("[name=first]").on("click", function(){
        $("#result1").html(" ");  
    });
    $("[name=second]").on("click", function(){
        $("#result2").html(" ");  
    });
    $("[name=third]").on("click", function(){
        $("#result3").html(" ");  
    });
    $("[name=fourth]").on("click", function(){
        $("#result4").html(" ");  
    });
    $("[name=first]").on("click", function(){
        $("#result5").html(" ");  
    });
    


});