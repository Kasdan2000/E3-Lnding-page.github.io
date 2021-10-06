$(document).ready(function inicio(){
    $("#nav-toggle").click(function menuHum(){
        $("nav").slideToggle();
        $(this).toggleClass("cerrar");
    });
})