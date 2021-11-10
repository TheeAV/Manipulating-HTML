let button = document.createElement("button");
let buttonTxt = document.createTextNode("Mash Me");
button.appendChild(buttonTxt);
document.body.appendChild(button);

button.addEventListener("click", function () {
  alert("Alex is a fake anime fan");
});

button1.addEventListener("click", newButton);
function newButton() {
  let message = document.getElementById("textbox").value;
  alert(message);
}

let div = document.getElementById("box");
div.addEventListener("mouseenter", function () {
  div.style.backgroundColor = "purple";
});
div.addEventListener("mouseleave", function () {
  div.style.backgroundColor = "black";
});

let p = document.getElementById(pStuff);
let colors = ["#800080", "#2E8B57", "#0000FF", "#7FFF00", "#FF0000", "#FF1493"];

function changeColor() {
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  return newColor;
}

pStuff.addEventListener("click", function () {
  let newColor = changeColor();
  pStuff.style.color = newColor;
});

let div1 = document.createElement("div");
document.body.appendChild(div1);
button2.addEventListener("click", function () {
  let span = document.createElement("span");
  div1.appendChild(span);
  span.textContent = "Aaron";
});

let friends = ["Alex", "Laura", "Jacob", "Tanner", "Blake", "Sean", "Twad", "Stricky", "Tony", "Matt"];
let ul = document.getElementById("ul");
button3.addEventListener("click", function () {
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = friends[i];
  }
});
