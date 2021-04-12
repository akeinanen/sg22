/// <reference path="jquery-3.6.0.min.js" />

$(function(){

    $(".btn").on("click", function(){

        if ($(this).hasClass("first")) {

            let vastaus = Number($('input[name=first]:checked').val());

           if (vastaus === 1) {

            $("#result1").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');

           } else {

            $('#result1').html("Kokeile uudelleen");

           }
            
            
        } else if ($(this).hasClass("second")) {

            let vastaus = Number($('input[name=second]:checked').val());

            if (vastaus === 1) {
 
             $("#result2").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
 
            } else {
 
             $('#result2').html("Kokeile uudelleen");
 
            }
            

        } else if ($(this).hasClass("third")) {

            let vastaus = Number($('input[name=third]:checked').val());

            if (vastaus === 1) {
 
             $("#result3").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
 
            } else {
 
             $('#result3').html("Kokeile uudelleen");
 
            }

        } else if ($(this).hasClass("fourth")) {

            let vastaus = Number($('input[name=fourth]:checked').val());

            if (vastaus === 1) {
 
             $("#result4").html("Hyvä!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
 
            } else {
 
             $('#result4').html("Kokeile uudelleen");
 
            }

        } else if ($(this).hasClass("fifth")) {

            let vastaus = Number($('input[name=fifth]:checked').val());

            if (vastaus === 1) {
 
             $("#result5").html("Oikea vastaus!" + '<i class="fa fa-smile-o" aria-hidden="true"></i>');
 
            } else {
 
             $('#result5').html("Kokeile uudelleen");
 
            }
        }
    });


});