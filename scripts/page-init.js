$(document).ready(function(){
    taskMaps.initialize();
    $("#yesBtn").bind("click", function(e){
        e.preventDefault();
        $("#lightBox").fadeOut("slow");
    });
    $("#noBtn").bind("click", function(e){
        e.preventDefault();
        $("#lightBox").fadeOut("slow");
    });
});