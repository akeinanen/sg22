$(function() {

    let questionCount = 0;

    // Button event
    $("body").on("click", ".toggler", function() {
        $(`#${$(this).attr("data-show")}`).show();
        $(`#${$(this).attr("data-hide")}`).hide();

        $("#questionCount").html(`Kysymys ${questionCount}`);
    })



})