$(function() {

    let questionCount = 0;
    let triesLeft = 3;

    // Next page
    function nextPage(e) {
        $(`#${$(e).attr("data-show")}`).show();
        $(`#${$(e).attr("data-hide")}`).hide();

        $("#notification").html("");

        $("#triesLeft").html(`Yritykset: ${triesLeft}`);
    };

    function gameOver(rightAnswer) {
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
        let answer;
        if(id === 5) {
            answer = $("#lastAnswer").val().toLowerCase();
        } else {
            answer = $(`[name='question${id}']:checked`).val();
        }

        if(!answer) {
            notification("warning", "Mikäli valinnan vaikeus tuottaa sinulle ongelmia, suosittelen vaihtamaa visaa");
        } else if(answer === rightAnswer) {
            nextPage($(`#answer-${id.toString()}`));
        } else {
            notification("danger", "Auts, vastasit väärin!");
            triesLeft--;
            $("#triesLeft").html(`Yritykset: ${triesLeft}`);
            if(triesLeft < 1) {
                gameOver($(`[name='question${id}'][value='${rightAnswer}']`));
            }
        }
    }

    // Click events, undynamic mess :,)

    $("#answer-1").on("click", function() {
        answer(1, "2");
    })

    $("#answer-2").on("click", function() {
        answer(2, "2");
    })

    $("#answer-3").on("click", function() {
        answer(3, "3");
    })

    $("#answer-4").on("click", function() {
        answer(4, "2");
    })

    $("#answer-5").on("click", function() {
        answer(5, "not a number");
    })
})