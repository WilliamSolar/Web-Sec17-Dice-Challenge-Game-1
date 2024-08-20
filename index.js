var ranNum1 = Math.floor(Math.random()*6) + 1; 
var ranNum2 = Math.floor(Math.random()*6) + 1; 

var filename1 = "images/dice"+ranNum1+".png"; 
var filename2 = "images/dice"+ranNum2+".png"; 

document.querySelector(".img1").setAttribute("src", filename1); 
document.querySelector(".img2").setAttribute("src", filename2); 


if (ranNum1 > ranNum2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!"; 
}
else if (ranNum1 < ranNum2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}





