var count = 0;
let colorCount = 0;
var colors = ["black", "red", "white"];

function changeBackground (newColor) {
   $("body").css("background-color", newColor);
 }

$(".color-button").click( function () {
 
   changeBackground(this.id);

});


function moody (moodyCount){
   let mood="";
   if (moodyCount < 1) { mood = "awake"; }
   else if ((moodyCount >= 3) && (moodyCount < 7)) { mood = "I SEE YOU"; }
   else { mood = "i see EVERYTHING"; }

   return mood;
}

$("#eye-button").click(function () {

   let moodMessage=moody(count)
   
   $("#eye-button").html("" + moodMessage);

   $("body").append("<img width=100px src='ojitos.png'>");


   changeBackground( colors[colorCount] );


   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 3) { colorCount = 0; }
});
