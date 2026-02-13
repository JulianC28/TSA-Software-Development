const synth = window.speechSynthesis;
const voices = synth.getVoices();

document.getElementById("textSubmit").onclick = function(){
  sayThis = document.getElementById("text").value;
  isEnglish = document.getElementById("english").checked;
  isSpanish = document.getElementById("spanish").checked;

  if(isEnglish == true){
    sayThis.lang = "en-US";
  }
  else if(isSpanish == true){
    sayThis.lang = "es";
  }

  const speech = new SpeechSynthesisUtterance(sayThis);
  synth.speak(speech);
  text.blur();
}

var isRecording = false;

document.getElementById("speechInput").onclick = function(){
  if(isRecording == false){
    isRecording = true;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.addEventListener("result", (event) => {
      document.getElementById("speechOutput").textContent = event.results[0][0].transcript
    })

    /*
    recognition.onresult = (e) => {
      const color = e.results[0][0].transcript;
      document.getElementById("speechOutput").textContent = `Result received: ${color}.`;
      alert(color)
    }
      */

    document.getElementById("speechInput").textContent = "Press again to stop recording";
  }
  else if(isRecording == true){
    isRecording = false;

    document.getElementById("speechInput").textContent = "Press to start recording";
  }
}