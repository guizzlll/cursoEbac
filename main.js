$(document).ready(function () {
    $("#addTask").on("click", function () {
        var newTask = $("#newTask").val();
        if (newTask !== "") {
            $("#taskList").append("<li>" + newTask + "<span class='deleteTask'>X</span></li>");
            $("#newTask").val("");
        }
    });

    $("#taskList").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    $("#taskList").on("click", ".deleteTask", function () {
        $(this).parent().remove();
    });
});