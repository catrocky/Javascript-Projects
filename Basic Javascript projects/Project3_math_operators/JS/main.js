function addition_Function() {
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML = "2 + 2 = " + addition; // add
}

function subtraction_Function() {
  var subtraction = 4 - 2;
  document.getElementById("Math2").innerHTML = "4 - 2 = " + subtraction; //subtract
}

function multiplication() {
  var multiplication= 8 * 7;
  document.getElementById("Math3").innerHTML="8 x 7 = " + multiplication; //multiply
}

function division(){
  var division= 9 / 3;
  document.getElementById("Math4").innerHTML="9 / 3 = " + division; //divide
}

function more_Math(){
  var simple_Math=(2 + 4) * 8 / 2 - 5;
  document.getElementById("Math5").innerHTML="2 plus 4, multiplied by 8, divided in half, and then subtracted by 5 equals " + simple_Math; //simple math
}

function modulus_Operator(){
  var simple_Math=4%3;
  document.getElementById("Math6").innerHTML="4 divided by 3 results in a remainder of: "+simple_Math; //modulus
}

function negation_Operator(){
  var x=5;
  document.getElementById("Math7").innerHTML=-x; //negation
}

//var X=5;
//X++;
//document.write(X); //increase

//var Y=5;
//Y--;
//document.write(Y); //decrease

//window.alert(Math.random( * 100)); //random 
