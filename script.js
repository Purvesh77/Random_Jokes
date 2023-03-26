const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let gameover = new Audio("ting.mp3")
let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");

    });
    gameover.play()
}
btn.addEventListener("click",getJoke);
getJoke();

btn.addEventListener("click",)
function playmusic(){
    gameover.play()
}
playmusic();

