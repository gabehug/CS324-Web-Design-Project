function openTab(personal){
    var i;
    var x = document.getElementsByClassName("personalPage");
    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(personal).style.display = "block";
}