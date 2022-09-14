function Ride_Function(){
  var Height, Can_ride;
  Height=document.getElementById("Height").ariaValueMax;
  Can_ride=(Height < 52) ? "You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML=Can_ride + " to ride.";
}

function Vote_Function(){ //vote challenge
  var Age, Can_vote;
  Age = document.getElementById("Age").ariaValueMax;
  Can_vote = (Age < 18) ? "You aren't old enough to vote":"You are old enough to vote";
  document.getElementById("Vote").innerHTML=Can_vote;
}

//Constructors
function Vehicle(Make, Model,Year,Color){  
  this.Vehicle_Make=Make;
  this.Vehicle_Model=Model;
  this.Vehicle_Year=Year;
  this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper", 2020, "Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction(){
  document.getElementById("Keywords_and_Constructors").innerHTML =
  "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
  " manufactured in "+ Erik.Vehicle_Year;
}

//New keyword
function new_Test(){
  document.getElementById("New_and_This").innerHTML="Jack drives a " +
  Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " built in " +
  Jack.Vehicle_Year;
}

//nested function
function count_Function() {
  document.getElementById("Counting").innerHTML = Count();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}

function nested_Test() {
  document.getElementById("Nested_Function").innerHTML = Count2();
  function Count2() {
    var Starting_point2 = 15;
    function Plus_two() {Starting_point2 += 2;}
    Plus_two();
    return Starting_point2;
  }
}
