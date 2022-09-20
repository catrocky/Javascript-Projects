function Call_Loop() { //final countdown
  var Digit = "";
  var X = 1;
  while(X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Loop").innerHTML=Digit;
}

//length
let text = "Hello World!";
let length = text.length;
console.log(length);

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML=Content;
}

//array function
function array_Function(){
  var day = [];
  day[0]="morning";
  day[1]="afternoon";
  day[2]="night";
  document.getElementById("Array").innerHTML="At 3PM it is " +day[1]+".";
}

//constant function
function constant_function(){
  const Whisky = {brand:"Lagavulin", color:"brown", container:"bottle"};
  Whisky.container= "glass";
  Whisky.color= "amber";
  document.getElementById("Constant").innerHTML="Had a " + Whisky.container + " of " + Whisky.brand + "." + " It was " + Whisky.color;
}

//error constant vs working var
const J = 5;
J = 3;
document.write(J);

var A = 15;
A = 17;
document.write(A);

function let_function(){
  let G=5;
  document.getElementById("let").innerHTML=G;
}

//object let function
function car(){
let car={
  make:"Toyota",
  model:"Camry",
  year:"2017",
  color:"maroon",
  description: function(){
    return "My car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("usercar").innerHTML=car.description();
}

//return function example ***not working?
function returntest() {
  function return_function(test) {
    return test;
  };
document.getElementById("rtest").innerHTML=return_function("return test");
}


//break statement
function let1_Function() {
  let abc="";
  for (let i=0;i<10;i++) {
    if (i===3) { break; }
    abc += "The number is " +i +"<br>";
  };
document.getElementById("let1").innerHTML=abc;
}

//continue
function cont_function() {
  let xyz = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    xyz += "The number is " + i + "<br>";
}
document.getElementById("demo3").innerHTML = xyz;
}
