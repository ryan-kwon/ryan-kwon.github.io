var modal = document.getElementById("modal_back");//Get the modal
var btn = document.getElementById("modal_button");//Get the button that opens the modal
var span = document.getElementsByClassName("close")[0];//Get the <span> element that closes the modal

btn.onclick = function() {//When the user clicks the button, open the modal 
    modal.style.display = "block";
}
span.onclick = function() {//When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
}
window.onclick = function(event) {//When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//if part of portfolio is hidden, overflow:visible;
//var see = document.getElementsByClassName("index_body");
//see.style.overflow="visible";
