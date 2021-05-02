$(function() {

    let questionCount = 0;
    let triesLeft = 3;

    // Next page
    function nextPage(e) {
        $(`#${$(e).attr("data-show")}`).show();
        $(`#${$(e).attr("data-hide")}`).hide();

        $("#notification").html("");

        $("#questionCount").html(`Kysymys ${questionCount}`);
        $("#triesLeft").html(`Yritykset: ${triesLeft}`);
    };

    function gameOver() {
        triesLeft = 3;
        clearGame();
        $("#game-container").hide();
        $("#gameOver").show();
    }

    function clearGame() {
        $("#notification").html("");
    }

    // Messages

    function notification(type, content) {
        $("#notification").html(`<div style="inline-block" class="bg-light border text-${type} px-3 py-1 mt-3">${content}</div>`);
    }

    $(".toggler").on("click", function() {
        nextPage(this)
    })

    // Answer events

    function answer(id, rightAnswer) {
        let answer = $(`[name='question${id}']:checked`).val();
        if(!answer) {
            notification("warning", "Mikäli valinnan vaikeus tuottaa sinulle ongelmia, suosittelen vaihtamaa visaa");
        } else if(answer === rightAnswer) {
            nextPage($(`#answer-${id.toString()}`));
        } else {
            notification("danger", "Auts, vastasit väärin!");
            triesLeft--;
            $("#triesLeft").html(`Yritykset: ${triesLeft}`);
            if(triesLeft < 1) {
                gameOver();
            }
        }
    }

    $("#answer-1").on("click", function() {
        answer(1, "2");
    })

    $("#answer-2").on("click", function() {
        answer(2, "2");
    })

    $("#answer-3").on("click", function() {
        answer(2, "3");
    })

   /* $("#answer-1").on("click", function() {
        let answer = $("[name='question1']:checked").val();
        if(answer === "2") {
            nextPage(this)
        } else if(answer === "1" || answer === "3") {
            notification("danger", "Auts, vastasit väärin!");
            triesLeft--;
            $("#triesLeft").html(`Yritykset: ${triesLeft}`);
            if(triesLeft < 1) {
                gameOver();
            }
        } else if(!answer) {
            notification("warning", "Mikäli valinnan vaikeus tuottaa sinulle ongelmia, suosittelen seuraamaan tätä linkkiä")
        }
    });
    $("#answer-2").on("click", function() {
        let answer = $("[name='question1']:checked").val();
    */ 
   
    
})