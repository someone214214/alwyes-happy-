const giftBox = document.getElementById("giftBox");
const home = document.getElementById("home");
const content = document.getElementById("content");
const music = document.getElementById("music");

giftBox.addEventListener("click",()=>{

home.classList.remove("active");
content.classList.add("active");

music.play().catch(()=>{});

});

/* HUJAN LOVE */

setInterval(()=>{

const love = document.createElement("div");

love.innerHTML = ["❤️","💕","💖","💗"][Math.floor(Math.random()*4)];

love.style.position="fixed";
love.style.left=Math.random()*100+"vw";
love.style.top="-50px";
love.style.fontSize=(20+Math.random()*20)+"px";
love.style.pointerEvents="none";

document.body.appendChild(love);

let pos=-50;

const fall=setInterval(()=>{

pos+=3;
love.style.top=pos+"px";

if(pos>window.innerHeight){
clearInterval(fall);
love.remove();
}

},20);

},400);
