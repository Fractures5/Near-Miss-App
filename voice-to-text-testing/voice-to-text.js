function init() {
  let descField = document.getElementById('description');
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      let speech = {
        enabled: true,
        listening: false,
        recognition: new window.SpeechRecognition(),
        text: ''
      }
      speech.recognition.continuous = true;
      speech.recognition.interimResults = true;
      speech.recognition.lang = 'en-US';
      speech.recognition.addEventListener('result', (event) => {
        const audio = event.results[event.results.length - 1];
        speech.text = audio[0].transcript;
        const tag = document.activeElement.nodeName;
        if (audio.isFinal) {
          descField.value = descField.value + speech.text;
        }
        if (tag === 'INPUT' || tag === 'TEXTAREA') {
          if (audio.isFinal) {
            document.activeElement.value += speech.text;
            descField.value = descField.value + speech.text;
          }
        }
        result.innerText = speech.text;
      });
  
      toggle.addEventListener('click', () => {
        speech.listening = !speech.listening;
        if (speech.listening) {
          toggle.classList.add('listening');
          toggle.innerText = 'Listening ...';
          speech.recognition.start();
        }
        else {
          toggle.classList.remove('listening');
          toggle.innerText = 'Toggle listening';
          speech.recognition.stop();
        }
      })
    }
  }
  init();