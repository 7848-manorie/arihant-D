$(document).ready(function () {
    $("#menu-btn").click(function () {
        $(".menu-bar").addClass("transform");
        return false;
    });

    $("#menu-close-btn").click(function () {
        $(".menu-bar").removeClass("transform");
        return false;
    });
});

