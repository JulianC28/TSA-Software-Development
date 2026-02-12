const synth = window.speechSynthesis;
const voices = synth.getVoices();

document.getElementById("textSubmit").onclick = function(){
  sayThis = document.getElementById("text").value;

  const speech = new SpeechSynthesisUtterance(sayThis);
  
  synth.speak(speech);

  text.blur();
}