let text = document.getElementsByClassName('.toggle-class');
let arrow = document.querySelector('.arrows');

arrow.onclick = function(){
    if (text.innerHTML === "FOX NEWS ANCHOR BRET BAIER..."){
        text.innerHTML = "hey bro";
    }
}