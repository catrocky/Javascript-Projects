//using html data attributes
function displayType(character){
  var characterType=character.getAttribute("data-character-type");
  alert("A number "+ characterType+" is in number "+ character.innerHTML+"!")
}
