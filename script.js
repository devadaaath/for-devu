/* OPEN LETTER */

function openLetter(){

document
.getElementById("letter")
.style.display="block";

}

/* CURSOR GLOW */

const cursor=
document.querySelector(".cursor");

document.addEventListener(
"mousemove",
(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/* SAKURA */

function createPetal(){

const petal=
document.createElement("div");

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

setInterval(createPetal,250);
