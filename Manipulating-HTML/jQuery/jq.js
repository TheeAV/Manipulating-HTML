$button = $("<button>Feel Me</button>").appendTo("body");
$("button").attr("id", "btn");

$button.click(function () {
  alert("Alex is fake anime fan");
});

$button1 = $("#button1");
$button1.click(function () {
  let textbox = $("#message").val();
  alert(textbox);
});

$(".box1").on("mouseenter", function () {
  $(this).css("background-color", "purple");
});
$(".box1").on("mouseleave", function () {
  $(this).css("background-color", "black");
});

$("<p> Alex is a lazy sack</P>").appendTo("body");
$("p").attr("id", "pStuff");

function changeColor() {
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  return newColor;
}
let p = document.getElementById(pStuff);
let colors = ["#800080", "#2E8B57", "#0000FF", "#7FFF00", "#FF0000", "#FF1493"];
pStuff.addEventListener("click", function () {
  let newColor = changeColor();
  pStuff.style.color = newColor;
});

let div2 = $("<div></div>").appendTo("body");
let button3 = $("<button>Button3</button>").appendTo(div2);
$(button3).click(function () {
  $("<span> Aaron </span>").appendTo(div2);
});

$("#button4").click(function () {
  let friends = ["Alex", "Laura", "Jacob", "Tanner", "Blake", "Sean", "Twad", "Stricky", "Tony", "Matt"];
  for (let fc = 0; fc < friends.length; fc++) {
    $("<li></li>").text(friends[fc]).appendTo("#ul");
  }
});
