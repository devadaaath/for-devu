function openLetter(){

document
.getElementById("letter")
.style.display="block";

}

/* Sakura Petals */

function createPetal(){

const petal=document.createElement("div");

petal.classList.add("sakura");

petal.innerHTML="🌸";

petal.style.left=
Math.random()*100+"vw";

petal.style.animationDuration=
(Math.random()*5+5)+"s";

petal.style.fontSize=
(Math.random()*20+10)+"px";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

}

setInterval(createPetal,300);
