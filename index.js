var randomNumber1 = Math.floor(Math.random() * 100 + 1);

if (randomNumber1 > 70){
    document.querySelector("p").innerHTML = "There is a " + randomNumber1 + "% chance that you will be successful in 2026. Those are great odds. Do not lose sight of your goals."
} else if (randomNumber1 < 70 && randomNumber1 > 50){
    document.querySelector("p").innerHTML = "There is a " + randomNumber1 + "% chance that you will be successful in 2026. You need to work really hard to improve these odds."
} else{
    document.querySelector("p").innerHTML = "There is a " + randomNumber1 + "% chance that you will be successful in 2026. These aren't great odds. Do yourself a favor and push yourself." 
}
