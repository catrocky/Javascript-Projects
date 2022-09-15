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
