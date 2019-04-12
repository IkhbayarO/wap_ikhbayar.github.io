$(function () {
    $("#container").on("submit", checkData);
});

function checkData(event) {
    $("#error").empty();
    if($("#name").val()=="" || $("#zip").val().length!==5 || $("#seats").val()===0 || $("#seats").val()>200){
        $("#error").append("Name should be at least one letter and State should be at least 3 letters");
    }else{
        $("#error").append("Successful");
    }
    event.preventDefault();
}
