function Color_Function(){ //choose color


  var Color_Output;
  var Colors = document.getElementById("Color_Input").value;
  var Color_String = " is a great color!";
  switch(Colors) {
    case "Red":
      Color_Output= "Red" + Color_String;
    break;
    case "Yellow":
      Color_Output = "Yellow" + Color_String;
    break;
    case "Green":
      Color_Output= "Green" + Color_String;
    break;
    case "Blue":
      Color_Output = "Blue" + Color_String;
    break;
    case "Pink":
      Color_Output = "Pink" + Color_String;
    break;
    case "Purple":
      Color_Output = "Purple" + Color_String;
    break;
    default:
      Color_Output = "Please enter a color as written on the above list.";
  }
  document.getElementById("Output").innerHTML=Color_Output;
}

//trying get elements by class name function
function Hello_World_Function() {
  var A = document.getElementsByClassName("Touch");
  A[0].innerHTML = "This text has changed!"
}
