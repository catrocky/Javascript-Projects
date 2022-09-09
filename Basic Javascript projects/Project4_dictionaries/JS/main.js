function My_Dictionary() {
  var Animal {
    Species:"Dog",
    Color:"Black",
    Breed:"Labrador",
    Age:5,
    Sound:"Bark"
  };
  document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function My_Dictionary1() {
  var Animal {
    Species:"Dog",
    Color:"Black",
    Breed:"Labrador",
    Age:5,
    Sound:"Bark"
  };
  delete Animal.Species;
  document.getElementById("Dictionary1").innerHTML = Animal.Species;
}
