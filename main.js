function textToSpeech() {
    let text = document.getElementById("text").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
   speechSynthesis.speak(speech);
}