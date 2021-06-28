var btn = document.querySelectorAll("button.modal_button");
var modals = document.querySelectorAll('.modal_back');
var spans = document.getElementsByClassName("close");

for(var  i = 0; i < btn.length; i++){
    btn[i].onclick=function(e){
        e.preventDefault();
        modal=document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
    }
}
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
    }
}

/*
var modal = document.getElementById("modal_back");//Get the modal
var btn = document.getElementById("modal_button");//Get the button that opens the modal
var span = document.getElementsByClassName("close");//Get the <span> element that closes the modal

btn[0].onclick = function() {//When the user clicks the button, open the modal 
    modal[0].style.display = "block";
}
btn[1].onclick = function() {//When the user clicks the button, open the modal 
    modal[1].style.display = "block";
}
span[0].onclick = function() {//When the user clicks on <span> (x), close the modal
    modal[0].style.display = "none";
}
span[1].onclick = function() {//When the user clicks on <span> (x), close the modal
    modal[1].style.display = "none";
}
window.onclick = function(event) {//When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal[0].style.display = "none";
    }
    if (event.target == modal) {
        modal[1].style.display = "none";
    }
}
*/

//if part of portfolio is hidden, overflow:visible;
//var see = document.getElementsByClassName("index_body");
//see.style.overflow="visible";

//based on button, show different modals so i don't have to make multiple modals
//just work on one modal with few adjustments, ie images

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}