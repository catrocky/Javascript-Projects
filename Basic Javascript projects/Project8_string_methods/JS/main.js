//concatenate
function song_Lyric(){
  var frag1="You got to tell me, brave captain, ";
  var frag2="why are the wicked so strong? ";
  var frag3="How do the angels get to sleep, ";
  var frag4="when the devil leaves the porchlight on?";
  var complete = frag1.concat(frag2, frag3, frag4);
  document.getElementById("Concat").innerHTML = complete;
}

//slice method
function slice_Method(){
  var Sentence="Now I lost my Saint Christopher, now that I've kissed her";
  var Section=Sentence.slice(14,31);
  document.getElementById("Slice").innerHTML=Section;
}

//upper case
function Upper_case() {
let text = "Hello!";
let result = text.toUpperCase();
document.getElementById("demo").innerHTML = result;
}

//search method
function Searching() {
let text = "Will you be around"
let position = text.search("around");
document.getElementById("demo2").innerHTML=position;
}
//numbers to string
function string_Method() {
  var X = 182;
  document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

//precision
function precision_Method() {
  var Y = 12938.3012987376112;
  document.getElementById("Precision").innerHTML=Y.toPrecision(10);
}

//to fixed method
function toFixed_Method() {
  let num = 94.789543;
  let n = num.toFixed(2);
  document.getElementById("demo3").innerHTML=n;
}

//value of
function value_Method() {
  let wordz = "I am a lot of some texity text";
  let result = wordz;
  document.getElementById("demo4").innerHTML=result;
}
