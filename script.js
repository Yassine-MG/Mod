// let titre = document.createElement("h2");
// let body = document.querySelector("body");
// body.appendChild(titre);
// titre.innerText = "My name is Yassine";


// let div = document.createElement("div")
// // div.appendChild(titre)
// let titre = document.createElement("h2");
// let link = document.createElement("a")
// link.setAttribute("href","#")
// titre.appendChild(link);

// let body = document.querySelector("body");
// body.appendChild(titre);
// link.innerText = "My name is Yassine";



// Element.setAttribute(name, value);


// // Creation
// let link = document.createElement("a"); //<a></a>
// let listItem = document.createElement("li"); //<li></li>



// // rattacher un element dans un autre
// listItem.appendChild(link); //<li><a></a></li>

// let list = document.querySelector("nav > ul");

// list.appendChild(listItem); //<ul><li><a></a></li></ul>

// // Ajouter du text dans une balise
// // link.textContent = "Info";
// link.innerText = "Info";
// // link.innerHTML = "<h2>Info</h2>";




let btn = document.querySelector(".btn1");
let div = document.createElement("div");
let titre = document.createElement("h2");
let div_I = document.createElement("div");
let link = document.createElement("a")
let emote = document.createElement("i");
let body = document.querySelector("body");
let div_1 = document.createElement("div");
let p = document.createElement("p");
let div_2 = document.createElement("div");
let button_1 = document.createElement("button");
let button_2 = document.createElement("button");



div.appendChild(link);  
link.appendChild(emote);
link.setAttribute("href","#")
emote.setAttribute("class","fa-solid fa-x");
div_I.appendChild(div);
div.appendChild(titre);
body.appendChild(div_I);
div_I.appendChild(div_1);
div_I.appendChild(div_2);
div_1.appendChild(p);
div_2.appendChild(button_1);
div_2.appendChild(button_2);
button_1.innerText = "close";
button_2.innerText = "save change";
p.innerText = "modal body text here";
titre.innerText = "My name is Yassine";




div.style.flexDirection = "row-reverse"
p.style.marginLeft = "20px"
p.style.textAlign = "left";
body.style.fontFamily = "sans-serif";
titre.style.fontSize = "20px";
emote.style.fontSize = "20px";
emote.style.marginTop = "20px"
emote.style.color = "#808080"
div.style.display = "flex";
p.style.fontSize = "20px";
div_1.style.padding = "30px 0";
div.style.borderBottom = "solid 1px #e5e5e5";
div_1.style.borderBottom = "solid 1px #e5e5e5";
div_I.style.width = "30%";
div_I.style.borderRadius = "10px";
div_I.style.textAlign= "center";
div_I.style.margin = "0 auto";
div_I.style.border = "solid 1px #e5e5e5";
div.style.width = "95%";
div.style.textAlign ="center";
div.style.margin = "0 auto";
div.style.justifyContent ="space-between";
div.style.padding = "5px 15px";
div_2.style.padding = "20px" ; 
div_2.style.textAlign = "right" ; 
button_1.style.backgroundColor = "gray" ;
button_1.style.border = "none" ;
button_1.style.cursor = "pointer" ;
button_1.style.margin = "0 10px" ;
button_1.style.padding = "10px 20px" ;
button_1.style.fontSize = "16px" ;
button_1.style.borderRadius = "10px" ;
button_1.style.color = "white";
button_2.style.backgroundColor = "#0d6efd" ;
button_2.style.fontSize = "16px" ;
button_2.style.border = "none" ;
button_2.style.cursor = "pointer" ;
button_2.style.margin = "0 10px" ;
button_2.style.padding = "10px 20px" ;
button_2.style.borderRadius = "10px" ;
button_2.style.color = "white";

div_I.style.display = "none";

btn.addEventListener('click', () => {
    body.style.backgroundColor = "#f7f7f7"
    div_I.style.display = "block";
});

link.addEventListener('click',() =>{
    div_I.style.display = "none";
    body.style.backgroundColor = "#fff"
});

button_1.addEventListener('click',() =>{
    div_I.style.display = "none";
    body.style.backgroundColor = "#fff"
});




// let div = document.createElement("div");
//  div.appendChild(titre);
// let titre = document.createElement("h2");
// let link = document.createElement("a")
// link.setAttribute("href","#")
// titre.appendChild(link);

// let body = document.querySelector("body");
// body.appendChild(titre);
// link.innerText = "My name is Yassine";



// let nom=document.querySelector('h2')
// let input=document.querySelector('input')
// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
// nom.innerText='hello '+input.value
// })