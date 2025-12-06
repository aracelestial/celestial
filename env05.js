// declaring an array with the name Planets
let Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn" , "Uranus", "Neptune"];

// declaring an object with name ancientLife
let ancientLife = {
    type: "extremophiles",
    bioma: ["volcanic", "aquatic", "silicon",],
};

let megaSentence;

megaSentence = "<p3>The celestial bodies that I am interested in are those that may contain traces of life: " + Planets[3] + ", " + Planets[5] + ", "+ Planets[6] + ". </p3>";

megaSentence = megaSentence + "<p4>The most intriguing ones are: " + ancientLife.type + " that are " + ancientLife.bioma[1] + "</p4>";

$("#output").html(megaSentence);


//spacetime sentences

$(".spacetime span").click(function () {

    $(this).parent().toggleClass("read");

    if ($(this).html() == "read") {
        $(this).html("less");
    } else {
        $(this).html("read");
    }

});

$(".spacetime").on({
  mouseenter: function(){
    $(this).css("background-color", "#431273");
  },
  mouseleave: function(){
    $(this).css("background-color", "#124973");
  },
});



var count = 0;
let colorCount = 0;
var colors = ["black", "red", "white"];

function changeBackground (newColor) {
   $("body").css("background-color", newColor);
 }

$(".color-button").click( function () {
 
   changeBackground(this.id);

});


function vision (moodyCount){
   let talking="";
   if (moodyCount < 1) { talking = "awake"; }
   else if ((moodyCount >= 3) && (moodyCount < 7)) { talking = "I SEE YOU"; }
   else { talking = "i see EVERYTHING"; }

   return talking;
}

$("#eye-button").click(function () {

   let universeMessage=vision(count)
   
   $("#eye-button").html("" + universeMessage);

   $("body").append("<img width=100px src='EYE.png'>");


   changeBackground( colors[colorCount] );


   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 3) { colorCount = 0; }
});


$("a")
    .slideUp(1000)
    .slideDown(1000);

