Y = 5;

function Add_numbers_1() {
  var X = 10;
  console.log(15 + X);
}
function Add_numbers_2() {
  console.log(X + 10);
}
Add_numbers_1();
Add_numbers_2();

//if, getHours
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "Hello";
  }
}

//else statement
function Age_Function() {
  Age = document.getElementById("Age").value;
  if (Age >= 17) {
    Military = "You can join the military.";
  }
  else {
    Military = "You are too young to join the military";
  }
  document.getElementById("How_old_are_you?").innerHTML = Military;
}

//else if statements
function Time_function(){
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  }
  else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  }
  else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML=Reply;
}

//broken
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction() {
  console.log(Jack.Hair_Color);
}
