var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomNumber2 = (Math.floor(Math.random()*6))+1;

// alert(randomNumber1);

// document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png");

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins! <i class='fas fa-flag'></i>"; 
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i>  Player 2 wins!";

    // <i class="fab fa-google-play"></i> Download
}

else {
    document.querySelector("h1").innerHTML= "Draw!"
}

// document.querySelectorAll("img")[1] works
// document.querySelector("img.img2"); also works