/// <reference path="jquery-3.6.0.min.js" />

// Markus Erkkilä

$(function() {

    $("#vastaa").on("click", function () {  
        let oikein = 0;
        let vastaus1 = $("[name=vastaus1]:checked").val();
        let vastaus2 = $("[name=vastaus2]:checked").val();
        let vastaus3 = $("[name=vastaus3]:checked").val();
        let vastaus4 = $("[name=vastaus4]:checked").val();
        let vastaus5 = $("[name=vastaus5]:checked").val();

        if (vastaus1 === "1") {
            oikein += 1;
        }
        if (vastaus2 === "1") {
            oikein += 1;
        }
        if (vastaus3 === "1") {
            oikein += 1;
        }
        if (vastaus4 === "1") {
            oikein += 1;
        }
        if (vastaus5 === "1") {
            oikein += 1;
        }
        
        $("#tulos").html("Vastasit oikein " + oikein + " " + "/ 5 kysymyksestä");
    })
    
    $("#alusta").on("click", function() {
        $("#tulos").html("");
        $(window).scrollTop(0);  
        $('input[name=vastaus1]').prop('checked', false);
        $('input[name=vastaus2]').prop('checked', false); 
        $('input[name=vastaus3]').prop('checked', false); 
        $('input[name=vastaus4]').prop('checked', false);
        $('input[name=vastaus5]').prop('checked', false);    
    });

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    $("#vastaa2").on("click", function() {
        //laske kerto
        //lukujen pitää näykä ennen napin painallusta
        let number1 = getRndInteger(1, 10);
        let number2 = getRndInteger(1, 10);
        let tulo = number1 * number2;

    });
    
})
