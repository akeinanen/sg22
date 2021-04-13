$(function() {

    let questionCount = 0;

    // Next page
    function nextPage(e) {
        $(`#${$(e).attr("data-show")}`).show();
        $(`#${$(e).attr("data-hide")}`).hide();

        $("#questionCount").html(`Kysymys ${questionCount}`);
    };

    // Messages

    function notification(type, content) {
        $("#notification").html(`<div class="bg-${type}">${content}</div>`);
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
            notification("warning", "VÄÄRÄ VASTAUS");
        } else if(!answer) {
            console.log("Mikäli napin painaminen tuottaa sinulle vaikeuksia, suosittelen seuraamaan tätä linkkiä")
        }
    });


})