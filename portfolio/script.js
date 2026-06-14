// AOS ANIMATION

AOS.init({
duration:1200,
once:false
});


// TYPING EFFECT

new Typed(".typing",{

strings:[
"Biomedical Engineer",
"Healthcare Innovator",
"Medical Technology Enthusiast",
"Research Aspirant"
],

typeSpeed:80,
backSpeed:50,
backDelay:1500,
loop:true

});


// PARTICLES JS

particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:"#00e5ff"
},

shape:{
type:"circle"
},

opacity:{
value:0.5
},

size:{
value:3
},

line_linked:{
enable:true,
distance:150,
color:"#00e5ff",
opacity:0.3,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
}

},

modes:{

grab:{
distance:150,
line_linked:{
opacity:1
}
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});


// COUNTER ANIMATION

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=
+counter.getAttribute("data-target");

const current=
+counter.innerText;

const increment=
target/100;

if(current<target){

counter.innerText=
`${Math.ceil(current+increment)}`;

setTimeout(updateCounter,25);

}else{

counter.innerText=target;

}

};

updateCounter();

});


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll",()=>{

const nav=
document.querySelector("nav");

if(window.scrollY>50){

nav.style.background=
"rgba(0,0,0,.8)";

nav.style.boxShadow=
"0 0 20px rgba(0,229,255,.3)";

}else{

nav.style.background=
"rgba(0,0,0,.2)";

nav.style.boxShadow=
"none";

}

});


// ACTIVE MENU

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=
section.offsetTop;

if(pageYOffset >= sectionTop-150){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.href.includes(current)){

link.classList.add("active");

}

});

});


// REVEAL CARDS

const cards =
document.querySelectorAll(
".project-card,.cert-card,.stat-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=
"translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"translateY(0px) scale(1)";

});

});


// PARALLAX EFFECT

window.addEventListener("scroll",()=>{

let scroll =
window.pageYOffset;

let hero =
document.querySelector(".hero");

hero.style.backgroundPositionY =
scroll * 0.5 + "px";

});


// SMOOTH BUTTON GLOW

const btn =
document.querySelector(".btn");

setInterval(()=>{

btn.classList.toggle("glow");

},1500);


// CUSTOM CURSOR EFFECT (OPTIONAL)

const cursor =
document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});


// SCROLL TO TOP BUTTON

const topBtn =
document.createElement("button");

topBtn.innerHTML =
"↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});