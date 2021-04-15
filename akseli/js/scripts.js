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

    $("#answer-1").on("click", function() {
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


})