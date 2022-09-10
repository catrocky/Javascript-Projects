document.write(typeof 3); //int

function my_Function() {
  document.getElementById("Test").innerHTML = 0/0; //NaN
}

function my_Function1() {
  document.getElementById("Test1").innerHTML = isNaN('This is a string'); //true
}

function my_Function2() {
  document.getElementById("Test2").innerHTML = isNaN('007'); //false
}

document.write(2E310); //infinity
document.write(-2E310); //-infinity

document.write(10 > 3); //TRUE
document.write(3 > 10); //FALSE

//BOOLEAN OPERATORS
//AND
document.write(10>5 && 20>10); // T T =T

document.write(20>30 && 30>25); // F T =F

//OR
document.write(20>30||30>20); //F T =T

document.write(20>30||2>10); //F F =F

console.log(2 + 2); //4
console.log(2 > 3); //false

console.log(10 == 10);
console.log(10 == 13);
console.log(10 == "ten");
console.log(10 == 13);

A = "dog";
B = "dog";
C = "cat";
console.log(A === B);
console.log(B === C);

//NOT
function not_Function(){
  document.getElementById("Not").innerHTML=!(20>10);
} // NOT (TRUE) >>FALSE

function not_Function1(){
  document.getElementById("Not1").innerHTML=!(20<10);
} // NOT (FALSE) >>TRUE
