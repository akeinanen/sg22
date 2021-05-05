/// <reference path="jquery-3.6.0.min.js" />

// Markus Erkkilä

$(function () {

    $("#vastaa").on("click", function () {                      //vastaa nappi eka visa
        let oikein = 0;
        let vastaus1 = $("[name=vastaus1]:checked").val();
        let vastaus2 = $("[name=vastaus2]:checked").val();
        let vastaus3 = $("[name=vastaus3]:checked").val();
        let vastaus4 = $("[name=vastaus4]:checked").val();
        let vastaus5 = $("[name=vastaus5]:checked").val();

        if (vastaus1 === "1") {                         //oikeat lisätään muuttujaan
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

        $(".väärä").addClass("väärin");                 //värit
        $(".oikea").addClass("oikein");
        $("[name=vastaus1]").prop("disabled", true);            //nappien disablointi
        $("[name=vastaus2]").prop("disabled", true);
        $("[name=vastaus3]").prop("disabled", true);
        $("[name=vastaus4]").prop("disabled", true);
        $("[name=vastaus5]").prop("disabled", true);
        $("#tulos").html("Vastasit oikein " + oikein + " " + "/ 5 kysymyksestä");

        if (oikein < 1) {
            $("#palkinto").html("<img src=/Markus/images/sad.png>");        //palkintokategoriat
        } else if (oikein < 5) {
            $("#palkinto").html("<img src=/Markus/images/ok.png>");
        } else {
            $("#palkinto").html("<img src=/imgs/smiley.png>");
        }
        
    })

    $("#alusta").on("click", function () {              //aloita alusta
        $("#tulos").html("");
        $(window).scrollTop(0);
        $('input[name=vastaus1]').prop('checked', false);       //tyhjennys
        $('input[name=vastaus2]').prop('checked', false);
        $('input[name=vastaus3]').prop('checked', false);
        $('input[name=vastaus4]').prop('checked', false);
        $('input[name=vastaus5]').prop('checked', false);

        $("[name=vastaus1]").prop("disabled", false);           //disable pois
        $("[name=vastaus2]").prop("disabled", false);
        $("[name=vastaus3]").prop("disabled", false);
        $("[name=vastaus4]").prop("disabled", false);
        $("[name=vastaus5]").prop("disabled", false);

        $(".oikea").removeClass("oikein");
        $(".väärä").removeClass("väärin");

        $("#palkinto").html("");
    });


    //toinen visa


    function getRndInteger(min, max) {                                  //random
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let number1 = getRndInteger(1, 10);                                 //random muuttujaan
    let number2 = getRndInteger(1, 10);
    let tulo = number1 * number2;

    $("#eka_nro").html(number1);                        //numeroiden tulostus
    $("#toka_nro").html(number2);

    $("#vastaus2").trigger("focus");                //fokus

    $("#vastaa2").on("click", function () {
        
        let vastaus = Number($("#vastaus2").val());

        if (vastaus === 0) {                            //laskutoimitus
            alert("Syötä vastaus");
        } else if (vastaus === tulo) {
            alert("Oikein!");
            window.location.reload();
        } else {
            alert("Väärä vastaus :(");
            window.location.reload();
        }
    });

})
