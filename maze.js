
$(document).ready(function () {
    $(".boundary").mouseover(changeToRed);
    $(".boundary").mouseover(changeToRed);
    $(".boundary").mouseover(changeToRed);
    $(".boundary").mouseover(changeToRed);
    $(".boundary").mouseover(changeToRed);

    $("#start").click(start);
    $("#end").click(end);
});

let checker = false;

function changeToRed(event) {
    if (checker) {
        $(this).css("background-color", "#ff8888")
            .addClass("hovered");
    }
}

function start(event) {
    checker = true;
    $("div.boundary").removeClass("hovered").css("background-color", "#eeeeee");
    $("#status").text('Click the "S" to begin.');
    return checker;
}

function end(event) {
    if (checker) {
        checker = false;
        if (result()) {
            $("#status").text('You lose! Click the "S" to begin again.');
        } else {
            $("#status").text('You win !!!!!! Click the "S" to begin again.');
        }
    } else {
        alert('Click the "S" to begin.');
    }
}

function result() {
    return $("div").hasClass("hovered");
}





