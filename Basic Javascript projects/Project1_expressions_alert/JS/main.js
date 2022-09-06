var x = "This is a string,\"here's a quote\"" //escape character practice
 + " I am concatenated";
document.write(x); //first doc write
window.alert(x); //first alert

var str1 = "beginning of"; //concatenate practice
var str2 = " sentence.";

window.alert(str1 + str2); //concatenate practice

var family = "The Quattrocchis", dad = "Christopher", mom = "Zelena"; //assign multiple vars
alert(dad);

document.write(3 + 3); //expression

function My_First_Function() {  //Create a function
  var str = "This is the button text!";  //Define var
  document.getElementById("Button_Text").innerHTML = str; //put value of var into
                                                        //html elementFromPoint with
                                                        //the Button_Text id
}
